import Image from "next/image";
import { cn } from "@/lib/cn";
import { WineMeta } from "@/components/atoms/WineMeta";

export type WineCardVariant = "light" | "dark" | "custom";

type WineCardImage = {
  src: string;
  alt: string;
};

type WineCardBase = {
  name: string;
  descriptor?: string; // e.g. "Kvalitetno bijelo suho vino"; omitted for Vintonic
  price: number;
  volume: string;
  alcohol: number;
  image: WineCardImage;
  className?: string;
};

// `background` is required only for the custom variant (and disallowed otherwise).
type WineCardProps =
  | (WineCardBase & { variant?: "light" | "dark"; background?: never })
  | (WineCardBase & { variant: "custom"; background: string });

// Image-area background per variant. Custom comes from the `background` prop.
function resolveAreaBg(variant: WineCardVariant, background?: string): string {
  if (variant === "dark") return "var(--color-neutral-999)";
  if (variant === "custom") return background ?? "var(--color-neutral-100)";
  return "var(--color-neutral-100)";
}

export function WineCard(props: WineCardProps) {
  const {
    name,
    descriptor,
    price,
    volume,
    alcohol,
    image,
    className,
    variant = "light",
  } = props;
  const background = "background" in props ? props.background : undefined;
  const areaBg = resolveAreaBg(variant, background);

  return (
    <article className={cn("group flex flex-col", className)}>
      {/* Image area — a consistent square box per card; bottle uses `fill` +
          object-contain with uniform padding so every variant renders the
          bottle at the same visual size. `fill` (no width/height props) avoids
          the next/image "width or height modified, but not the other" warning;
          `sizes` keeps the optimizer from over-fetching. */}
      <div
        className={cn(
          "relative aspect-square overflow-hidden rounded-lg",
          "transition-shadow duration-300 group-hover:shadow-lg",
        )}
        style={{ backgroundColor: areaBg }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 768px) 45vw, 90vw"
          className="object-contain p-8 transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>

      {/* Caption — on the page background. */}
      <div className="mt-4 text-center">
        <h3 className="heading-m text-[var(--color-fg)]">{name}</h3>
        {/* Descriptor is optional (Vintonic omits it) — render nothing, no gap. */}
        {descriptor ? (
          <p className="body-md-regular mt-1 text-[var(--color-muted)]">
            {descriptor}
          </p>
        ) : null}
        <div className="mt-2 flex justify-center">
          <WineMeta price={price} volume={volume} alcohol={alcohol} />
        </div>
      </div>
    </article>
  );
}
