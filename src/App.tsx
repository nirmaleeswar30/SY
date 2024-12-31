import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import WelcomeSection from './components/WelcomeSection';
import FeaturesSection from './components/features/FeaturesSection';
import EventSchedule from './components/events/EventSchedule';
import AboutSection from './components/about/AboutSection';
import DonationSection from './components/donations/DonationSection';
import SelfRealizationSection from './components/realization/SelfRealizationSection';
import BenefitsSection from './components/benefits/BenefitsSection';
import PublicProgramsSection from './components/programs/PublicProgramsSection';
import ContactSection from './components/contact/ContactSection';
import Footer from './components/footer/Footer';
import HumanSubtleSystem from './components/HumanSubtleSystem'; 
import ChakrasPage from './components/Chakra';
import Nadis from './components/Nadi';
import Kundalini from './components/Kundalini';
import Schedule from './components/Schedule';
import Our_CentersPage from './components/Our_Centers';
import ClearancePage from './components/Clearence';
import Books from './components/Books';
import { SpeechBrowser } from './components/SpeechBrowser';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <AnimatePresence>
          {loading && <Preloader />}
        </AnimatePresence>

        {!loading && (
          <>
            <Navbar />
            <Routes>
              <Route 
                path="/" 
                element={
                  <>
                    <main>
                      <WelcomeSection />
                      <FeaturesSection />
                      <EventSchedule />
                      <AboutSection />
                      <DonationSection />
                      <SelfRealizationSection />
                      <BenefitsSection />
                      <PublicProgramsSection />
                      <ContactSection />
                    </main>
                  </>
                }
              />
              <Route path="/subtle" element={<HumanSubtleSystem />} /> 
              <Route path="/chakras" element={<ChakrasPage />} />
              <Route path="/nadis" element={<Nadis />} />
              <Route path="/kundalini" element={<Kundalini />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/centers" element={<Our_CentersPage />} />
              <Route path="/contact" element={<ContactSection />} />
              <Route path="/clearence" element={<ClearancePage />} />
              <Route path="/resources/books" element={<Books />} />
	            <Route path="/resources/speeches" element={<SpeechBrowser />} />
            </Routes>
            <Footer />
          </>
        )}
        
      </div>
    </Router>
  );
}

export default App;
