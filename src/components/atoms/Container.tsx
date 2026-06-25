import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

// Shared page-width primitive: centered (max-width + auto margins), capped at
// the 1100px content width, with a 40px horizontal gutter (px-10) that only
// becomes visible once the viewport is narrower than the cap — on wide screens
// the auto margins dominate and content stays centered at 1100px. The single
// source of truth for content width so Header, Footer, and page <main> all
// align to the same column.
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-[1100px] px-10", className)}>
      {children}
    </div>
  );
}
