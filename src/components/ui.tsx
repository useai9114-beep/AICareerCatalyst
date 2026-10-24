import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "../config";

export type DialogKind = "join" | "privacy" | "guidelines";

export const CommunityContext = createContext<{
  openDialog: (dialog: DialogKind) => void;
}>({ openDialog: () => undefined });

export function useCommunity() {
  return useContext(CommunityContext);
}

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M18 3.5 22.2 15.8 34.5 20 22.2 24.2 18 36.5 13.8 24.2 1.5 20 13.8 15.8 18 3.5Z"
        fill="currentColor"
      />
      <path
        d="m32 1.5 1.8 5.2L39 8.5l-5.2 1.8L32 15.5l-1.8-5.2L25 8.5l5.2-1.8L32 1.5Z"
        fill="currentColor"
        opacity=".55"
      />
    </svg>
  );
}

export function Brand() {
  return (
    <a
      className="brand"
      href="#home"
      aria-label="AI Career Catalyst, back to top"
    >
      <BrandMark className="brand-mark" />
      <span className="brand-type">
        <span className="brand-name">AI Career Catalyst</span>
        <span className="brand-byline">by Seema Tembhurne</span>
      </span>
    </a>
  );
}

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.45L3 20.5l1.3-4.75A8.5 8.5 0 1 1 20.5 11.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8.2 7.5c.25-.28.5-.3.76-.3h.36c.18 0 .32.04.43.3l.8 1.86c.1.24.06.4-.09.59l-.6.72c-.12.15-.18.26-.04.5.41.74 1.41 1.85 2.81 2.45.23.1.36.08.5-.08l.9-1.04c.16-.18.3-.2.53-.1l1.8.85c.23.12.38.18.41.29.05.11.05.63-.2 1.22-.25.58-1.22 1.1-1.7 1.14-.45.04-1.02.07-2.93-.72-2.42-1-4.01-3.43-4.13-3.59-.12-.16-.98-1.3-.98-2.48 0-1.18.6-1.76.83-2.01Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function JoinButton({
  compact = false,
  className = "",
}: {
  compact?: boolean;
  className?: string;
}) {
  const { openDialog } = useCommunity();
  const inviteUrl = siteConfig.whatsappInviteUrl.trim();
  const classes = `join-button ${compact ? "join-button-compact" : ""} ${className}`;
  const content = (
    <>
      <WhatsAppIcon />
      <span>Join the Free AI Community</span>
      {!compact && <ArrowUpRight size={17} className="button-arrow" />}
    </>
  );

  if (inviteUrl) {
    return (
      <a
        className={classes}
        href={inviteUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join the Free AI Community (opens in a new tab)"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      type="button"
      onClick={() => openDialog("join")}
    >
      {content}
    </button>
  );
}

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`eyebrow ${className}`}>
      <span className="eyebrow-line" aria-hidden="true" />
      {children}
    </p>
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
