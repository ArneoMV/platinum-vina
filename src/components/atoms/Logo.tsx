import { cn } from "@/lib/cn";

export type LogoSize = "sm" | "md" | "lg";
// "dark" = dark ink for light backgrounds (default); "light" = white ink for
// the dark footer. Both crown (fill) and wordmark follow currentColor.
export type LogoTone = "dark" | "light";

type LogoProps = {
  size?: LogoSize;
  tone?: LogoTone;
  className?: string;
};

const crownPx: Record<LogoSize, number> = { sm: 18, md: 26, lg: 38 };
const wordmarkClass: Record<LogoSize, string> = {
  sm: "heading-xs",
  md: "heading-s",
  lg: "heading-l",
};
const toneClass: Record<LogoTone, string> = {
  dark: "text-[var(--color-fg)]",
  light: "text-[var(--color-footer-fg)]",
};

export function Logo({ size = "md", tone = "dark", className }: LogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5",
        toneClass[tone],
        className,
      )}
    >
      {/*
        Placeholder crown — simple inline SVG, inherits currentColor.
        TODO: replace with the real /public/assets/logo.svg when provided.
      */}
      <svg
        width={crownPx[size]}
        height={crownPx[size]}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M3 6 L8 12 L12 4 L16 12 L21 6 L19 18 L5 18 Z" />
        <rect x="4.5" y="19" width="15" height="2.2" rx="0.4" />
      </svg>
      <span className={cn(wordmarkClass[size], "uppercase tracking-[0.16em]")}>
        Platinum Vina
      </span>
    </span>
  );
}
