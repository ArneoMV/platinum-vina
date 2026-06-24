import { cn } from "@/lib/cn";
import { formatPrice } from "@/lib/format";

type WineMetaProps = {
  price: number;
  volume: string; // e.g. "2L"
  alcohol: number; // e.g. 12.5
  className?: string;
};

// Single meta line: "3,05€ / 2L / Alk. 12,5%" — neutral-700 with matching
// neutral-700 slash separators (Figma spec).
export function WineMeta({ price, volume, alcohol, className }: WineMetaProps) {
  const sep = <span className="text-[var(--color-neutral-700)]"> / </span>;

  return (
    <p
      className={cn("body-big-medium text-[var(--color-neutral-700)]", className)}
    >
      <span>{formatPrice(price)}</span>
      {sep}
      <span>{volume}</span>
      {sep}
      <span>Alk.&nbsp;{alcohol.toLocaleString("hr-HR")}%</span>
    </p>
  );
}
