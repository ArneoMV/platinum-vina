import Link from "next/link";
import { Container } from "@/components/atoms/Container";
import { Logo } from "@/components/atoms/Logo";

// Focus ring tuned for the dark footer background.
const focusRing =
  "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-footer-fg)] " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-footer-bg)]";

// Footer rebuilt to the Figma mockup. Dark background, light ink. Vertical
// rhythm top→bottom: 64 (pt-xl) to the centered 100px vertical lockup, 48 to
// the 2-column row (heading + intro left, contact right), 124 to the bottom
// bar, 16 to the bottom edge. 64 and 16 map to the --space-* scale (pt-xl /
// pb-[var(--space-sm)]); 48 and 124 don't, so they stay arbitrary.
export function Footer() {
  return (
    <footer
      id="kontakt"
      className="bg-[var(--color-footer-bg)] text-[var(--color-footer-fg)]"
    >
      <Container className="pt-xl pb-[var(--space-sm)]">
        {/* Centered vertical lockup (crown over PLATINUM / VINA), white ink,
            100px tall. h-[100px] w-auto overrides the SVG's intrinsic size; the
            viewBox keeps the aspect ratio (~141px wide). */}
        <div className="flex justify-center">
          <Logo tone="light" className="h-[100px] w-auto" />
        </div>

        {/* Main row — heading + intro (left), contact (right). 48px below the
            logo; splits into two columns on lg+ with a 64px gap, top-aligned. */}
        <div className="mt-[48px] grid grid-cols-1 items-start gap-xl lg:grid-cols-2">
          {/* min-w-0 lets the grid column shrink so the paragraph wraps normally
              (guards the old one-word-per-line bug); max-w-[28rem] caps measure. */}
          <div className="min-w-0">
            <h2 className="headline-m md:headline-l">
              Pridruži se Platinum klubu
            </h2>
            <p className="body-big-regular mt-sm max-w-[28rem] text-[var(--color-neutral-500)]">
              Zainteresirani za ovu ponudu? Za narudžbe, cjenike i uvjete
              paletne isporuke javite nam se. Rado ćemo pripremiti ponudu
              prilagođenu vašim potrebama.
            </p>
          </div>

          {/* Contact — all heading-s, right-aligned on lg+ (left when stacked on
              mobile). Two groups separated by ~24px (mt-md). */}
          <address className="not-italic lg:text-right">
            <p className="heading-s">Platinum d.o.o.</p>
            <p className="heading-s">Vidovčica 6, 10000 Zagreb</p>
            <p className="heading-s mt-md">Lidija Samardžija, CEO</p>
            <p className="heading-s">
              <a
                href="mailto:lidija.samardzija@platinum-vina.hr"
                className={`underline-offset-4 transition-opacity hover:underline ${focusRing}`}
              >
                lidija.samardzija@platinum-vina.hr
              </a>
            </p>
          </address>
        </div>

        {/* Bottom bar — 124px below the row, faint divider, space-between on
            sm+; stacks on mobile. */}
        <div className="mt-[124px] flex flex-col gap-sm border-t border-white/10 pt-sm sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/politika-privatnosti"
            className={`body-md-regular text-[var(--color-neutral-500)] underline-offset-4 transition-colors hover:text-[var(--color-footer-fg)] hover:underline ${focusRing}`}
          >
            Politika privatnosti
          </Link>
          <span className="body-md-regular text-[var(--color-neutral-500)]">
            © 2026 - Platinum Vina
          </span>
        </div>
      </Container>
    </footer>
  );
}
