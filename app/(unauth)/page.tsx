import ContactSection from "./components/sections/Root/Contact";
import FeaturesSection from "./components/sections/Root/Features";
import HeroSection from "./components/sections/Root/Hero";
import PricingSection from "./components/sections/Root/Pricing";
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
