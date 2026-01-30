import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SafetySection from "./components/SafetySection";
import OperatingPillars from "./components/OperatingPillars";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar transparent={true} />
      <Hero />
      <SafetySection />
      <OperatingPillars />
      <Footer />
    </main>
  );
}
