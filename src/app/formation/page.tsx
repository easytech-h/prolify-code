import Navigation from "@/components/sections/navigation";
import FormationHero from "@/components/sections/formation-hero";
import FormationServices from "@/components/sections/formation-services";
import FormationProcess from "@/components/sections/formation-process";
import Footer from "@/components/sections/footer";

export default function FormationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <FormationHero />
        <FormationServices />
        <FormationProcess />
      </main>
      <Footer />
    </div>
  );
}