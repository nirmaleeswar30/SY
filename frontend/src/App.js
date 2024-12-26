import React from 'react';
import { Routes, Route } from 'react-router-dom';import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import HomeContent from './components/HomeContent';
 import SchedulePage from './components/Schedule';
import ChakrasPage from './components/Chakra';
import KundaliniPage from './components/Kundalini';
import Nadis from './components/Nadi';
import CentersPage from './components/Our_Centers';
import ContactPage from './components/Home/ContactUsSection';
import Footer from './components/Footer';
import Clearence from './components/Clearance';
import HumanSubtleSystem from './components/HumaSubtleSystem';
const App = () => {
  return (
    <div>
      <Preloader />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/chakras" element={<ChakrasPage />} />
        <Route path="/kundalini" element={<KundaliniPage />} /> 
        <Route path="/nadis" element={<Nadis />} />
        <Route path="/centers" element={<CentersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/clearence" element={<Clearence />} />
        <Route path="/subtle" element={<HumanSubtleSystem />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;