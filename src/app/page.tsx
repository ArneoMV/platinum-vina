import { Hero } from "@/sections/Hero";
import { CategorySection } from "@/sections/CategorySection";
import { ClosingStatement } from "@/sections/ClosingStatement";
import { WhySelection } from "@/sections/WhySelection";
import { ContactCta } from "@/sections/ContactCta";

// Homepage: hero + the five catalog category sections + the three closing
// blocks. Width/padding come from the layout <main>/Container; the uniform
// 64px gap between every major section is owned here via space-y-16.
export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <CategorySection slug="velika-pakiranja" />
      <CategorySection slug="atraktivne-sorte" />
      <CategorySection slug="vranac" />
      <CategorySection slug="vrhunska-hrvatska" />
      <CategorySection slug="vintonic" />
      <ClosingStatement />
      <WhySelection />
      <ContactCta />
    </div>
  );
}
