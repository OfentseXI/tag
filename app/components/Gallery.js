'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const galleryItems = [
  {
    image: "/gallery/smalls/WhatsApp Image 2024-09-25 at 19.34.17_1c6f7dda.jpg",
    title: "Small Tattoos",
    description: "Intricate and delicate designs that make a subtle yet powerful statement.",
  },
  {
    image: "/gallery/sleeves/WhatsApp Image 2024-09-25 at 19.34.16_aa3a95c5.jpg",
    title: "Sleeves",
    description: "Comprehensive and detailed full-arm artworks that tell a complete story.",
  },
  {
    image: "/gallery/randoms/WhatsApp Image 2024-09-25 at 19.34.17_069c6495.jpg",
    title: "Randoms",
    description: "Unique and spontaneous designs that capture individual creativity.",
  },
  {
    image: "/gallery/randoms/WhatsApp Image 2024-09-25 at 19.34.17_173a75bc.jpg",
    title: "Clips",
    description: "Stylish and compact designs perfect for those wanting minimalist art.",
  }
];

export default function GallerySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionPosition = document.getElementById('section3')?.offsetTop || 0;

      if (scrollPosition > sectionPosition - window.innerHeight / 2) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section 
      id="section3" 
      className="min-h-screen flex flex-col justify-center items-center bg-[#2C302E] md:px-12 lg:px-20 py-12 mx-4"
    >
      <h2 
        className={`
            text-4xl md:text-5xl lg:text-5xl font-heading font-extrabold mb-10 
            text-white transition-transform duration-700 
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
        SkinArt Gallery
      </h2>
    
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8 max-w-7xl">
        {galleryItems.map((item, index) => (
          <div 
            key={index}
            className={`
              bg-[#151716] rounded-lg shadow-lg p-4 sm:p-6 flex flex-col items-center 
              transform transition-transform hover:scale-105 duration-300 
              cursor-pointer opacity-0 animate-fadeIn
              ${`animate-delay-${index * 150}`}
            `}
            onClick={() => openModal(item)}
          >
            <div className="w-full h-40 md:h-80 lg:h-64 flex items-center justify-center overflow-hidden mb-4">
              <Image 
                src={item.image} 
                alt={item.title} 
                width={300} 
                height={300} 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="lg:text-2xl text-2xl font-heading font-extrabold text-[#daa520] mb-2 sm:mb-4 text-center">{item.title}</h3>
            <p className="lg:text-m text-lg font-body text-[#A3A8A3] text-center line-clamp-2">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Modal for detailed view */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-[#151716] flex flex-col items-center justify-center rounded-lg max-w-md sm:max-w-2xl w-full relative transform transition-all duration-300 scale-95 opacity-0 animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal} 
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white text-xl sm:text-2xl hover:text-[#daa520]"
            >
              ×
            </button>
            <Image 
              src={selectedItem.image} 
              alt={selectedItem.title} 
              width={600} 
              height={600} 
              className="w-full h-full md:h-80 lg:h-64 object-cover rounded-t-lg"
            />
            <div className="p-4 sm:p-6">
              <h3 className="text-3xl font-heading font-extrabold text-[#daa520] mb-2 sm:mb-4 text-center">{selectedItem.title}</h3>
              <p className="text-xl font-body text-[#A3A8A3] justify-center text-center">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}