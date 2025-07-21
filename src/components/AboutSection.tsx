import React from 'react';
import './AboutSection.css';

const AboutSection: React.FC = () => {
  return (
    <section className=" py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 overflow-hidden mx-auto" style={{justifyContent: 'center'}}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 relative"style={{justifyContent: 'center'}}>
        <div className="w-full md:w-1/2 relative z-20"style={{justifyContent: 'center'}}>
          <div className="relative bg-white/90 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl shadow-xl overflow-visible flex flex-col items-center sm:items-start sm:flex-row gap-4 sm:gap-6">
            <div className="flex justify-center w-full sm:w-auto">
            </div>

            <div className="relative z-10 w-full flex justify-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight text-center sm:text-left">
                Natanem <span className="text-pink-600">Couture</span>
              </h2>
              <p
                className="text-gray-800 text-center sm:text-left text-base sm:text-lg md:text-xl leading-relaxed mb-6 max-h-48 sm:max-h-60 font-sans no-scrollbar"
                style={{
                  overflowY: 'auto',
                  padding: '1rem',
                }}
                onScroll={(e) => {
                  if (e.currentTarget.scrollLeft !== 0) e.currentTarget.scrollLeft = 0;
                }}
              >
                Natanem Couture is a fashion house based in Addis Ababa, Ethiopia, founded by Natanem Wondwossen. The brand is known for its elegant fusion of traditional Ethiopian weaving techniques with modern silhouettes. Each piece is custom-made or ready-to-wear, crafted with authentic storytelling embroidery and a deep respect for cultural heritage. Natanem Couture aspires to bring Ethiopian fashion to the global stage while empowering local artisans and celebrating identity through design.

                Natanem Wondwossen
                Natanem Wondwossen
                Natanem is a multifaceted fashion designer and the creative force behind Natanem Couture. With a background in Information Technology and a passion for artistic expression, she transitioned into fashion after discovering a design school in Addis Ababa. Her work blends structure, culture, and contemporary aesthetics, and her debut show was praised for its immersive storytelling and theatrical flair. Natanem is committed to growing her brand internationally while staying rooted in Ethiopian craftsmanship.
              </p>
            </div>

            <img
              src="/15.jpg"
              alt="Overlay Top Right"
              className="absolute -top-4 sm:-top-6 md:-top-8 -right-4 sm:-right-6 md:-right-8 w-20 sm:w-24 md:w-28 transform rotate-6 rounded-lg shadow-xl border-4 border-white z-0"
            />

            <img
              src="/3.jpg"
              alt="Overlay Bottom Left"
              className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -left-4 sm:-left-6 md:-left-8 w-20 sm:w-24 md:w-28 transform -rotate-6 rounded-lg shadow-xl border-4 border-white z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;