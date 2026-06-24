import Link from "next/link";
import { Container } from "@/components/atoms/Container";
import { Logo } from "@/components/atoms/Logo";

// Focus ring tuned for the dark footer background.
const focusRing =
  "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-footer-fg)] " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-footer-bg)]";

export function Footer() {
  return (
    <footer
      id="kontakt"
      className="bg-[var(--color-footer-bg)] text-[var(--color-footer-fg)]"
    >
      <Container className="pt-16 pb-12">
        {/* Centered brand mark, white ink on dark. */}
        <div className="flex justify-center">
          <Logo size="md" tone="light" />
        </div>

        {/* TOP zone — heading + intro (left), contact (right). */}
        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="headline-m md:headline-l">
              Pridruži se Platinum klubu
            </h2>
            <p className="body-big-regular mt-4 max-w-md text-[var(--color-neutral-500)]">
              Zainteresirani za ovu ponudu? Za narudžbe, cjenike i uvjete
              paletne isporuke javite nam se. Rado ćemo pripremiti ponudu
              prilagođenu vašim potrebama.
            </p>
          </div>

          <address className="not-italic md:text-right">
            <p className="body-big-semibold">Platinum d.o.o.</p>
            <p className="body-md-regular mt-1 text-[var(--color-neutral-500)]">
              Vidovčica 6, 10000 Zagreb
            </p>
            <p className="body-big-semibold mt-6">Lidija Samardžija, CEO</p>
            <p className="mt-1">
              <a
                href="mailto:lidija.samardzija@platinum-vina.hr"
                className={`body-md-regular text-[var(--color-footer-fg)] underline-offset-4 transition-opacity hover:underline ${focusRing}`}
              >
                lidija.samardzija@platinum-vina.hr
              </a>
            </p>
          </address>
        </div>

        {/* BOTTOM bar — large 124px gap above (Figma), translucent divider. */}
        <div className="mt-[124px] flex flex-col gap-4 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
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
