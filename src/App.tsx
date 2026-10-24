import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BadgeCheck,
  Check,
  ChevronRight,
  Info,
  Menu,
  Minus,
  Plus,
  ShieldCheck,
  Trophy,
  X,
} from "lucide-react";
import { siteConfig } from "./config";
import {
  audiences,
  benefits,
  challenges,
  climbSteps,
  faqs,
  journey,
  learningTopics,
  navLinks,
} from "./data";
import type { TopicCategory } from "./data";
import {
  Brand,
  BrandMark,
  CommunityContext,
  Eyebrow,
  JoinButton,
  Reveal,
  WhatsAppIcon,
  useCommunity,
} from "./components/ui";
import type { DialogKind } from "./components/ui";

const portraitUrl = siteConfig.portraitUrl || siteConfig.placeholderPortraitUrl;
const portraitAlt = siteConfig.portraitUrl
  ? "Seema Tembhurne, founder of AI Career Catalyst"
  : "AI-generated placeholder portrait of a technology professional, not a photograph of Seema";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="header-cta">
          <JoinButton compact />
        </div>
        <button
          ref={menuButton}
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.23 }}
          >
            <div className="container mobile-nav-inner">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                  <ArrowUpRight size={17} />
                </a>
              ))}
              <a href="#framework" onClick={() => setMenuOpen(false)}>
                The C.L.I.M.B. Framework
                <ArrowUpRight size={17} />
              </a>
              <div className="mobile-nav-cta">
                <JoinButton />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const reducedMotion = useReducedMotion();
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-scene">
        <motion.div
          className="hero-media"
          initial={reducedMotion ? false : { scale: 1.035 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <img
            src={portraitUrl}
            alt={portraitAlt}
            fetchPriority="high"
            width="1536"
            height="1024"
          />
        </motion.div>
        <div className="hero-shade" aria-hidden="true" />
        <div className="container hero-main">
          <div className="hero-copy">
            <Reveal delay={0.05}>
              <Eyebrow>A community by Seema Tembhurne</Eyebrow>
            </Reveal>
            <Reveal delay={0.13}>
              <h1 id="hero-title">
                AI Career
                <br />
                <span>
                  Catalyst<span className="hero-period">.</span>
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="hero-promise">
                Build your career skills with AI.
                <br />
                Create your next opportunity.
              </p>
              <p className="hero-description">
                Practical AI learning and career guidance for students, job
                seekers, and professionals ready for their next chapter.
              </p>
            </Reveal>
            <Reveal className="hero-actions" delay={0.32}>
              <JoinButton />
              <a className="explore-link" href="#learn">
                Explore what you'll learn
                <ArrowDown size={16} />
              </a>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="hero-reassurance">
                <span className="status-dot" aria-hidden="true" />
                Free on WhatsApp. A good place to start.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
      <div className="hero-baseline">
        <div className="container hero-baseline-inner">
          <p className="trust-line">
            <span>Practical skills</span>
            <span>Career-focused learning</span>
            <span>Beginner-friendly guidance</span>
          </p>
          {!siteConfig.portraitUrl && (
            <p className="portrait-caption">
              Illustrative portrait, not a photo of Seema.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section
      id="starting-point"
      className="section problem-section"
      aria-labelledby="problem-title"
    >
      <div className="container">
        <Reveal className="section-heading centered">
          <Eyebrow>Ambition is not the problem. Clarity is.</Eyebrow>
          <h2 id="problem-title">
            Want to grow your career,
            <br />
            but don't know where to start?
          </h2>
          <p>If any of this feels familiar, you're in the right place.</p>
        </Reveal>
        <div className="challenge-grid">
          {challenges.map(({ icon: Icon, title, text }, index) => (
            <Reveal
              key={title}
              className="challenge"
              delay={(index % 3) * 0.06}
            >
              <Icon className="challenge-icon" size={23} strokeWidth={1.5} />
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="problem-conclusion">
          <p>
            You don't need to learn everything at once.
            <br className="mobile-break" />{" "}
            <strong>
              You need a clear starting point and a practical plan.
            </strong>
          </p>
          <ArrowDown size={21} strokeWidth={1.4} aria-hidden="true" />
        </Reveal>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section
      id="community"
      className="section community-section"
      aria-labelledby="community-title"
    >
      <div className="container">
        <Reveal className="section-heading centered">
          <Eyebrow>Less guesswork. More forward motion.</Eyebrow>
          <h2 id="community-title">Meet AI Career Catalyst.</h2>
          <p>
            A free WhatsApp learning community to help you explore AI, develop
            practical skills,
            <br className="desktop-break" /> and make more informed decisions
            about your career.
          </p>
        </Reveal>
        <ol className="journey">
          {journey.map(({ icon: Icon, title, text }, index) => (
            <li key={title}>
              <Reveal delay={index * 0.08}>
                <div className="journey-node">
                  <Icon size={25} strokeWidth={1.45} />
                  <span className="journey-number">0{index + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
        <Reveal className="community-action">
          <JoinButton />
          <p>One community. Your own pace. A clearer direction.</p>
        </Reveal>
      </div>
    </section>
  );
}

const topicFilters: { id: TopicCategory; label: string; count: number }[] = [
  { id: "all", label: "All topics", count: 10 },
  { id: "technology", label: "AI & technology", count: 5 },
  { id: "career", label: "Career & opportunity", count: 5 },
];

function Learning() {
  const [category, setCategory] = useState<TopicCategory>("all");
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();
  const filteredTopics = learningTopics.filter(
    (topic) => category === "all" || topic.category === category,
  );
  return (
    <section
      id="learn"
      className="section learning-section"
      aria-labelledby="learning-title"
    >
      <div className="container">
        <Reveal className="section-heading split-heading">
          <div>
            <Eyebrow>What you'll explore</Eyebrow>
            <h2 id="learning-title">
              Skills that move
              <br />
              you forward.
            </h2>
          </div>
          <p>
            You don't need to master it all.
            <br />
            Start with what is relevant to you.
            <br />
            <span className="text-accent">
              Select a topic for a practical starting idea.
            </span>
          </p>
        </Reveal>
        <div
          className="topic-filters"
          role="group"
          aria-label="Filter learning topics"
        >
          {topicFilters.map((filter) => (
            <button
              type="button"
              key={filter.id}
              aria-pressed={category === filter.id}
              onClick={() => {
                setCategory(filter.id);
                setExpandedTopic(null);
              }}
            >
              {filter.label}
              <span>{filter.count}</span>
            </button>
          ))}
        </div>
        <p className="sr-only" role="status">
          Showing {filteredTopics.length} learning topics.
        </p>
        <div className="topic-grid">
          {filteredTopics.map(
            ({ id, icon: Icon, title, summary, description, idea }, index) => {
              const isOpen = expandedTopic === id;
              return (
                <motion.article
                  className={`topic ${isOpen ? "topic-open" : ""}`}
                  key={id}
                  initial={reducedMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: reducedMotion ? 0 : 0.25,
                    delay: reducedMotion ? 0 : Math.min(index * 0.025, 0.15),
                  }}
                >
                  <h3>
                    <button
                      className="topic-toggle"
                      id={`topic-button-${id}`}
                      aria-expanded={isOpen}
                      aria-controls={`topic-panel-${id}`}
                      onClick={() => setExpandedTopic(isOpen ? null : id)}
                    >
                      <span className="topic-icon">
                        <Icon size={24} strokeWidth={1.5} />
                      </span>
                      <span className="topic-text">
                        <span className="topic-title">{title}</span>
                        <span className="topic-summary">{summary}</span>
                      </span>
                      <Plus
                        className={`topic-plus ${isOpen ? "rotated" : ""}`}
                        size={19}
                        strokeWidth={1.4}
                      />
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`topic-panel-${id}`}
                        role="region"
                        aria-labelledby={`topic-button-${id}`}
                        className="topic-panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="topic-panel-inner">
                          <p>{description}</p>
                          <div className="practice-idea">
                            <span>A small step to try</span>
                            <p>{idea}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            },
          )}
        </div>
        <div className="learning-note">
          <Info size={18} strokeWidth={1.6} />
          <p>
            These are topics to explore, not a catalogue of complete courses.
            Free community resources are shared as available. Any future paid
            training will be clearly marked, separate, and optional.
          </p>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="section about-section"
      aria-labelledby="about-title"
    >
      <div className="container about-grid">
        <Reveal className="about-visual">
          <figure className="about-portrait">
            <img
              src={portraitUrl}
              alt={portraitAlt}
              loading="lazy"
              width="480"
              height="600"
            />
            {!siteConfig.portraitUrl && (
              <figcaption>
                Illustrative portrait placeholder. Seema's photo will go here.
              </figcaption>
            )}
          </figure>
          <div className="about-signature">
            <span>Seema Tembhurne</span>
            <p>Technology professional. Lifelong learner.</p>
          </div>
        </Reveal>
        <Reveal className="about-copy" delay={0.1}>
          <Eyebrow>The person behind the community</Eyebrow>
          <h2 id="about-title">
            Learn from someone
            <br />
            who believes in
            <br />
            <span className="text-accent">practical growth.</span>
          </h2>
          <p className="about-hello">Hi, I'm Seema.</p>
          <p>
            I'm{" "}
            <strong>Seema Tembhurne, a Software Engineer at Capgemini</strong>{" "}
            with experience in manual testing, Selenium with Java, and a growing
            passion for AI-assisted learning and Power BI.
          </p>
          <p>
            My journey has taught me that curiosity, consistent effort, and
            putting knowledge into practice can open new doors. I created AI
            Career Catalyst to help you find your own starting point.
          </p>
          <ul className="achievement-list">
            <li>
              <BadgeCheck size={19} />
              <span>Promoted in my first year</span>
            </li>
            <li>
              <Trophy size={19} />
              <span>Americas Cyber Competition winner</span>
            </li>
            <li>
              <ShieldCheck size={19} />
              <span>Recognized for cybersecurity awareness</span>
            </li>
          </ul>
          <blockquote>
            "Don't just learn AI. Use AI to learn faster, work smarter, grow
            your career, and create opportunities."
          </blockquote>
          <p className="about-values">
            Continuous learning. Practical implementation. Curiosity and
            problem-solving. Above all, honest guidance that helps people grow.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Framework() {
  return (
    <section
      id="framework"
      className="section framework-section"
      aria-labelledby="framework-title"
    >
      <div className="container">
        <Reveal className="section-heading split-heading">
          <div>
            <Eyebrow>The C.L.I.M.B. learning framework</Eyebrow>
            <h2 id="framework-title">
              Small steps.
              <br />
              <span>Meaningful growth.</span>
            </h2>
          </div>
          <p>
            A little structure can make a big difference.
            <br />
            My proposed framework helps you turn
            <br className="desktop-break" /> learning intentions into practical
            action.
          </p>
        </Reveal>
        <ol className="climb-staircase">
          {climbSteps.map((step, index) => (
            <li
              className="climb-step"
              key={step.letter}
              style={{ "--step": index } as CSSProperties}
            >
              <Reveal delay={index * 0.08}>
                <span className="climb-letter" aria-hidden="true">
                  {step.letter}
                  <span>.</span>
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </Reveal>
              <span className="climb-rule" aria-hidden="true">
                <span>0{index + 1}</span>
                <ArrowUpRight size={16} />
              </span>
            </li>
          ))}
        </ol>
        <p className="framework-note">
          A proposed learning approach to adapt to your goals, experience, and
          pace. Not a guarantee of results.
        </p>
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section
      id="who-its-for"
      className="section audience-section"
      aria-labelledby="audience-title"
    >
      <div className="container">
        <Reveal className="section-heading centered">
          <Eyebrow>Come as you are. Grow from here.</Eyebrow>
          <h2 id="audience-title">
            You don't need to have
            <br />
            it all figured out.
          </h2>
          <p>Just a willingness to learn, practise, and take the next step.</p>
        </Reveal>
        <div className="audience-grid">
          <Reveal className="audience-for">
            <h3>
              <Check size={21} />
              This community is for you
            </h3>
            <ul>
              {audiences.map((audience) => (
                <li key={audience}>
                  <Check size={16} />
                  <span>{audience}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="audience-not" delay={0.1}>
            <h3>
              <Minus size={21} />
              Let's keep expectations real
            </h3>
            <p>This may not be the right fit if you're looking for:</p>
            <ul>
              <li>
                <Minus size={16} />
                <span>Guaranteed jobs, salaries, or income</span>
              </li>
              <li>
                <Minus size={16} />
                <span>Instant results without time and practice</span>
              </li>
              <li>
                <Minus size={16} />
                <span>
                  A shortcut that doesn't involve learning or implementation
                </span>
              </li>
            </ul>
            <p className="audience-welcome">
              But if you're ready to make steady progress,
              <br />
              there is a place for you here.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function MemberBenefits() {
  return (
    <section
      id="member-benefits"
      className="section benefits-section"
      aria-labelledby="benefits-title"
    >
      <div className="container benefits-grid">
        <Reveal className="benefits-intro">
          <Eyebrow>Inside the free community</Eyebrow>
          <h2 id="benefits-title">
            A little guidance.
            <br />A lot to build on.
          </h2>
          <p>
            Useful ideas, practical direction, and a community to keep learning
            alongside.
          </p>
          <JoinButton />
          <p className="benefits-note">
            Resources are shared as available. Community topics and activities
            may evolve over time.
          </p>
        </Reveal>
        <div className="benefit-list">
          {benefits.map(({ icon: Icon, title, text }, index) => (
            <Reveal className="benefit" key={title} delay={index * 0.035}>
              <Icon size={24} strokeWidth={1.45} />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <span className="benefit-number">0{index + 1}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { openDialog } = useCommunity();
  return (
    <section
      id="faq"
      className="section faq-section"
      aria-labelledby="faq-title"
    >
      <div className="container faq-grid">
        <Reveal className="faq-intro">
          <Eyebrow>Your questions, answered</Eyebrow>
          <h2 id="faq-title">
            A little clarity,
            <br />
            before you join.
          </h2>
          <p>
            Honest answers.
            <br />
            No big promises. Just a clear start.
          </p>
          <button
            className="text-link"
            onClick={() => openDialog("guidelines")}
          >
            Read our community guidelines
            <ArrowUpRight size={16} />
          </button>
        </Reveal>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                className={`faq-item ${isOpen ? "faq-open" : ""}`}
                key={faq.question}
              >
                <h3>
                  <button
                    id={`faq-button-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    {faq.question}
                    <span>
                      {isOpen ? <Minus size={19} /> : <Plus size={19} />}
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-button-${index}`}
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const { openDialog } = useCommunity();
  return (
    <section
      id="join"
      className="section final-cta"
      aria-labelledby="final-title"
    >
      <BrandMark className="final-brand-watermark" />
      <Reveal className="container final-inner">
        <Eyebrow>Your next chapter starts here</Eyebrow>
        <h2 id="final-title">
          Your next career step starts
          <br />
          with <span>one small action.</span>
        </h2>
        <p>
          You don't need to know everything about AI today.
          <br />
          Start learning, practise consistently, and take the next step toward
          your goals.
        </p>
        <JoinButton />
        <p className="final-support">
          Start your AI and career-growth journey with AI Career Catalyst.
        </p>
        <p className="participation-note">
          Before participating, please read the{" "}
          <button onClick={() => openDialog("guidelines")}>
            community guidelines
          </button>{" "}
          and{" "}
          <button onClick={() => openDialog("privacy")}>privacy notice</button>.
        </p>
      </Reveal>
    </section>
  );
}

function Footer() {
  const { openDialog } = useCommunity();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div>
            <Brand />
            <p className="footer-tagline">
              Practical skills. Clear direction. New possibilities.
            </p>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#framework">The C.L.I.M.B. Framework</a>
            <button onClick={() => openDialog("guidelines")}>
              Community Guidelines
            </button>
            <button onClick={() => openDialog("privacy")}>
              Privacy Notice
            </button>
          </nav>
          <a className="back-to-top" href="#home" aria-label="Back to top">
            <ArrowUp size={19} />
          </a>
        </div>
        <div className="footer-disclaimer">
          <ShieldCheck size={17} />
          <p>
            Learning does not guarantee employment, salary, or income. Outcomes
            depend on your skills, effort, experience, and market conditions.
          </p>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Seema Tembhurne. All rights
            reserved.
          </p>
          <p>
            An independent community. Not affiliated with or endorsed by
            Capgemini.
          </p>
        </div>
      </div>
    </footer>
  );
}

function InfoDialog({
  kind,
  onClose,
  onChange,
}: {
  kind: DialogKind | null;
  onClose: () => void;
  onChange: (kind: DialogKind) => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const isOpen = kind !== null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) {
      returnFocusRef.current = document.activeElement as HTMLElement;
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
      returnFocusRef.current?.focus({ preventScroll: true });
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!kind || !dialogRef.current?.open) return;
    dialogRef.current.scrollTop = 0;
    dialogRef.current
      .querySelector<HTMLButtonElement>(".dialog-close")
      ?.focus({ preventScroll: true });
  }, [kind]);

  const explore = () => {
    onClose();
    window.setTimeout(() => {
      const heading = document.getElementById("learning-title");
      document
        .getElementById("learn")
        ?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "instant"
            : "smooth",
        });
      heading?.setAttribute("tabindex", "-1");
      heading?.focus({ preventScroll: true });
    }, 60);
  };

  let content: ReactNode = null;
  if (kind === "join") {
    content = (
      <>
        <span className="dialog-symbol">
          <WhatsAppIcon />
        </span>
        <Eyebrow>A clear start, without the rush</Eyebrow>
        <h2 id="dialog-title">
          Your community invite
          <br />
          is on its way.
        </h2>
        <p>
          AI Career Catalyst is free to join. Seema's WhatsApp invitation link
          hasn't been added to this website yet.
        </p>
        <div className="invite-status">
          <span className="status-dot" />
          <div>
            <strong>Invite link not connected</strong>
            <span>This is a placeholder, not a WhatsApp invitation.</span>
          </div>
        </div>
        <p>
          There is no form to fill in and no personal information to leave here.
          In the meantime, discover a practical idea you can try today.
        </p>
        <button className="join-button dialog-explore" onClick={explore}>
          Explore the learning topics
          <ArrowRight size={18} />
        </button>
        <p className="dialog-fine-print">
          Before joining, review the{" "}
          <button onClick={() => onChange("guidelines")}>
            community guidelines
          </button>{" "}
          and{" "}
          <button onClick={() => onChange("privacy")}>privacy notice</button>.
        </p>
      </>
    );
  } else if (kind === "privacy") {
    content = (
      <>
        <span className="dialog-symbol">
          <ShieldCheck size={26} />
        </span>
        <Eyebrow>Your privacy matters</Eyebrow>
        <h2 id="dialog-title">
          A clear look at
          <br />
          how joining works.
        </h2>
        <div className="policy-content">
          <h3>On this website</h3>
          <p>
            This page has no sign-up form, advertising trackers, or analytics
            scripts. It does not ask for or store your name, email address, or
            phone number. The hosting provider may process basic technical logs,
            such as IP addresses, to deliver and secure the website.
          </p>
          <h3>When you choose to join</h3>
          <p>
            Once a real invite is configured, the join buttons will open
            WhatsApp in a new tab or its mobile app. You choose whether to join
            there. This website does not automatically add you to a group.
          </p>
          <h3>Inside WhatsApp</h3>
          <p>
            WhatsApp's own terms and privacy policy apply. Your phone number,
            profile details, and messages may be visible to administrators or
            other participants, depending on the group type and your settings.
            Review the invite, member visibility, privacy settings, and current
            group rules before participating.
          </p>
          <h3>Stay in control</h3>
          <p>
            Never share passwords, financial information, confidential work
            material, or sensitive personal data. You can mute or leave the
            community using WhatsApp's controls. For community-related
            questions, contact the administrator through the group's information
            screen.
          </p>
        </div>
        <button className="join-button dialog-explore" onClick={onClose}>
          Close and keep exploring
          <ArrowRight size={17} />
        </button>
      </>
    );
  } else if (kind === "guidelines") {
    content = (
      <>
        <span className="dialog-symbol">
          <BrandMark />
        </span>
        <Eyebrow>A thoughtful place to learn</Eyebrow>
        <h2 id="dialog-title">
          Good learning starts
          <br />
          with a good community.
        </h2>
        <p>
          Please read the current rules in WhatsApp before participating. These
          principles guide the AI Career Catalyst community:
        </p>
        <ol className="guideline-list">
          <li>
            <strong>Be respectful and beginner-friendly.</strong>
            <span>
              Ask questions, make room for different experiences, and help
              others learn without judgment.
            </span>
          </li>
          <li>
            <strong>Keep it relevant and useful.</strong>
            <span>
              Stay focused on AI, practical skills, and career growth. No spam,
              unsolicited promotions, or recruitment pitches.
            </span>
          </li>
          <li>
            <strong>Learn and share responsibly.</strong>
            <span>
              Verify AI-generated information, credit original sources, and
              never share confidential or sensitive personal data.
            </span>
          </li>
          <li>
            <strong>Explore opportunities ethically.</strong>
            <span>
              No misleading job offers, guaranteed-income claims, or requests
              for payment in exchange for employment.
            </span>
          </li>
          <li>
            <strong>Set realistic expectations.</strong>
            <span>
              Resources and activities may evolve. Joining does not include
              guaranteed work, daily sessions, personal coaching, or individual
              consulting.
            </span>
          </li>
        </ol>
        <p className="dialog-fine-print">
          Administrators may moderate content or remove participants to protect
          the learning environment. You are always free to leave.
        </p>
        <button className="join-button dialog-explore" onClick={onClose}>
          Understood, keep exploring
          <Check size={18} />
        </button>
      </>
    );
  }

  return (
    <dialog
      ref={dialogRef}
      className="info-dialog"
      aria-labelledby="dialog-title"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="dialog-inner">
        <button
          className="dialog-close"
          aria-label="Close dialog"
          onClick={onClose}
        >
          <X size={21} />
        </button>
        {content}
      </div>
    </dialog>
  );
}

function MobileStickyCTA() {
  const [heroVisible, setHeroVisible] = useState(true);
  const [finalVisible, setFinalVisible] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("home");
    const final = document.getElementById("join");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "home") setHeroVisible(entry.isIntersecting);
          if (entry.target.id === "join") setFinalVisible(entry.isIntersecting);
        });
      },
      { threshold: 0 },
    );
    if (hero) observer.observe(hero);
    if (final) observer.observe(final);
    return () => observer.disconnect();
  }, []);
  return (
    <AnimatePresence>
      {!heroVisible && !finalVisible && (
        <motion.div
          className="mobile-sticky-cta"
          initial={{ y: 90 }}
          animate={{ y: 0 }}
          exit={{ y: 90 }}
          transition={{ duration: 0.25 }}
        >
          <JoinButton />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const [dialog, setDialog] = useState<DialogKind | null>(null);
  return (
    <MotionConfig reducedMotion="user">
      <CommunityContext.Provider value={{ openDialog: setDialog }}>
        <a className="skip-link" href="#main-content">
          Skip to content
          <ChevronRight size={16} />
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          <Hero />
          <Problem />
          <Community />
          <Learning />
          <About />
          <Framework />
          <Audience />
          <MemberBenefits />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <MobileStickyCTA />
        <InfoDialog
          kind={dialog}
          onClose={() => setDialog(null)}
          onChange={setDialog}
        />
      </CommunityContext.Provider>
    </MotionConfig>
  );
}
