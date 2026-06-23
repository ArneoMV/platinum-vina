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
  descriptor: string; // e.g. "Kvalitetno bijelo suho vino"
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
      {/* Image area — background changes by variant; bottle centered + padded. */}
      <div
        className={cn(
          "flex aspect-square items-center justify-center overflow-hidden rounded-lg p-8",
          "transition-shadow duration-300 group-hover:shadow-lg",
        )}
        style={{ backgroundColor: areaBg }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={480}
          height={640}
          className="h-full w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>

      {/* Caption — on the page background. */}
      <div className="mt-4 text-center">
        <h3 className="heading-m text-[var(--color-fg)]">{name}</h3>
        <p className="body-md-regular mt-1 text-[var(--color-muted)]">
          {descriptor}
        </p>
        <div className="mt-2 flex justify-center">
          <WineMeta price={price} volume={volume} alcohol={alcohol} />
        </div>
      </div>
    </article>
  );
}
