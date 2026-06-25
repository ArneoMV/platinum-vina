import Link from "next/link";
import { Container } from "@/components/atoms/Container";
import { Logo } from "@/components/atoms/Logo";

const focusRing =
  "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-fg)] " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]";

// Transparent overlay header: `fixed` at the top of the viewport, floating over
// the full-height LandingHero so the vineyard collage shows through behind it.
// No background and no bottom divider — either would draw a band/line across the
// hero. Being `fixed` (not `sticky`) keeps it out of normal flow, so it reserves
// no vertical space and the hero's 100vh starts at y=0 with the header on top.
// z-50 sits above the hero's top layer (the bottom gradient at z-40), so the
// logo + "Kontakt" stay clickable. inset-x-0 spans the full width so the inner
// Container still centres at 1100px. Logo (→ home) on the left, a single in-page
// "Kontakt" anchor on the right that scrolls to the footer (#kontakt) where the
// email + company details live. Plain <a href="#kontakt"> scrolls via the
// existing CSS smooth-scroll, so this stays a server component (no JS).
//
// FLAGGED: transparent everywhere — once scrolled down over the white content
// the header floats with no background (dark logo/text stay legible). Adding a
// solid background on scroll is a deliberate follow-up, intentionally not done
// here.
export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="flex items-center justify-between gap-sm py-sm">
        <Link
          href="/"
          aria-label="Platinum Vina – početna stranica"
          className={focusRing}
        >
          <Logo size="md" tone="dark" />
        </Link>

        <nav aria-label="Glavna navigacija">
          <a
            href="#kontakt"
            className={`body-md-semibold text-[var(--color-fg)] transition-colors hover:text-[var(--color-muted)] ${focusRing}`}
          >
            Kontakt
          </a>
        </nav>
      </Container>
    </header>
  );
}
