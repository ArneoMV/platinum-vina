import { cn } from "@/lib/cn";

export type LogoSize = "sm" | "md" | "lg";

type LogoProps = {
  size?: LogoSize;
  className?: string;
};

const crownPx: Record<LogoSize, number> = { sm: 18, md: 26, lg: 38 };
const wordmarkClass: Record<LogoSize, string> = {
  sm: "heading-xs",
  md: "heading-s",
  lg: "heading-l",
};

export function Logo({ size = "md", className }: LogoProps) {
  return (
    <span
      className={cn("inline-flex items-center gap-2.5 text-[var(--color-fg)]", className)}
    >
      {/*
        Placeholder crown — simple inline SVG.
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
