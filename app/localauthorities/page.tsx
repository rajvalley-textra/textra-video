'use client';

import NavBar from '@/components/NavBar';
import FooterSection from '@/components/FooterSection';
import LAHeroSection from '@/components/LocalAuthorities/LAHeroSection';
import ARPPartnershipSection from '@/components/LocalAuthorities/ARPPartnershipSection';
import ProblemSection from '@/components/LocalAuthorities/LAProblemSection';
import SolutionSection from '@/components/LocalAuthorities/LASolutionSection';
import DepartmentsSection from '@/components/LocalAuthorities/LADepartmentsSection';
import ROICalculatorSection from '@/components/LocalAuthorities/LAROICalculatorSection';
import TestimonialsSection from '@/components/LocalAuthorities/LATestimonialsSection';
import CTASection from '@/components/LocalAuthorities/LACTASection';

export default function LocalAuthoritiesPage() {
  return (
    <>
      <NavBar />
      <main>
        <LAHeroSection />
        <ARPPartnershipSection />
        <ProblemSection />
        <SolutionSection />
        <DepartmentsSection />
        <ROICalculatorSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <FooterSection />
    </>
  );
}
