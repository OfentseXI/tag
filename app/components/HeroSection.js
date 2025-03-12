'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out 
        ${isLoaded ? 'blur-sm' : 'blur-0'}`}
        style={{ backgroundImage: "url('/assets/tattoo-in-dallas.jpg')" }}
      ></div>

      {/* Logo */}
      <div 
        className={`relative z-10 transition-all duration-1000 ease-out 
        ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      >
        <Image 
          src="/assets/taglogoG-adj.png" 
          alt="logo" 
          width={1500} 
          height={1500} 
          className="w-[100vw] max-w-[1500px] h-auto"
          priority
          onLoadingComplete={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
}