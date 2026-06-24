import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

// Shared page-width primitive: centered (max-width + auto margins), capped at
// the Figma 1346px content width, with responsive horizontal gutters (24/32px).
// The single source of truth for content width so Header, Footer, and page
// <main> all align to the same column.
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-[1346px] px-6 md:px-8", className)}>
      {children}
    </div>
  );
}
