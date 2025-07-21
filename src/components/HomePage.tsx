import React from 'react';

const HomePage: React.FC = () => {
  const backgroundImages = [
    '/2.jpg',
    '/11.jpg',
    '/4.jpg',
    
  ];

  return (
    <div className="bg-black text-white relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 z-0 flex w-full h-full">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className="w-full h-full bg-cover bg-center "
            style={{
              backgroundImage: `url(${image})`,
              flex: '1 0 10%',
            }}
          >
            <div className="w-full h-full bg-black opacity-20" />
          </div>
        ))}
      </div>

      <div className="relative z-10">
      

     <main className="flex flex-col md:flex-row items-center justify-center px-4 py-12 md:px-8 md:py-60 min-h-[calc(100vh-100px)] mx-auto">
      <div className="text-center md:text-left max-w-lg space-y-6 mb-8 md:mb-0 py-60 mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 leading-tight">
          <span className="text-white">Natanem</span> Couture
        </h1>
        <p className="text-gray-100 text-base md:text-lg">
          Our history is a modern and convenient design that is the key to successful communication with the client.
        </p>
        <div className="space-x-4 flex justify-center md:justify-start">
          <a href="#gallery">
            <button className="bg-pink-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-lg hover:bg-pink-700 transition-all duration-300 transform hover:-translate-y-1">
              See More
            </button>
          </a>
          <a href="#contact">
            <button className="bg-transparent border-2 border-white text-white px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-lg hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1">
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </main>
      </div>
    </div>
  );
};

export default HomePage;
