import { useState, useEffect } from 'react';

export function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMobile) {
    return (
      <header className="flex justify-center items-center px-6 py-4 md:px-8 md:py-4 fixed top-0 left-0 right-0 z-50">
        <nav className="flex items-center space-x-6 md:space-x-12">
          <a href="#" className="text-white hover:text-pink-500 transition duration-300 text-sm md:text-base">Home</a>
          <a href="#designs" className="text-white hover:text-pink-500 transition duration-300 text-sm md:text-base">Design</a>
          
          <a href="#">
            <img
              src="/6.png" 
              alt="NC Logo"
              className="h-20 w-auto transition-transform duration-300 hover:scale-110" 
            />
          </a>

          <a href="#gallery" className="text-white hover:text-pink-500 transition duration-300 text-sm md:text-base">Gallery</a>
          <a href="#contact" className="text-white hover:text-pink-500 transition duration-300 text-sm md:text-base">Contact</a>
        </nav>
      </header>
    );
  }

  return (
    <header className="px-6 py-4 relative z-10 w-full bg-black/90 backdrop-blur-md">
      <div className="flex justify-between items-center">
        {/* Mobile logo image */}
        <img src="/6.png" alt="NC Logo" className="h-12 w-auto" />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav className="flex flex-col space-y-4 mt-4 text-center">
          <a href="#" className="text-pink-500 transition duration-300 text-sm">Home</a>
          <a href="#designs" className="text-white hover:text-pink-500 transition duration-300 text-sm">Design</a>
          <a href="#gallery" className="text-white hover:text-pink-500 transition duration-300 text-sm">Gallery</a>
          <a href="#contact" className="text-white hover:text-pink-500 transition duration-300 text-sm">Contact</a>
        </nav>
      )}
    </header>
  );
}
