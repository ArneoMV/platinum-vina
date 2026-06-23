import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "solid" | "outline" | "chip";
export type ButtonSize = "sm" | "md" | "lg";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children?: ReactNode;
};

// Discriminated on `href`: with it we render an <a>, without it a <button>.
type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsAnchor = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const base =
  "inline-flex items-center justify-center gap-2 font-semibold whitespace-nowrap " +
  "cursor-pointer select-none transition-colors duration-150 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-fg)] " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] " +
  "disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  // Dark fill, white text — future contact submit.
  solid:
    "rounded-md bg-[var(--color-neutral-900)] text-[var(--color-neutral-white)] hover:bg-[var(--color-neutral-800)]",
  // White bg, hairline border, dark text — the default.
  outline:
    "rounded-md border border-[var(--color-border)] bg-[var(--color-neutral-white)] text-[var(--color-fg)] hover:bg-[var(--color-surface)]",
  // Small outline pill for category filters.
  chip: "rounded-full border border-[var(--color-border)] bg-[var(--color-neutral-white)] text-[var(--color-fg)] hover:bg-[var(--color-surface)]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-3.5 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3 text-base",
};

export function Button({
  variant = "outline",
  size = "md",
  className,
  children,
  href,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href !== undefined) {
    return (
      <a
        href={href}
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
