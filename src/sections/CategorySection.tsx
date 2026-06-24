import { WineCard } from "@/components/molecules/WineCard";
import { getCategory, getWinesByCategory } from "@/data/wines";
import type { WineCategory } from "@/data/wines";

type CategorySectionProps = {
  slug: WineCategory;
};

export function CategorySection({ slug }: CategorySectionProps) {
  const category = getCategory(slug);
  const items = getWinesByCategory(slug);

  if (!category) return null;

  const twoColIntro = category.introColumns === 2;

  return (
    // scroll-mt-24 keeps the title clear of the sticky header on anchor jumps.
    // Between-section spacing (64px) is owned by page.tsx (space-y-16); no
    // divider rule — the design separates sections with whitespace.
    <section id={slug} className="scroll-mt-24">
      {/* category.eyebrow is intentionally NOT rendered — the mockups have no
          eyebrow above section titles. The field stays in the data. */}
      <h2 className="headline-m md:headline-l text-[var(--color-fg)]">
        {category.label}
      </h2>

      {/* Intro row — the unified section recipe (grid grid-cols-1
          lg:grid-cols-2 gap-xl). Two paragraphs (vranac, vintonic) sit one per
          column; a single intro sits in column 1 while column 2 stays empty but
          reserved, so it renders at half width on lg+ and full width on small.
          mt-xs (8px) keeps the title → row spacing. */}
      <div className="mt-xs grid grid-cols-1 lg:grid-cols-2 gap-xl">
        {twoColIntro && category.introParts ? (
          category.introParts.map((part, index) => (
            <p
              key={index}
              className="body-big-regular text-[var(--color-neutral-700)]"
            >
              {part}
            </p>
          ))
        ) : (
          // Single intro + optional badge share column 1 (one grid cell), so the
          // badge does not spill into the reserved column 2.
          <div>
            <p className="body-big-regular text-[var(--color-neutral-700)]">
              {category.intro}
            </p>
            {category.badge ? (
              // Non-interactive chip-styled badge (e.g. the vrhunska 30% rabat).
              <span className="body-md-semibold mt-5 inline-block rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-1.5 text-[var(--color-fg)]">
                {category.badge}
              </span>
            ) : null}
          </div>
        )}
      </div>

      <div className="mt-md grid grid-cols-1 gap-md md:grid-cols-2 lg:grid-cols-3">
        {items.map((wine) => {
          const common = {
            name: wine.naziv,
            descriptor: wine.descriptor,
            price: wine.cijena,
            volume: wine.volume,
            alcohol: wine.alkohol,
            image: wine.image,
          };

          // Narrow on variant so the discriminated WineCard union is satisfied
          // (custom requires a background; light/dark must omit it).
          return wine.variant === "custom" ? (
            <WineCard
              key={wine.id}
              {...common}
              variant="custom"
              background={wine.background ?? "#FFFFFF"}
            />
          ) : (
            <WineCard key={wine.id} {...common} variant={wine.variant} />
          );
        })}
      </div>
    </section>
  );
}
