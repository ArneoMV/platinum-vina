"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

// Full-viewport landing collage at the top of the homepage with a CodePen-style
// scroll parallax. Layers stacked back-to-front, each with a stable data-layer
// hook AND a ref the rAF scroll handler transforms:
//   bg-big (0) → person (10) → text (20) → leaves (30) → bottom gradient (40)
//
// Parallax (driven by scrollY, clamped to one viewport, GPU transforms):
//   - leaves slide OUTWARD  (lisce-ljevo left, lisce-desno right)
//   - text slides DOWN
//   - person (bg-small) slides DOWN off the bottom edge with only a MICRO
//     horizontal shrink → reveals bg-big from the top as the scene opens up
//   - bg-big zooms in slowly for depth
// Honors prefers-reduced-motion (no animation). bg-small is FULLY OPAQUE — no
// mask/fade/glow; bg-big sits behind it purely as the parallax back layer that
// the sliding person reveals.

// Tuning knobs (px per px of scroll, or px/scale per viewport of progress).
const LEAF_SLIDE = 0.6; // leaves: translateX(±scrollY * LEAF_SLIDE)
const TEXT_DROP = 0.35; // text:  translateY(scrollY * TEXT_DROP)
const PERSON_DROP = 180; // person: translateY 0 → +PERSON_DROP px over 1 vh (slides off the bottom)
const PERSON_MICRO_SHRINK = 0.028; // person: scale 1 → 1 - this over 1 vh — MICRO (~20px/side at 1440px render width)
const BG_ZOOM = 0.06; // bg-big: scale 1 → 1 + BG_ZOOM over 1 vh

// Static VERTICAL base nudge for the headline block: 50px UP (no horizontal
// component — horizontal position is owned solely by pl-[15%] on the inner
// block, so the text is never shifted twice). Applied on the OUTER text
// wrapper; the scroll parallax (TEXT_DROP) lives on the inner block, so the
// base offset and the scroll motion compose on two separate elements instead
// of overwriting a single `transform`.
const TEXT_BASE_OFFSET = "translate3d(0, -50px, 0)";

export function LandingHero() {
  const bgBigRef = useRef<HTMLImageElement>(null);
  const personRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const leavesLeftRef = useRef<HTMLDivElement>(null);
  const leavesRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Accessibility: skip the parallax entirely when reduced motion is set.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const apply = () => {
      raf = 0;
      const vh = window.innerHeight || 1;
      // Clamp to a single viewport so values never run away past the hero.
      const y = Math.min(Math.max(window.scrollY, 0), vh);
      const p = y / vh; // 0 → 1 progress over the first viewport

      if (leavesLeftRef.current)
        leavesLeftRef.current.style.transform = `translate3d(${-y * LEAF_SLIDE}px,0,0)`;
      if (leavesRightRef.current)
        leavesRightRef.current.style.transform = `translate3d(${y * LEAF_SLIDE}px,0,0)`;
      if (textRef.current)
        textRef.current.style.transform = `translate3d(0,${y * TEXT_DROP}px,0)`;
      if (personRef.current)
        personRef.current.style.transform = `translate3d(0,${p * PERSON_DROP}px,0) scale(${1 - p * PERSON_MICRO_SHRINK})`;
      if (bgBigRef.current)
        bgBigRef.current.style.transform = `scale(${1 + p * BG_ZOOM})`;
    };

    // rAF-throttled: at most one update per frame, scrollY read once per frame.
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };
    apply(); // initial (handles reloads scrolled partway down)
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      aria-label="Platinum Vina — Vinska ponuda"
      className="relative h-screen w-full overflow-hidden bg-[var(--color-bg)]"
    >
      {/* Layer 0 — vineyard panorama. Hidden in the static frame (the opaque
          person covers it) but revealed as the person shrinks during scroll. */}
      <Image
        ref={bgBigRef}
        data-layer="bg-big"
        src="/assets/hero/bg-big.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center will-change-transform"
      />

      {/* Layer 1 — person scene, FULLY OPAQUE (no mask). LCP on narrow widths. */}
      <Image
        ref={personRef}
        data-layer="person"
        src="/assets/hero/bg-small.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="z-10 object-cover object-bottom will-change-transform"
      />

      {/* Text box — above the scene, below the leaves. OUTER wrapper centers the
          block and applies the static VERTICAL nudge (-50px up) only. INNER
          block (textRef) owns the horizontal position via pl-[15%] (the single
          source of horizontal offset) plus the scroll parallax translateY, so
          the vertical nudge, the horizontal padding, and the scroll motion live
          on separate concerns and compose cleanly instead of overwriting one
          transform. White serif headline with a soft shadow for legibility over
          the vineyard. */}
      <div
        className="absolute inset-0 z-20 flex items-center"
        style={{ transform: TEXT_BASE_OFFSET }}
      >
        <div
          ref={textRef}
          data-layer="text"
          className="pl-[15%] pr-6 will-change-transform"
        >
          {/* lg:text-[125px]/leading-[1.15] is a hero-specific one-off that
              exceeds the type scale (top token headline-xxl = 87px). The
              headline-* utilities still supply PT Serif + 0.02em letter-spacing;
              the lg variant is emitted after md so it overrides only size and
              line-height at ≥1024px. */}
          <h1 className="headline-xl md:headline-xxl lg:text-[125px] lg:leading-[1.15] text-[var(--color-neutral-white)] [text-shadow:0_2px_28px_rgba(0,0,0,0.45)]">
            Vinska
            <br />
            Ponuda
          </h1>
          <p className="heading-xs md:heading-s mt-sm tracking-[0.4em] text-[var(--color-neutral-white)] [text-shadow:0_1px_14px_rgba(0,0,0,0.5)]">
            PLATINUM VINA
          </p>
        </div>
      </div>

      {/* Layer 2 — foreground leaves framing the bottom corners (front frame);
          they slide outward on scroll. */}
      <div
        ref={leavesLeftRef}
        data-layer="leaves-left"
        className="pointer-events-none absolute bottom-0 left-0 z-30 aspect-[587/441] w-[36%] max-w-[600px] will-change-transform"
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
        ref={leavesRightRef}
        data-layer="leaves-right"
        className="pointer-events-none absolute bottom-0 right-0 z-30 aspect-[433/596] w-[29%] max-w-[480px] will-change-transform"
      >
        <Image
          src="/assets/hero/lisce-desno.png"
          alt=""
          fill
          sizes="35vw"
          className="object-contain object-bottom"
        />
      </div>

      {/* Bottom white gradient — blends the hero seamlessly into the page (also
          hides the small bottom reveal when the person shrinks). */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-[200px]"
        style={{
          background: "linear-gradient(to top, var(--color-bg), transparent)",
        }}
      />
    </section>
  );
}
