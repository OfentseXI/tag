'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const galleryItems = [
  {
    images: [
      "/gallery/smalls/image1.jpg",
      "/gallery/smalls/image2.jpg",
      "/gallery/smalls/image3.jpg",
      "/gallery/smalls/image4.jpg",
      "/gallery/smalls/image5.jpg",
    ],
    title: "Small and Mini Tattoos",
    description:
      "Intricate and delicate designs that make a subtle yet powerful statement.",
  },
  {
    images: [
      "/gallery/randoms/image1.jpg",
      "/gallery/randoms/image2.jpg",
      "/gallery/randoms/image3.jpg",
      "/gallery/randoms/image4.jpg",
      "/gallery/randoms/image5.jpg",
      "/gallery/randoms/image6.jpg",
      "/gallery/randoms/image7.jpg",
      "/gallery/randoms/image8.jpg",
      "/gallery/randoms/image9.jpg",
      "/gallery/randoms/image10.jpg",
    ],
    title: "Medium to Large Tattoos",
    description:
      "Unique and spontaneous designs that capture individual creativity.",
  },
  {
    images: [
      "/gallery/sleeves/image1.jpg",
      "/gallery/sleeves/image2.jpg",
      "/gallery/sleeves/image3.jpg",
      "/gallery/sleeves/image4.jpg",
    ],
    title: "Sleeves",
    description:
      "Comprehensive and detailed full/half-arm artworks that tell a complete story.",
  },
  {
    images: [
      "/gallery/cuts/1.jpg",
      "/gallery/cuts/2.jpg",
      "/gallery/cuts/3.jpg",
      "/gallery/cuts/4.jpg",
      "/gallery/cuts/5.jpg",
      "/gallery/cuts/6.jpg",
      "/gallery/cuts/7.jpg",
      "/gallery/cuts/8.jpg",
      "/gallery/cuts/9.jpg",
    ],
    title: "Cuts",
    description:
      "Nico's finest and freshest cuts.",
  },
];

export default function GallerySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionPosition = document.getElementById('section2')?.offsetTop || 0;
      if (scrollPosition > sectionPosition - window.innerHeight / 2) {
        setIsVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const openModal = (item) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const nextImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedItem.images.length);
    }
  };

  const prevImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedItem.images.length) % selectedItem.images.length);
    }
  };

  return (
    <section 
      id="section2" 
      className="min-h-screen flex flex-col justify-center items-center bg-[#2C302E] md:px-12 lg:px-20 py-12 mx-4"
    >
      <h2 
        className={`text-4xl md:text-5xl lg:text-5xl font-heading font-extrabold mb-10 text-white transition-transform duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        SkinArt Gallery
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
        {galleryItems.map((item, index) => (
          <div 
            key={index}
            className={`bg-[#151716] rounded-lg shadow-lg p-4 sm:p-6 flex flex-col items-center justify-center transform transition-transform hover:scale-105 duration-300 cursor-pointer opacity-0 animate-fadeIn animate-delay-${index * 150}`}
            onClick={() => openModal(item)}
          >
            <div className="w-full h-80 md:h-80 lg:h-64 flex items-center justify-center overflow-hidden mb-4">
              <Image 
                src={item.images[activeIndex % item.images.length]} 
                alt={item.title} 
                width={300} 
                height={300} 
                className="w-full h-full object-cover transition-opacity duration-700"
              />
            </div>
            <h3 className="lg:text-2xl text-2xl font-heading font-extrabold text-[#daa520] mb-2 sm:mb-4 text-center">{item.title}</h3>
            <p className="lg:text-m text-lg font-body text-[#A3A8A3] text-center line-clamp-2">{item.description}</p>
          </div>
        ))}
      </div>
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="bg-[#151716] flex flex-col items-center justify-center rounded-lg max-w-md sm:max-w-2xl w-full relative transform transition-all duration-300 scale-95 opacity-0 animate-scaleUp" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white text-xl sm:text-2xl hover:text-[#daa520]">×</button>
            <div className="relative w-full">
              <Image 
                src={selectedItem.images[currentImageIndex]} 
                alt={selectedItem.title} 
                width={600} 
                height={600} 
                className="w-full h-full md:h-80 lg:h-64 object-cover rounded-t-lg"
              />
              <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full">❮</button>
              <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full">❯</button>
            </div>
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
