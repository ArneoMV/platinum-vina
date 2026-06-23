"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/atoms/Container";
import { Logo } from "@/components/atoms/Logo";
import { cn } from "@/lib/cn";

const NAV = [
  { href: "/", label: "Ponuda vina" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-fg)] " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-divider)] bg-[var(--color-bg)]">
      <Container className="flex items-center justify-between gap-4 py-4">
        <Link
          href="/"
          aria-label="Platinum Vina – početna stranica"
          className={cn("rounded-sm", focusRing)}
        >
          <Logo size="md" tone="dark" />
        </Link>

        <nav aria-label="Glavna navigacija">
          <ul className="flex items-center gap-5 sm:gap-7">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-sm text-[var(--color-fg)] underline-offset-[6px] transition-colors hover:text-[var(--color-muted)]",
                      // Active vs inactive: swap weight preset + underline (avoids
                      // utility-order ambiguity from overriding font-weight).
                      active
                        ? "body-md-bold underline decoration-1"
                        : "body-md-semibold no-underline",
                      focusRing,
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
