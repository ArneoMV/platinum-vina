import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

// Shared page-width primitive: centered, capped at 1200px, with responsive
// horizontal gutters. The single source of truth for content width so Header,
// Footer, and page <main> all align to the same column.
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-[1200px] px-6 md:px-8", className)}>
      {children}
    </div>
  );
}
