import { Container } from "@/components/atoms/Container";
import { LandingHero } from "@/sections/LandingHero";
import { Hero } from "@/sections/Hero";
import { CategorySection } from "@/sections/CategorySection";
import { ClosingStatement } from "@/sections/ClosingStatement";
import { ContactCta } from "@/sections/ContactCta";

// Homepage: a full-bleed 100vh landing collage, then (inside the 1100px
// Container) the catalog sections + two closing blocks. The uniform 64px gap
// between content sections is owned here via space-y-xl; py-xl gives 64px above
// the first content section and below the last before the footer.
export default function Home() {
  return (
    <>
      {/* Full-bleed — intentionally OUTSIDE the Container. */}
      <LandingHero />
      <Container className="py-xl">
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
      </Container>
    </>
  );
}
