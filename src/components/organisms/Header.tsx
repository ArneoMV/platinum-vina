import Link from "next/link";
import { Container } from "@/components/atoms/Container";
import { Logo } from "@/components/atoms/Logo";

const focusRing =
  "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-fg)] " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]";

// Sticky header: logo (→ home) on the left, a single in-page "Kontakt" anchor
// on the right that scrolls to the footer (#kontakt) where the email + company
// details live. There is no contact page. Plain <a href="#kontakt"> scrolls via
// the existing CSS smooth-scroll, so this stays a server component (no JS).
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-divider)] bg-[var(--color-bg)]">
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
