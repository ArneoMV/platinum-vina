import Link from "next/link";
import { Container } from "@/components/atoms/Container";
import { Logo } from "@/components/atoms/Logo";

// Logo-only header: this is a single landing page (the only other reachable
// route is the privacy page from the footer), so there is no nav. Server
// component — no client state needed.
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-divider)] bg-[var(--color-bg)]">
      <Container className="flex items-center py-4">
        <Link
          href="/"
          aria-label="Platinum Vina – početna stranica"
          className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-fg)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
        >
          <Logo size="md" tone="dark" />
        </Link>
      </Container>
    </header>
  );
}
