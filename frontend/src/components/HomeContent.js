import React from "react";
import WelcomeSection from '../components/Home/WelcomeSection';
import FeaturesSection from '../components/Home/FeaturesSection';
import AboutSection from '../components/Home/AboutSection';
import DonationsSection from "../components/Home/DonationsSection";
import SelfRealisationSection from '../components/Home/SelfRealisationSection';
import FreeSection from '../components/Home/FreeSection';
import BenefitsSection from '../components/Home/BenefitsSection';
import PublicProgramsSection from '../components/Home/PublicProgramsSection';
import ContactUsSection from '../components/Home/ContactUsSection';


const HomeContent = () => {
    return (
      <>
        <WelcomeSection />
        <FeaturesSection />
        <AboutSection />
        <DonationsSection />
        <SelfRealisationSection />
        <FreeSection />
        <BenefitsSection/>
        <PublicProgramsSection/>
        <ContactUsSection/>
      </>
    );
  };
  
  export default HomeContent;