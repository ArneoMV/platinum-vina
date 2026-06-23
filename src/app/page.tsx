import { Hero } from "@/sections/Hero";
import { CategorySection } from "@/sections/CategorySection";

// Homepage: hero + the five catalog category sections, in catalog order.
// Width/padding/vertical rhythm come from the layout <main>/Container.
// (The "Jedna ponuda" / "Zašto baš ova selekcija" / CTA blocks come next task.)
export default function Home() {
  return (
    <>
      <Hero />
      <CategorySection slug="velika-pakiranja" />
      <CategorySection slug="atraktivne-sorte" />
      <CategorySection slug="vranac" />
      <CategorySection slug="vrhunska-hrvatska" />
      <CategorySection slug="vintonic" />
    </>
  );
}
