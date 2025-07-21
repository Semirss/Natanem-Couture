import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section
      id="sec"
      className="px-4 sm:px-6 md:px-12 py-16 max-w-6xl mx-auto"
    >
      <div className="relative bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-lg flex flex-col gap-6 md:flex-row items-center">
        
        {/* Text Section */}
        <div className="w-full text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug mb-4">
            Natanem <span className="text-pink-600">Couture</span>
          </h2>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed text-justify max-h-72 overflow-y-auto scrollbar-none"style={{
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  }}>
            Natanem Couture is a fashion house based in Addis Ababa, Ethiopia, founded by Natanem Wondwossen. The brand fuses traditional Ethiopian weaving techniques with modern silhouettes. Each piece is custom-made or ready-to-wear, telling a story of heritage and style.

            <br /><br />
            Natanem Wondwossen, the creative director, transitioned from IT into fashion with a passion for cultural expression. Her immersive runway shows and deep respect for craftsmanship reflect her mission to grow globally while empowering local artisans.
          </p>
        </div>

        {/* Decorative Images */}
        <div className="relative mt-8 md:mt-0 md:ml-6 flex gap-4">
          <img
            src="/15.jpg"
            alt="Top Image"
            className="w-24 sm:w-28 md:w-32 rounded-xl shadow-md rotate-3"
          />
          <img
            src="/3.jpg"
            alt="Bottom Image"
            className="w-24 sm:w-28 md:w-32 rounded-xl shadow-md -rotate-3"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
