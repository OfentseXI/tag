'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div 
      className="relative bg-cover bg-center bg-no-repeat w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[700px]" 
      style={{ backgroundImage: "url('/tl assets/tattoo-in-dallas.jpg')" }}
    >
      <div 
        className={`
          transition-all duration-1000 ease-out
          ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        `}
      >
        <Image 
          src="/tl assets/taglogoG-adj.png" 
          alt="logo" 
          width={500} 
          height={500} 
          className="backdrop-blur-sm lg:h-[700px] sm:max-w-[60%] w-auto h-auto"
          priority
          onLoadingComplete={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
}