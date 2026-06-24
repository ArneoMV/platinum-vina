import { CategoryChips } from "@/components/molecules/CategoryChips";

// Homepage hero. Unified section layout: full-width title on top, then a
// 2-column row (lead left, category chips right) on lg+; everything stacks to a
// single full-width column on small/medium.
// Width/padding come from the layout Container; this only owns vertical rhythm.
export function Hero() {
  return (
    <section>
      <h1 className="headline-l md:headline-xl text-[var(--color-fg)]">
        Vinska ponuda
      </h1>

      {/* Unified row recipe (grid grid-cols-1 lg:grid-cols-2 gap-xl): lead in
          column 1, chips in column 2 (right-aligned on lg+ via align="end").
          mt-sm (16px) keeps the title → row spacing. No column max-widths —
          each track is 1fr, so the chips wrap within their own column. */}
      <div className="mt-sm grid grid-cols-1 lg:grid-cols-2 gap-xl">
        <p className="body-big-regular text-[var(--color-neutral-700)]">
          Pažljivo birana selekcija za 2026. Od velikih pakiranja za svaki dan,
          preko prepoznatljivog Vranca, do vrhunskih hrvatskih vina i modernih
          Vintonic koktela.
        </p>
        <CategoryChips align="end" />
      </div>
    </section>
  );
}
