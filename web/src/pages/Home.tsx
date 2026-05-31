import CTA from "../components/layout/cta";
import Features from "../components/layout/features";
import Footer from "../components/layout/footer";
import Hero from "../components/layout/hero";
import HowItWorks from "../components/layout/how-it-works";
import Navbar from "../components/layout/navbar";
import Pricing from "../components/layout/pricing";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
