import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Modules from "@/components/Modules";
import CRVSection from "@/components/CRVSection";
import Benefits from "@/components/Benefits";
import Technology from "@/components/Technology";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Modules />
        <CRVSection />
        <Benefits />
        <Technology />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
