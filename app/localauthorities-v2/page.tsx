'use client';

import NavBar from '@/components/NavBar';
import FooterSection from '@/components/FooterSection';
import LAHeroSectionV2 from '@/components/LocalAuthorities/LAHeroSectionV2';
import LAThreeReasonsSection from '@/components/LocalAuthorities/LAThreeReasonsSection';
import ARPPartnershipSectionV2 from '@/components/LocalAuthorities/ARPPartnershipSectionV2';
import ProblemSection from '@/components/LocalAuthorities/LAProblemSection';
import SolutionSection from '@/components/LocalAuthorities/LASolutionSection';
import VideoShowcaseSection from '@/components/LocalAuthorities/LAVideoShowcaseSection';
import ROICalculatorSectionV2 from '@/components/LocalAuthorities/LAROICalculatorSectionV2';
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
        <VideoShowcaseSection />
        <ROICalculatorSectionV2 />
        <CTASectionV2 />
      </main>
      <FooterSection />
    </>
  );
}
