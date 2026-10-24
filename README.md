# AI Career Catalyst

A responsive, single-page React + TypeScript website for Seema Tembhurne's free learning community. Built with Vite, Tailwind CSS v4, Framer Motion, and Lucide icons.

## Run

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

## Connect the Community

Edit `src/config.ts` and set `whatsappInviteUrl` to the real WhatsApp community invitation URL supplied by Seema. This is the single configuration value used by every primary CTA, including the mobile sticky CTA. Configured links open in a new tab with `noopener noreferrer`; WhatsApp may hand off to the installed app.

While the value is empty, the CTA opens an accessible dialog that clearly explains that the invitation has not been connected. No fake URL, personal-data form, or simulated successful signup is used.

## Replace the Portrait

The current image in `public/images/learning-workspace.jpg` is an AI-generated illustrative placeholder, not a photograph of Seema. Both uses are visibly labeled and have honest alt text.

Add an approved photograph to `public/images/`, then set `portraitUrl` in `src/config.ts` to its path. This updates both images, changes the alt text, and removes placeholder captions. For the hero, use a landscape composition with Seema on the right and uncluttered space on the left. Adjust `.hero-media img` and `.about-portrait img` in `src/index.css` if the new photograph needs a different crop.

## Content and Behavior

- Page sections and dialogs: `src/App.tsx`
- Learning topics, questions, and supporting content: `src/data.ts`
- Reusable brand, buttons, and motion components: `src/components/ui.tsx`
- Design tokens, responsive layouts, and reduced-motion styling: `src/index.css`
- SEO metadata: `index.html`

The learning explorer filters ten topics and reveals a practical starting exercise for each. These are exploration ideas, not promises of existing full courses. FAQs support keyboard activation. Native dialogs provide focus containment and Escape-to-close behavior. Privacy and community guidelines are available from the invite dialog, FAQ section, final CTA, and footer.

The page uses local images and a locally served DM Sans font, with no analytics, forms, nonessential cookies, or personal-data storage. Hosting logs and WhatsApp's own privacy practices are explained in the privacy notice. Review the guidelines and privacy copy before publication, especially if you later add services or tracking.

## Launch Checklist

- Add and verify the actual WhatsApp invite in `src/config.ts`.
- Replace the illustrative portrait with Seema's approved photograph.
- Review community guidelines, privacy details, and current resource availability.
- Add the final public canonical URL and social sharing image after a domain is chosen.
- Run `npx tsc --noEmit` and `npm run build`.

No employment, salary, or income outcomes are guaranteed. The site uses only the professional achievements supplied by Seema.

## Verification

Run `npx playwright install chromium` once, then `npx playwright test`. On Linux, browser system libraries may require `npx playwright install-deps chromium`.

The tests cover all ten sections, image loading, metadata, the placeholder invite, the configured-link branch using a test-only fixture, topic filtering and expansion, FAQs, privacy and guidelines, keyboard focus, mobile navigation, the sticky CTA, layout widths from 320px to 1920px, and automated WCAG accessibility checks. Real WhatsApp membership must be verified after the actual invitation is supplied.

DM Sans is locally served under the SIL Open Font License included at `public/fonts/OFL.txt`.
