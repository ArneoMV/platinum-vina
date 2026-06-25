import Image from "next/image";

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

export function WhySelection() {
  return (
    <section>
      <h2 className="headline-m md:headline-l text-[var(--color-fg)]">
        Zašto baš ova selekcija
      </h2>

      <div className="relative mt-8">
        {/* Vineyard panel. TODO: swap in the real vineyard photo. */}
        <div className="relative h-72 overflow-hidden rounded-2xl sm:h-96 lg:h-[30rem]">
          <Image
            src="/assets/backgrounds/_placeholder-vineyard.jpg"
            alt="Vinograd"
            fill
            sizes="(min-width: 1024px) 1100px, 100vw"
            className="object-cover"
          />
        </div>

        {/*
          Feature cards.
          - small/medium: stacked in normal flow BELOW the photo (1 col, then
            2-up on sm) so the text stays fully legible.
          - lg+: absolutely overlaid over the LEFT of the photo, vertically
            centered; 2 cards on top + 1 below (grid-cols-2 with 3 items).
        */}
        {/* NB: lg:max-w-[36rem] is written as an arbitrary value, NOT max-w-xl.
            The design-system --spacing-xl token shadows Tailwind's t-shirt size
            scale, so max-w-xl would resolve to 64px (var(--spacing-xl)) and
            collapse these cards into the corner. */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:absolute lg:inset-y-0 lg:left-6 lg:mt-0 lg:w-[46%] lg:max-w-[36rem] lg:content-center xl:left-10">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl bg-[var(--color-neutral-100)] p-5 shadow-lg ring-1 ring-black/5"
            >
              <h3 className="heading-s text-[var(--color-fg)]">
                {feature.title}
              </h3>
              <p className="body-md-regular mt-2 text-[var(--color-neutral-700)]">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
