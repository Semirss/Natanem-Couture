import HeroSection from './components/AboutSection';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import CircularGallery from './components/CircularGallery/CircularGallery';
import { Nav } from './components/Nav';
import ContactSection from './components/Contactme';
import Designs from './components/Designs';
const App: React.FC = () => {
  return (
    <div >
      <Nav />
        <HomePage />
        <HeroSection />
        
<div style={{ height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight text-center sm:text-left ">
                <span className="text-pink-600">Gallery </span>Collection
              </h2>  <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.05} scrollEase={0.01}/>
</div>
<Designs />
<ContactSection />  
      
      
      <Footer />
    </div>
  );
};

export default App;