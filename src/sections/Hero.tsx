import { CategoryChips } from "@/components/molecules/CategoryChips";

// Homepage hero: title, lead paragraph, then the category chip navigation.
// Width/padding come from the layout Container; this only owns vertical rhythm.
export function Hero() {
  return (
    <section className="pb-10 md:pb-14">
      <h1 className="headline-xl md:headline-xxl text-[var(--color-fg)]">
        Vinska ponuda
      </h1>
      <p className="body-big-regular mt-6 max-w-[60ch] text-[var(--color-muted)]">
        Pažljivo birana selekcija za 2026. Od velikih pakiranja za svaki dan,
        preko prepoznatljivog Vranca, do vrhunskih hrvatskih vina i modernih
        Vintonic koktela.
      </p>
      <div className="mt-8">
        <CategoryChips />
      </div>
    </section>
  );
}
