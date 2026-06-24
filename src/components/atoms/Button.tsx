import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/cn";

type CommonProps = {
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

// One unified look for every button/link across the site: the outline "chip"
// design from Figma — white fill, hairline neutral-500 border, neutral-800
// body-big-semibold label, fixed 8/16 padding, modest radius. There is no
// longer a solid/outline/chip distinction or a size scale; padding and type
// are fixed, so those props were removed rather than left as no-ops.
const styles =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap " +
  "cursor-pointer select-none body-big-semibold rounded-md px-4 py-2 " +
  "border border-[var(--color-neutral-500)] bg-[var(--color-neutral-white)] " +
  "text-[var(--color-neutral-800)] transition-colors duration-150 " +
  "hover:border-[var(--color-neutral-600)] hover:bg-[var(--color-neutral-100)] " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-fg)] " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] " +
  "disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none";

export function Button({ className, children, href, ...rest }: ButtonProps) {
  const classes = cn(styles, className);

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
