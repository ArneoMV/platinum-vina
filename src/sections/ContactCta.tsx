import Image from "next/image";
import { Button } from "@/components/atoms/Button";

// Closing CTA. There is no contact page — the action is a mailto.
export function ContactCta() {
  return (
    <section className="border-t border-[var(--color-divider)] py-12 md:py-16">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
        <div>
          <h2 className="headline-s md:headline-m text-[var(--color-fg)]">
            Zainteresirani za ovu ponudu?
          </h2>
          <p className="body-big-regular mt-4 max-w-[55ch] text-[var(--color-neutral-700)]">
            Za narudžbe, cjenike i uvjete paletne isporuke javite nam se. Rado
            ćemo pripremiti ponudu prilagođenu vašim potrebama.
          </p>
          <div className="mt-6">
            <Button
              variant="solid"
              size="lg"
              href="mailto:lidija.samardzija@platinum-vina.hr?subject=Upit%20za%20ponudu"
            >
              Zatraži ponudu
            </Button>
          </div>
        </div>

        {/* Small placeholder image. TODO: swap in the real photo. */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl md:max-w-md md:justify-self-end">
          <Image
            src="/assets/backgrounds/_placeholder-wine-rack.jpg"
            alt="Vinoteka"
            fill
            sizes="(min-width: 768px) 28rem, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
