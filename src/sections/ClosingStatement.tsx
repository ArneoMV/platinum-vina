import { CategoryChips } from "@/components/molecules/CategoryChips";

// Closing statement that re-frames the whole selection, with the category chips
// repeated for quick jump-back navigation. Server component.
//
// Unified section layout: full-width title, a 2-column gap-xl text row (the
// closing copy split into two halves at a sentence boundary — joining the two
// parts with a single space reproduces the original text exactly), then the
// chips as a SEPARATE full-width row beneath the text (not a grid column).
const INTRO_PARTS: [string, string] = [
  "Ova selekcija okuplja vina za svaku priliku i svaki stol. Tu su praktična velika pakiranja za ugostiteljstvo, atraktivne sorte iz Mađarske i Makedonije, prepoznatljivi Vranac koji je već petnaest godina na tržištu, vrhunska hrvatska vina te Vintonic, gotovi pjenušavi koktel za moderne i opuštene trenutke.",
  "Svako vino u nastavku dolazi s kratkim opisom i svim ključnim podacima.",
];

export function ClosingStatement() {
  return (
    <section>
      <h2 className="headline-m md:headline-l text-[var(--color-fg)]">
        Jedna ponuda,
        <br />
        pet svjetova vina
      </h2>

      {/* Two-column text row — unified recipe. mt-xs (8px) title → row. */}
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

      {/* Chips as their own full-width row beneath the text, left-aligned.
          mt-lg (32px) row → chips. */}
      <div className="mt-lg">
        <CategoryChips align="start" />
      </div>
    </section>
  );
}
