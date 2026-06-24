import { Hero } from "@/sections/Hero";
import { CategorySection } from "@/sections/CategorySection";
import { ClosingStatement } from "@/sections/ClosingStatement";
import { WhySelection } from "@/sections/WhySelection";
import { ContactCta } from "@/sections/ContactCta";

// Homepage: hero + the five catalog category sections + the three closing
// blocks. Width/padding/vertical rhythm come from the layout <main>/Container.
export default function Home() {
  return (
    <>
      <Hero />
      <CategorySection slug="velika-pakiranja" />
      <CategorySection slug="atraktivne-sorte" />
      <CategorySection slug="vranac" />
      <CategorySection slug="vrhunska-hrvatska" />
      <CategorySection slug="vintonic" />
      <ClosingStatement />
      <WhySelection />
      <ContactCta />
    </>
  );
}
