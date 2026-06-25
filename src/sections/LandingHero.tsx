import Image from "next/image";

// Full-viewport landing collage at the very top of the homepage. STATIC for now
// — no scroll handlers, no loader (those are separate follow-up tasks). The
// layers are stacked back-to-front and each carries a stable `data-layer` hook
// so the upcoming scroll-parallax task can animate them WITHOUT restructuring:
//
//   Parallax targets — animated in a later task:
//   data-layer = "bg-big" | "person" | "text" | "leaves-left" | "leaves-right"
//
// z-order (back → front): bg-big (0) → person (10) → text (20) → leaves (30) →
// bottom white gradient (40). The leaves are intentionally the FRONT frame, so
// they overlap in front of the headline where they meet it (per the mockup);
// the text still reads clearly thanks to a soft shadow.
//
// NOTE: bg-small is an opaque photo with a white sky in its top ~54% (it is NOT
// a cut-out). A top-fading mask hides that sky so the person + near vineyard
// blend into the bg-big panorama instead of painting a white band over it.
const PERSON_MASK =
  "linear-gradient(to top, #000 42%, rgba(0,0,0,0.9) 56%, transparent 80%)";

export function LandingHero() {
  return (
    <section
      aria-label="Platinum Vina — Vinska ponuda"
      className="relative h-screen w-full overflow-hidden bg-[var(--color-bg)]"
    >
      {/* Layer 0 — vineyard panorama (the LCP image → priority). */}
      <Image
        data-layer="bg-big"
        src="/assets/hero/bg-big.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Layer 1 — person scene, anchored bottom; white sky masked away.
          priority too: it's a full-viewport above-the-fold layer and is the LCP
          on narrow viewports. */}
      <Image
        data-layer="person"
        src="/assets/hero/bg-small.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="z-10 object-cover object-bottom"
        style={{ maskImage: PERSON_MASK, WebkitMaskImage: PERSON_MASK }}
      />

      {/* Text box — above the scene, below the leaves. White serif headline with
          a soft shadow for legibility over the vineyard. */}
      <div
        data-layer="text"
        className="absolute inset-0 z-20 flex items-center"
      >
        <div className="pl-[8%] pr-6">
          <h1 className="headline-xl md:headline-xxl text-[var(--color-neutral-white)] [text-shadow:0_2px_28px_rgba(0,0,0,0.45)]">
            Vinska
            <br />
            Ponuda
          </h1>
          <p className="heading-xs md:heading-s mt-sm tracking-[0.4em] text-[var(--color-neutral-white)] [text-shadow:0_1px_14px_rgba(0,0,0,0.5)]">
            PLATINUM VINA
          </p>
        </div>
      </div>

      {/* Layer 2 — foreground leaves framing the bottom corners (front frame). */}
      <div
        data-layer="leaves-left"
        className="pointer-events-none absolute bottom-0 left-0 z-30 aspect-[587/441] w-[36%] max-w-[600px]"
      >
        <Image
          src="/assets/hero/lisce-ljevo.png"
          alt=""
          fill
          sizes="40vw"
          className="object-contain object-bottom"
        />
      </div>
      <div
        data-layer="leaves-right"
        className="pointer-events-none absolute bottom-0 right-0 z-30 aspect-[433/596] w-[29%] max-w-[480px]"
      >
        <Image
          src="/assets/hero/lisce-desno.png"
          alt=""
          fill
          sizes="35vw"
          className="object-contain object-bottom"
        />
      </div>

      {/* Bottom white gradient — blends the hero seamlessly into the page. */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-[200px]"
        style={{
          background:
            "linear-gradient(to top, var(--color-bg), transparent)",
        }}
      />
    </section>
  );
}
