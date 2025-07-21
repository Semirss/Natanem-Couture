import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SeeMore from './components/SeeMore';
import GalleryPage from './components/GalleryPage';
import HeroSection from './components/AboutSection';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import CircularGallery from './components/CircularGallery/CircularGallery';
import { Nav } from './components/Nav';
import ContactSection from './components/Contactme';
import Designs from './components/Designs';
const App: React.FC = () => {
  return (
    <>
    <div >
      <Nav />
        <HomePage />
        <HeroSection />
        
<div style={{ height: '600px',  alignItems: 'center', justifyContent: 'center', backgroundColor: '#000', }}>
<h2 className="text-5xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight text-center sm:text-left ">
                Tren<span className="text-pink-600 ">ding </span>
              </h2>  <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.05} scrollEase={0.4}/>
</div>
<Router>
      <Routes>
        <Route path="/" element={<SeeMore />} />
        <Route path="/gallery/:id" element={<GalleryPage />} />
      </Routes>
    </Router>
<Designs />
<ContactSection />  
      
      
      <Footer />
    </div>
    </>
  );
};

export default App;