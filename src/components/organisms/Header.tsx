"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/atoms/Container";
import { Logo } from "@/components/atoms/Logo";

// Transparent overlay header: `fixed` at the top of the viewport, floating over
// the full-height LandingHero so the vineyard collage shows through behind it.
// No background and no bottom divider — either would draw a band/line across the
// hero. Being `fixed` (not `sticky`) keeps it out of normal flow, so the hero's
// 100vh starts at y=0 with the header on top. z-50 keeps the logo + "Kontakt"
// above the hero's top layer (the bottom gradient at z-40) and clickable.
//
// Scroll-state colour (the only reason this is a client component): the logo +
// "Kontakt" are WHITE while the header overlays the dark hero collage, and
// switch to BLACK once the header scrolls past the hero onto the white page,
// eased with transition-colors. The header itself stays fully TRANSPARENT in
// both states — only the ink colour changes.
//
// Detection — a rAF-throttled scroll listener, NOT an IntersectionObserver: the
// header (rendered in layout.tsx) and the hero (rendered in page.tsx) are
// separate components, so comparing scrollY to innerHeight here is self-
// contained and robust to the hero markup, rather than reaching into the hero's
// DOM. The hero is the first section at 100vh, so it covers the header band
// until its bottom edge (viewport-y = innerHeight − scrollY) rises above the
// header; we flip to "past" once white content reaches the header. The listener
// is rAF-coalesced and only calls setState on the boolean flip, so it does not
// re-render per frame.
//
// FLAGGED (unchanged, out of scope): the header is transparent everywhere, so
// once scrolled over the white content it floats with no background and the
// content scrolls beneath it. A scroll-state solid background remains a separate
// follow-up; this task only changes the ink colour.
export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const h = headerRef.current?.offsetHeight ?? 0;
      // Past the hero once the white page reaches the header band.
      const past = window.scrollY >= window.innerHeight - h;
      setPastHero((prev) => (prev === past ? prev : past));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update(); // initial state (handles reloads scrolled partway down)
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // White over the dark collage, dark over the white page. The focus ring colour
  // switches too so it stays visible on both backgrounds.
  const logoTone = pastHero ? "dark" : "light";
  const linkColor = pastHero
    ? "text-[var(--color-fg)]"
    : "text-[var(--color-neutral-white)]";
  const linkHover = pastHero
    ? "hover:text-[var(--color-muted)]"
    : "hover:text-[var(--color-neutral-400)]";
  const ringColor = pastHero
    ? "focus-visible:ring-[var(--color-fg)]"
    : "focus-visible:ring-[var(--color-neutral-white)]";

  const focusRing =
    `rounded-sm focus-visible:outline-none focus-visible:ring-2 ${ringColor} ` +
    "focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]";

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50">
      <Container className="flex items-center justify-between gap-sm py-sm">
        <Link
          href="/"
          aria-label="Platinum Vina – početna stranica"
          className={focusRing}
        >
          {/* tone drives the SVG colour via currentColor; transition-colors
              eases the white↔black swap (fill follows color). */}
          <Logo
            size="md"
            tone={logoTone}
            className="transition-colors duration-300"
          />
        </Link>

        <nav aria-label="Glavna navigacija">
          <a
            href="#kontakt"
            className={`body-md-semibold ${linkColor} ${linkHover} transition-colors duration-300 ${focusRing}`}
          >
            Kontakt
          </a>
        </nav>
      </Container>
    </header>
  );
}
