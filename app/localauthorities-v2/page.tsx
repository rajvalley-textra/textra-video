'use client';

import NavBar from '@/components/NavBar';
import FooterSection from '@/components/FooterSection';
import LAHeroSectionV2 from '@/components/LocalAuthorities/LAHeroSectionV2';
import LAThreeReasonsSection from '@/components/LocalAuthorities/LAThreeReasonsSection';
import ARPPartnershipSectionV2 from '@/components/LocalAuthorities/ARPPartnershipSectionV2';
import ProblemSection from '@/components/LocalAuthorities/LAProblemSection';
import SolutionSection from '@/components/LocalAuthorities/LASolutionSection';
import DepartmentsSection from '@/components/LocalAuthorities/LADepartmentsSection';
import VideoShowcaseSection from '@/components/LocalAuthorities/LAVideoShowcaseSection';
import ROICalculatorSection from '@/components/LocalAuthorities/LAROICalculatorSection';
import CTASectionV2 from '@/components/LocalAuthorities/LACTASectionV2';

export default function LocalAuthoritiesPageV2() {
  return (
    <>
      <NavBar />
      <main>
        <LAHeroSectionV2 />
        <LAThreeReasonsSection />
        <ARPPartnershipSectionV2 />
        <ProblemSection />
        <SolutionSection />
        <DepartmentsSection />
        <VideoShowcaseSection />
        <ROICalculatorSection />
        <CTASectionV2 />
      </main>
      <FooterSection />
    </>
  );
}
