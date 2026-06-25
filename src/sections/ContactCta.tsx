import Image from "next/image";
import { Button } from "@/components/atoms/Button";

// Closing CTA. There is no contact page — the action is a mailto.
export function ContactCta() {
  return (
    <section>
      <div className="grid items-center gap-lg md:grid-cols-2 md:gap-xl">
        <div>
          <h2 className="headline-s md:headline-m text-[var(--color-fg)]">
            Zainteresirani za ovu ponudu?
          </h2>
          <p className="body-big-regular mt-xs max-w-[55ch] text-[var(--color-neutral-700)]">
            Za narudžbe, cjenike i uvjete paletne isporuke javite nam se. Rado
            ćemo pripremiti ponudu prilagođenu vašim potrebama.
          </p>
          <div className="mt-md">
            <Button href="mailto:lidija.samardzija@platinum-vina.hr?subject=Upit%20za%20ponudu">
              Zatraži ponudu
            </Button>
          </div>
        </div>

        {/* Wine-rack photo. md:max-w-[28rem] is an explicit value (Tailwind's
            old max-w-md default) kept from when --spacing-md shadowed the sizing
            scale; tokens now live under --space-* so max-w-md would be safe too. */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xs md:max-w-[28rem] md:justify-self-end">
          <Image
            src="/assets/images/slika-paket-vina.png"
            alt="Paket vina"
            fill
            sizes="(min-width: 768px) 28rem, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
