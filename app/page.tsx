import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import LogosSection from '@/components/LogosSection';
import ProblemSection from '@/components/ProblemSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ExamplesSection from '@/components/ExamplesSection';
import CompetitiveSection from '@/components/CompetitiveSection';
import RolesSection from '@/components/RolesSection';
import PricingSection from '@/components/PricingSection';
import CTASection from '@/components/CTASection';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <LogosSection />
        <ProblemSection />
        <HowItWorksSection />
        <ExamplesSection />
        <CompetitiveSection />
        <RolesSection />
        <PricingSection />
        <CTASection />
      </main>
      <FooterSection />
    </>
  );
}
