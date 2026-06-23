/*
 * TEMP PREVIEW — remove in next task.
 * Visual smoke-test of the design system foundation: typography presets,
 * Button variants/sizes, Logo, and the three WineCard variants.
 * Not part of the real site; the next task replaces this with real sections.
 */
import { Button } from "@/components/atoms/Button";
import { Logo } from "@/components/atoms/Logo";
import { WineCard } from "@/components/molecules/WineCard";
import type { ButtonSize, ButtonVariant } from "@/components/atoms/Button";

const SAMPLE = "Vrhunska vina — čćžšđ";

const HEADLINES = [
  "headline-xxl",
  "headline-xl",
  "headline-l",
  "headline-m",
  "headline-s",
  "headline-xs",
  "headline-xxs",
] as const;

const HEADINGS = [
  "heading-xxl",
  "heading-xl",
  "heading-l",
  "heading-m",
  "heading-s",
  "heading-xs",
  "heading-xxs",
] as const;

const BODIES = [
  "body-big-bold",
  "body-big-semibold",
  "body-big-regular",
  "body-md-bold",
  "body-md-semibold",
  "body-md-regular",
] as const;

const BUTTON_VARIANTS: ButtonVariant[] = ["solid", "outline", "chip"];
const BUTTON_SIZES: ButtonSize[] = ["sm", "md", "lg"];

const PLACEHOLDER = "/assets/wines/_placeholder-bottle.png";

function TypeRow({ preset }: { preset: string }) {
  return (
    <div className="flex flex-col gap-1 border-b border-[var(--color-divider)] py-4 sm:flex-row sm:items-baseline sm:gap-6">
      <code className="w-40 shrink-0 font-mono text-xs text-[var(--color-muted)]">
        {preset}
      </code>
      <span className={preset}>{SAMPLE}</span>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-16">
      <h2 className="heading-s mb-6 border-b border-[var(--color-border)] pb-2 text-[var(--color-muted)] uppercase tracking-wider">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    // Outer <main>, max-width and padding now come from the root layout
    // (Header + Footer wrap this). Content below is unchanged temp preview.
    <>
      <header className="flex flex-col items-start gap-6">
        <Logo size="lg" />
        <p className="body-big-regular text-[var(--color-muted)]">
          Design system foundation — temporary preview.
        </p>
      </header>

      <Section title="Headlines (PT Serif)">
        {HEADLINES.map((p) => (
          <TypeRow key={p} preset={p} />
        ))}
      </Section>

      <Section title="Headings (Open Sans)">
        {HEADINGS.map((p) => (
          <TypeRow key={p} preset={p} />
        ))}
      </Section>

      <Section title="Body (Open Sans)">
        {BODIES.map((p) => (
          <TypeRow key={p} preset={p} />
        ))}
      </Section>

      <Section title="Buttons">
        <div className="flex flex-col gap-6">
          {BUTTON_VARIANTS.map((variant) => (
            <div key={variant} className="flex flex-wrap items-center gap-4">
              <code className="w-16 font-mono text-xs text-[var(--color-muted)]">
                {variant}
              </code>
              {BUTTON_SIZES.map((size) => (
                <Button key={size} variant={variant} size={size}>
                  {variant} {size}
                </Button>
              ))}
              <Button variant={variant} disabled>
                disabled
              </Button>
              <Button variant={variant} href="#">
                as link
              </Button>
            </div>
          ))}
        </div>
      </Section>

      <Section title="WineCard">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <WineCard
            variant="light"
            name="Graševina"
            descriptor="Kvalitetno bijelo suho vino"
            price={3.05}
            volume="1L"
            alcohol={11.5}
            image={{ src: PLACEHOLDER, alt: "Graševina — placeholder boca" }}
          />
          <WineCard
            variant="dark"
            name="Vranac"
            descriptor="Vrhunsko crno suho vino"
            price={4.2}
            volume="0,75L"
            alcohol={13.5}
            image={{ src: PLACEHOLDER, alt: "Vranac — placeholder boca" }}
          />
          <WineCard
            variant="custom"
            background="#E8F3EE"
            name="Vintonic"
            descriptor="Aromatizirano vino"
            price={2.5}
            volume="0,25L"
            alcohol={6}
            image={{ src: PLACEHOLDER, alt: "Vintonic — placeholder boca" }}
          />
        </div>
      </Section>
    </>
  );
}
