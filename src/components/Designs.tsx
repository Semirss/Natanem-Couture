import React from 'react';

const Designs: React.FC = () => {
  const designImages = [
'/D1.jpg',
'/D2.jpg',   
'/D4.jpg',
'/D5.jpg',
'/D6.jpg',
'/D7.jpg',

  ];

  return (
    <section
    id='designs'
      className="bg-black py-12 px-4 sm:px-6 md:px-8 overflow-hidden"
      aria-labelledby="designs-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="designs-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 text-center"
        >
          <span className="text-pink-600 border-b-4 border-pink-600">Designs</span> Collection
        </h2>

        {/* Horizontal scroll row with hidden scrollbar */}
        <div className="flex overflow-x-auto gap-6 pb-4 custom-scrollbar">
          {designImages.map((image, index) => (
            <div
              key={index}
              className="relative min-w-[240px] sm:min-w-[300px] md:min-w-[340px] rounded-xl overflow-hidden group transition-transform transform hover:scale-105"
            >
              <img
                src={image}
                alt={`Design ${index + 1}`}
                className="h-80 w-full object-cover rounded-xl shadow-lg group-hover:shadow-pink-500/50 group-hover:ring-2 group-hover:ring-pink-500 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition duration-300">
                <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Design {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Custom Style to Hide Scrollbar */}
      <style >{`
        .custom-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE 10+ */
        }
        .custom-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome/Safari/WebKit */
        }
      `}</style>
    </section>
  );
};

export default Designs;
