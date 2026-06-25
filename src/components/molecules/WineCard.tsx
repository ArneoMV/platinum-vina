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
      {/* Image area — full card width, fixed 250px tall (Figma spec). Bottle
          uses `fill` + object-contain with horizontal padding so tall bottles
          and the wide BiB box stay centered and uncropped. `fill` (no
          width/height props) avoids the next/image aspect-ratio warning;
          `sizes` keeps the optimizer from over-fetching. */}
      <div
        className={cn(
          "relative h-[250px] w-full overflow-hidden rounded-lg",
          "transition-shadow duration-300 group-hover:shadow-lg",
        )}
        style={{ backgroundColor: areaBg }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 768px) 45vw, 90vw"
          className="object-contain px-lg py-sm transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>

      {/* Caption — 16px below the image, then 8px between each line. */}
      <div className="mt-sm text-center">
        <h3 className="headline-xxs text-[var(--color-neutral-999)]">{name}</h3>
        {/* Description omitted entirely when absent (Vintonic) — no gap. */}
        {descriptor ? (
          <p className="body-big-regular mt-xs text-[var(--color-neutral-999)]">
            {descriptor}
          </p>
        ) : null}
        <WineMeta
          className="mt-xs"
          price={price}
          volume={volume}
          alcohol={alcohol}
        />
      </div>
    </article>
  );
}
