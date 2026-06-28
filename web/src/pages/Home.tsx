import CTA from "../components/layout/home/cta";
import Features from "../components/layout/home/features";
import Footer from "../components/layout/home/footer";
import Hero from "../components/layout/home/hero";
import HowItWorks from "../components/layout/home/how-it-works";
import Navbar from "../components/layout/home/navbar";
import Pricing from "../components/layout/home/pricing";

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
