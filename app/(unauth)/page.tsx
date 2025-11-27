import ContactSection from "./components/sections/Contact";
import FeaturesSection from "./components/sections/Features";
import HeroSection from "./components/sections/Hero";
import PricingSection from "./components/sections/Pricing";
export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PricingSection/>
      <ContactSection/>
    </>
  );
}
