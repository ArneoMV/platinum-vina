"use client";

import { Button } from "@/components/atoms/Button";
import { categories } from "@/data/wines";

// In-page category navigation: chip links that jump to each section anchor.
// Scrolling is handled purely by CSS (html { scroll-behavior: smooth } +
// each section's scroll-margin-top), so no JS handler is needed here. Kept a
// client component per spec, leaving room for an onClick offset tweak later.
export function CategoryChips() {
  return (
    <nav aria-label="Filtriraj po kategoriji">
      <ul className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <li key={category.slug}>
            <Button href={`#${category.slug}`} variant="chip" size="sm">
              {category.label}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
