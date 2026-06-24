"use client";

import { Button } from "@/components/atoms/Button";
import { cn } from "@/lib/cn";
import { categories } from "@/data/wines";

type CategoryChipsProps = {
  // Row alignment of the wrapped chips. "start" (default) packs them left —
  // used by ClosingStatement. "end" right-aligns them on lg+ (the Hero
  // cluster) while still wrapping left on small screens, matching the mockups.
  align?: "start" | "end";
};

// In-page category navigation: chip links that jump to each section anchor.
// Scrolling is handled purely by CSS (html { scroll-behavior: smooth } +
// each section's scroll-margin-top), so no JS handler is needed here. Kept a
// client component per spec, leaving room for an onClick offset tweak later.
export function CategoryChips({ align = "start" }: CategoryChipsProps) {
  return (
    <nav aria-label="Filtriraj po kategoriji">
      <ul
        className={cn(
          "flex flex-wrap gap-2",
          align === "end" ? "justify-start lg:justify-end" : "justify-start",
        )}
      >
        {categories.map((category) => (
          <li key={category.slug}>
            <Button href={`#${category.slug}`}>{category.label}</Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
