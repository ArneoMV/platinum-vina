import { CategoryChips } from "@/components/molecules/CategoryChips";

// Homepage hero. Two-column on lg+ (title + lead left, category chips top-right);
// stacked on small/medium (title + lead, chips beneath).
// Width/padding come from the layout Container; this only owns vertical rhythm.
export function Hero() {
  return (
    <section className="pb-10 md:pb-14">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
        <div className="max-w-[60ch]">
          <h1 className="headline-l md:headline-xl text-[var(--color-fg)]">
            Vinska ponuda
          </h1>
          <p className="body-big-regular mt-6 text-[var(--color-neutral-700)]">
            Pažljivo birana selekcija za 2026. Od velikih pakiranja za svaki
            dan, preko prepoznatljivog Vranca, do vrhunskih hrvatskih vina i
            modernih Vintonic koktela.
          </p>
        </div>
        {/* Constrained width on lg so the chips wrap into a couple of rows,
            top-aligned to the heading per the mockup. */}
        <div className="lg:max-w-[22rem] lg:shrink-0 lg:pt-2">
          <CategoryChips />
        </div>
      </div>
    </section>
  );
}
