import { CategoryChips } from "@/components/molecules/CategoryChips";

// Closing statement that re-frames the whole selection, with the category
// chips repeated for quick jump-back navigation. Server component.
export function ClosingStatement() {
  return (
    <section>
      <h2 className="headline-m md:headline-l text-[var(--color-fg)]">
        Jedna ponuda,
        <br />
        pet svjetova vina
      </h2>
      {/* Longer copy flows across two columns on md+ (same treatment as the
          Vranac/Vintonic intros). */}
      <p className="body-big-regular mt-2 max-w-[78ch] text-[var(--color-neutral-700)] md:columns-2 md:gap-x-12">
        Ova selekcija okuplja vina za svaku priliku i svaki stol. Tu su
        praktična velika pakiranja za ugostiteljstvo, atraktivne sorte iz
        Mađarske i Makedonije, prepoznatljivi Vranac koji je već petnaest godina
        na tržištu, vrhunska hrvatska vina te Vintonic, gotovi pjenušavi koktel
        za moderne i opuštene trenutke. Svako vino u nastavku dolazi s kratkim
        opisom i svim ključnim podacima.
      </p>
      <div className="mt-8">
        <CategoryChips />
      </div>
    </section>
  );
}
