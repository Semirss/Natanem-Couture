import React from 'react';
import { useNavigate } from 'react-router-dom';

// Define the type for gallery items
interface GalleryItem {
  id: number;
  name: string;
  description: string;
  image: string;
}

// Sample gallery data
const galleryItems: GalleryItem[] = [
 {
    id: 13,
    name: 'Quiet River Whispers',
    description: 'Beautiful scene captured in Ethiopia.',
    image: '/13.jpg',
  },
  {
    id: 9,
    name: 'Timeless Village Flow',
    description: 'Beautiful scene captured in Ethiopia.',
    image: '/9.jpg',
  },
  {
    id: 16,
    name: 'Mystic Sunset Glow',
    description: 'Beautiful scene captured in Ethiopia.',
    image: '/16.jpg',
  },
  {
    id: 4,
    name: 'Mountain Air Freedom',
    description: 'Beautiful scene captured in Ethiopia.',
    image: '/4.jpg',
  },
  {
    id: 10,
    name: 'Rainy Window Thoughts',
    description: 'Beautiful scene captured in Ethiopia.',
    image: '/10.jpg',
  },
  {
    id: 20,
    name: 'Night Market Buzz',
    description: 'Beautiful scene captured in Ethiopia.',
    image: '/20.jpg',
  },
  {
    id: 8,
    name: 'Afternoon Daydream',
    description: 'Beautiful scene captured in Ethiopia.',
    image: '/8.jpg',
  },
  {
    id: 12,
    name: 'Sun-Kissed Meadows',
    description: 'Beautiful scene captured in Ethiopia.',
    image: '/12.jpg',
  },
  {
    id: 2,
    name: 'Festive Street Energy',
    description: 'Beautiful scene captured in Ethiopia.',
    image: '/2.jpg',
  },
  {
    id: 21,
    name: 'Awash Breeze',
    description: 'Beautiful scene captured in Ethiopia.',
    image: '/8.jpg',
  },
  {
    id: 5,
    name: 'Golden Hour Peace',
    description: 'Beautiful scene captured in Ethiopia.',
    image: '/5.jpg',
  },
  {
    id: 3,
    name: 'Coffee Aroma Calm',
    description: 'Beautiful scene captured in Ethiopia.',
    image: '/3.jpg',
  },
  {
    id: 1,
    name: 'Serene Morning Glow',
    description: 'Beautiful scene captured in Ethiopia.',
    image: '/1.jpg',
  },
  {
    id: 15,
    name: 'Cultural Echoes',
    description: 'Beautiful scene captured in Ethiopia.',
    image: '/15.jpg',
  },
  {
    id: 18,
    name: 'Evening Chill',
    description: 'Beautiful scene captured in Ethiopia.',
    image: '/18.jpg',
  },
  {
    id: 19,
    name: 'Peaceful Highlands',
    description: 'Beautiful scene captured in Ethiopia.',
    image: '/19.jpg',
  },
  {
    id: 22,
    name: 'Foggy Forest Calm',
    description: 'Beautiful scene captured in Ethiopia.',
    image: '/8.jpg',
  },
  {
    id: 7,
    name: 'Soulful Market Beat',
    description: 'Beautiful scene captured in Ethiopia.',
    image: '/7.jpg',
  },
  {
    id: 11,
    name: 'Urban Soul Movement',
    description: 'Beautiful scene captured in Ethiopia.',
    image: '/11.jpg',
  },
  {
    id: 23,
    name: 'Street Music Haze',
    description: 'Beautiful scene captured in Ethiopia.',
    image: '/16.jpg',
  },
  {
    id: 17,
    name: 'Lively Bash Vibe',
    description: 'Beautiful scene captured in Ethiopia.',
    image: '/17.jpg',
  },
];


// Custom CSS to hide scrollbar
const styles = `
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;

const SeeMore: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (id: number) => {
    navigate(`/gallery/${id}`);
  };

  // Split items into three rows
  const itemsPerRow = Math.ceil(galleryItems.length / 3);
  const rows = [
    galleryItems.slice(0, itemsPerRow),
    galleryItems.slice(itemsPerRow, itemsPerRow * 2),
    galleryItems.slice(itemsPerRow * 2),
  ];

  return (
    <div className="container mx-auto p-4">
      <style>{styles}</style>
      <h1 className="text-5xl p-20 font-bold  mb-6 text-center"><span className='text-pink-500'>Gallery</span> Preview</h1>
      <div className="flex flex-col gap-12 items-center">
        {rows.map((row, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className="flex flex-row gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory w-full max-w-5.5xl"
          >
            {row.map((item) => (
              <div
                key={item.id}
                className="relative flex-shrink-0 w-48 sm:w-40 lg:w-52 h-64 group cursor-pointer overflow-hidden rounded-lg shadow-lg snap-start"
                onClick={() => handleNavigate(item.id)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Hover effect for larger screens */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex flex-col justify-center items-center text-white p-4">
                  <h2 className="text-xl font-bold">{item.name}</h2>
                  <p className="text-sm mt-2">{item.description}</p>
                </div>
                {/* Always visible on smaller screens */}
                <div className="md:hidden absolute bottom-0 bg-black bg-opacity-50 p-4 text-white w-full">
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeeMore;