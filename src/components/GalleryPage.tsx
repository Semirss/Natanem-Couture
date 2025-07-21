import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Define the type for gallery items
interface GalleryItem {
  id: number;
  name: string;
  description: string;
  image: string;
}

// Sample gallery data (in a real app, this might come from a context or API)
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


const GalleryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const item = galleryItems.find((item) => item.id === parseInt(id || '0')) || galleryItems[0];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">{item.name}</h1>
      <img
        src={item.image}
        alt={item.name}
        className="w-full max-w-2xl mx-auto h-auto rounded-lg shadow-lg"
      />
      <p className="text-lg mt-4 text-center">{item.description}</p>
      <button
        className="mt-4 px-4 py-2 bg-pink-600 text-white rounded hover:bg-grey-700 mx-auto block"
        onClick={() => navigate('/')}
      >
        Back to Gallery
      </button>
    </div>
  );
};

export default GalleryPage;