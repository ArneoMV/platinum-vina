import { Hero } from "@/sections/Hero";
import { CategorySection } from "@/sections/CategorySection";
import { ClosingStatement } from "@/sections/ClosingStatement";
import { ContactCta } from "@/sections/ContactCta";

// Homepage: hero + the five catalog category sections + two closing blocks
// (ClosingStatement with the feature blocks + vineyard collage, then the CTA).
// Width/padding come from the layout <main>/Container; the uniform 64px gap
// between every major section is owned here via space-y-xl.
export default function Home() {
  return (
    <div className="space-y-xl">
      <Hero />
      <CategorySection slug="velika-pakiranja" />
      <CategorySection slug="atraktivne-sorte" />
      <CategorySection slug="vranac" />
      <CategorySection slug="vrhunska-hrvatska" />
      <CategorySection slug="vintonic" />
      <ClosingStatement />
      <ContactCta />
    </div>
  );
}
