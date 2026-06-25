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
//   - person (bg-small) shrinks subtly → reveals bg-big behind it
//   - bg-big zooms in slowly for depth
// Honors prefers-reduced-motion (no animation). bg-small is FULLY OPAQUE — no
// mask/fade/glow; bg-big sits behind it purely as the parallax back layer that
// the shrinking person reveals.

// Tuning knobs (px per px of scroll, or scale per viewport of progress).
const LEAF_SLIDE = 0.6; // leaves: translateX(±scrollY * LEAF_SLIDE)
const TEXT_DROP = 0.35; // text:  translateY(scrollY * TEXT_DROP)
const PERSON_SHRINK = 0.16; // person: scale 1 → 1 - PERSON_SHRINK over 1 vh
const BG_ZOOM = 0.06; // bg-big: scale 1 → 1 + BG_ZOOM over 1 vh

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
        personRef.current.style.transform = `scale(${1 - p * PERSON_SHRINK})`;
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

      {/* Text box — above the scene, below the leaves. White serif headline with
          a soft shadow for legibility over the vineyard. */}
      <div
        ref={textRef}
        data-layer="text"
        className="absolute inset-0 z-20 flex items-center will-change-transform"
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
