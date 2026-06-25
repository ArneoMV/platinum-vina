import Image from "next/image";

// Closing statement: full-width title, a 2-column intro, three borderless
// feature blocks, then a full-width vineyard collage (vineyard panorama with the
// people cut-out overlaid right-of-center, rising above the band). The intro is
// split into two halves at a sentence boundary — joining the two parts with a
// single space reproduces the original text exactly. Server component.
const INTRO_PARTS: [string, string] = [
  "Ova selekcija okuplja vina za svaku priliku i svaki stol. Tu su praktična velika pakiranja za ugostiteljstvo, atraktivne sorte iz Mađarske i Makedonije, prepoznatljivi Vranac koji je već petnaest godina na tržištu, vrhunska hrvatska vina te Vintonic, gotovi pjenušavi koktel za moderne i opuštene trenutke.",
  "Svako vino u nastavku dolazi s kratkim opisom i svim ključnim podacima.",
];

// Feature blocks (moved here from the former WhySelection section), rendered as
// plain text — no card border/background/shadow.
const FEATURES = [
  {
    title: "Raspon za svaku priliku",
    body: "Od litrenih i dvolitrenih pakiranja za ugostiteljstvo do vrhunskih hrvatskih etiketa za posebne trenutke.",
  },
  {
    title: "Provjereni karakter",
    body: "Sorte i etikete koje se već dokazuju na tržištu, uključujući Vranac s petnaest godina prisutnosti.",
  },
  {
    title: "Pogodni uvjeti",
    body: "Atraktivne cijene i poseban rabat za paletne isporuke. Za detalje zatražite cjenik.",
  },
];

export function ClosingStatement() {
  return (
    <section>
      <h2 className="headline-m md:headline-l text-[var(--color-fg)]">
        Jedna ponuda,
        <br />
        pet svjetova vina
      </h2>

      {/* Two-column intro — gap-xl (64px) between columns. mt-xs title → row. */}
      <div className="mt-xs grid grid-cols-1 lg:grid-cols-2 gap-xl">
        {INTRO_PARTS.map((part, index) => (
          <p
            key={index}
            className="body-big-regular text-[var(--color-neutral-700)]"
          >
            {part}
          </p>
        ))}
      </div>

      {/* Three borderless feature blocks — serif sub-heading + body, gap-xl. */}
      <div className="mt-xl grid grid-cols-1 md:grid-cols-3 gap-xl">
        {FEATURES.map((feature) => (
          <div key={feature.title}>
            <h3 className="headline-xs text-[var(--color-fg)]">
              {feature.title}
            </h3>
            <p className="body-big-regular mt-xs text-[var(--color-neutral-700)]">
              {feature.body}
            </p>
          </div>
        ))}
      </div>

      {/* Vineyard collage: the vineyard panorama fills a wide rounded panel
          (object-cover), and the people cut-out (transparent PNG) is overlaid
          right-of-center, bottom-anchored, and a touch taller than the band so
          the group rises above it — reading as a single image. The wrapper is
          NOT clipped, so the people can extend above the band. */}
      <div className="relative mt-xl">
        <div className="relative aspect-[1040/220] w-full overflow-hidden rounded-2xl">
          <Image
            src="/assets/images/slika-vinograd.png"
            alt="Vinograd"
            fill
            sizes="(min-width: 1100px) 1020px, 100vw"
            className="object-cover"
          />
        </div>
        {/* Decorative overlay (alt=""). pointer-events-none so it never blocks. */}
        <div className="pointer-events-none absolute bottom-0 right-[8%] aspect-[1551/880] w-[54%] sm:w-[46%] lg:w-[44%]">
          <Image
            src="/assets/images/osoba-02.png"
            alt=""
            fill
            sizes="(min-width: 1100px) 460px, 50vw"
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
