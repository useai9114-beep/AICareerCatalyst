import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("contains the complete page, working local assets, and SEO metadata", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page).toHaveTitle(/AI Career Catalyst/);
  await expect(page.locator("main > section")).toHaveCount(10);
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.locator("h1")).toContainText("AI Career");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    /Seema Tembhurne/,
  );
  await expect(page.locator(".hero-actions .join-button")).toBeInViewport();
  await expect(page.locator(".portrait-caption")).toContainText(
    "not a photo of Seema",
  );
  expect(
    await page
      .locator(".hero-media img")
      .evaluate(
        (image: HTMLImageElement) => image.complete && image.naturalWidth > 0,
      ),
  ).toBe(true);
  expect(errors).toEqual([]);
});

test("join placeholder is honest, keyboard accessible, and restores focus", async ({
  page,
}) => {
  await page.goto("/");
  const trigger = page.locator(".hero-actions .join-button");
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog).toContainText("Invite link not connected");
  await expect(dialog).toContainText("not a WhatsApp invitation");
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await trigger.click();
  await dialog
    .getByRole("button", { name: "Explore the learning topics" })
    .click();
  await expect(dialog).not.toBeVisible();
  await expect(page.locator("#learning-title")).toBeFocused();
  await expect(page.locator("#learning-title")).toBeInViewport();
});

test("learning filters and expandable practical ideas work", async ({
  page,
}) => {
  await page.goto("/#learn");
  await expect(page.locator(".topic")).toHaveCount(10);
  await page
    .getByRole("button", { name: "AI & technology 5", exact: true })
    .click();
  await expect(page.locator(".topic")).toHaveCount(5);
  await page.getByRole("button", { name: /AI Fundamentals & ChatGPT/ }).click();
  await expect(page.locator("#topic-panel-ai-fundamentals")).toContainText(
    "A small step to try",
  );
  await expect(page.locator("#topic-button-ai-fundamentals")).toHaveAttribute(
    "aria-expanded",
    "true",
  );
  await page.getByRole("button", { name: /AI Fundamentals & ChatGPT/ }).click();
  await expect(page.locator("#topic-button-ai-fundamentals")).toHaveAttribute(
    "aria-expanded",
    "false",
  );
  await page
    .getByRole("button", { name: "Career & opportunity 5", exact: true })
    .click();
  await expect(page.locator(".topic")).toHaveCount(5);
  await expect(
    page.getByRole("button", { name: /Freelancing & Digital Services/ }),
  ).toBeVisible();
  await page
    .getByRole("button", { name: "All topics 10", exact: true })
    .click();
  await expect(page.locator(".topic")).toHaveCount(10);
});

test("FAQ answers toggle and keep realistic outcome expectations", async ({
  page,
}) => {
  await page.goto("/#faq");
  const question = page.getByRole("button", {
    name: "Will this help me get a job?",
    exact: true,
  });
  await question.click();
  await expect(question).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator("#faq-answer-2")).toContainText("not guaranteed");
  await expect(page.locator("#faq-button-0")).toHaveAttribute(
    "aria-expanded",
    "false",
  );
  await question.press("Enter");
  await expect(question).toHaveAttribute("aria-expanded", "false");
  await page
    .getByRole("button", {
      name: "Will I earn money after joining?",
      exact: true,
    })
    .click();
  await expect(page.locator("#faq-answer-4")).toContainText(
    "No income is guaranteed",
  );
});

test("privacy and community guidelines open and can be dismissed", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("navigation", { name: "Footer navigation" })
    .getByRole("button", { name: "Privacy Notice" })
    .click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toContainText(
    "Your phone number, profile details, and messages may be visible",
  );
  await dialog
    .getByRole("button", { name: "Close dialog", exact: true })
    .click();
  await expect(dialog).not.toBeVisible();
  await page
    .getByRole("navigation", { name: "Footer navigation" })
    .getByRole("button", { name: "Community Guidelines" })
    .click();
  await expect(dialog.locator(".guideline-list li")).toHaveCount(5);
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
});

test("one configured URL is used by every primary CTA with safe new-tab behavior", async ({
  page,
}) => {
  // Test-only fixture: never written to the application or opened as a real invite.
  const fixture = "https://example.test/community-invite";
  await page.route("**/src/config.ts*", async (route) => {
    const response = await route.fetch();
    const body = (await response.text()).replace(
      /whatsappInviteUrl:\s*(["'])\1/,
      `whatsappInviteUrl: '${fixture}'`,
    );
    await route.fulfill({ response, body });
  });
  await page.goto("/");
  const links = page.locator("a.join-button");
  await expect(links).toHaveCount(5);
  for (const link of await links.all()) {
    await expect(link).toHaveAttribute("href", fixture);
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", "noopener noreferrer");
  }
  await expect(
    page
      .locator("button.join-button")
      .filter({ hasText: "Join the Free AI Community" }),
  ).toHaveCount(0);
});

test("mobile navigation and sticky join action work", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(page.locator(".hero-actions .join-button")).toBeInViewport();
  await page.getByRole("button", { name: "Open navigation" }).click();
  await expect(
    page.getByRole("navigation", { name: "Mobile navigation" }),
  ).toBeVisible();
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "What You'll Learn" })
    .click();
  await expect(
    page.getByRole("navigation", { name: "Mobile navigation" }),
  ).not.toBeVisible();
  await expect(page.locator(".mobile-sticky-cta")).toBeVisible();
  await page.locator(".mobile-sticky-cta .join-button").click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await page.locator("#join").scrollIntoViewIfNeeded();
  await expect(page.locator(".mobile-sticky-cta")).not.toBeVisible();
});

for (const width of [320, 390, 768, 1024, 1440, 1920]) {
  test(`no horizontal overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth),
    ).toBeLessThanOrEqual(width);
  });
}

test("page and invite dialog pass automated accessibility checks", async ({
  page,
}) => {
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  const pageResults = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(pageResults.violations).toEqual([]);
  await page.locator(".hero-actions .join-button").click();
  const dialogResults = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(dialogResults.violations).toEqual([]);
});

test("mobile menu and privacy notice pass automated accessibility checks", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open navigation" }).click();
  const menuResults = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(menuResults.violations).toEqual([]);
  await page.keyboard.press("Escape");
  await page
    .getByRole("navigation", { name: "Footer navigation" })
    .getByRole("button", { name: "Privacy Notice" })
    .click();
  const privacyResults = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(privacyResults.violations).toEqual([]);
});

test("skip link and navigation support keyboard visitors", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main-content")).toBeFocused();
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "About Seema" })
    .click();
  await expect(page.locator("#about-title")).toBeInViewport();
});
