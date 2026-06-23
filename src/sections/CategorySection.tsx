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

  return (
    // scroll-mt-24 keeps the title clear of the ~59px sticky header on anchor
    // jumps; border-t is the thin divider between sections.
    <section
      id={slug}
      className="scroll-mt-24 border-t border-[var(--color-divider)] py-12 md:py-16"
    >
      <div className="max-w-[70ch]">
        <p className="heading-xs uppercase text-[var(--color-muted)]">
          {category.eyebrow}
        </p>
        <h2 className="headline-l md:headline-xl mt-2 text-[var(--color-fg)]">
          {category.label}
        </h2>
        <p className="body-big-regular mt-4 text-[var(--color-neutral-700)]">
          {category.intro}
        </p>
        {category.badge ? (
          // Non-interactive chip-styled badge (e.g. the vrhunska 30% rabat note).
          <span className="body-md-semibold mt-5 inline-block rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-1.5 text-[var(--color-fg)]">
            {category.badge}
          </span>
        ) : null}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
