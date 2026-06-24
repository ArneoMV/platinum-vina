import { CategoryChips } from "@/components/molecules/CategoryChips";

// Homepage hero. Two-column on lg+ (title + lead left, category chips top-right);
// stacked on small/medium (title + lead, chips beneath).
// Width/padding come from the layout Container; this only owns vertical rhythm.
export function Hero() {
  return (
    <section>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
        <div className="max-w-[60ch]">
          <h1 className="headline-l md:headline-xl text-[var(--color-fg)]">
            Vinska ponuda
          </h1>
          <p className="body-big-regular mt-4 text-[var(--color-neutral-700)]">
            Pažljivo birana selekcija za 2026. Od velikih pakiranja za svaki
            dan, preko prepoznatljivog Vranca, do vrhunskih hrvatskih vina i
            modernih Vintonic koktela.
          </p>
        </div>
        {/*
          Right cluster. The lg max-width is tuned to the combined width of the
          three top chips (Velika pakiranja / Atraktivne sorte / Vranac) plus
          their two 8px gaps, so flex-wrap breaks the row 3 + 2 with no manual
          <br>; the wider 4th chip (Vrhunska Hrvatska vina) is forced onto a
          second row. align="end" right-aligns the rows on lg+ while small
          screens stack and wrap left. lg:pt-2 top-aligns to the heading.
        */}
        <div className="lg:max-w-140 lg:shrink-0 lg:pt-2">
          <CategoryChips align="end" />
        </div>
      </div>
    </section>
  );
}
