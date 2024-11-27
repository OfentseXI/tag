'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AboutUsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionPosition = document.getElementById('section1')?.offsetTop || 0;
      
      if (scrollPosition > sectionPosition - window.innerHeight / 2) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="section1" 
      className="min-h-screen flex flex-col justify-center items-center bg-[#151716] px-6 sm:px-6 lg:px-20 py-12"
    >
      <div className="text-center max-w-4xl mx-auto">
        <h2 className={`
          text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#A3A8A3] 
          mb-6 sm:mb-10 lg:mb-14 transition-transform duration-700 
          transform hover:scale-105
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          Welcome to Tagline Tattoo Studio, home of the best tattoos and unforgettable artistic experiences!
        </h2>
        
        <div className="text-[#A3A8A3] leading-relaxed space-y-4 sm:space-y-6 text-base sm:text-lg lg:text-xl overflow-y-auto max-h-[60vh]">
          {[
            "At Tagline Tattoo Studio, we believe tattoos are more than just ink on skin — they are personal stories, expressions of individuality, and powerful symbols of transformation.",
            "We take pride in following best practices to ensure a clean, safe, and comfortable environment for every client.",
            "Creativity is at the heart of everything we do, and our love for art shines through in every tattoo we create.",
            "Our legacy is built on the smiles and satisfaction of our clients. Every piece we design is more than just body art; it's a reflection of your identity and a celebration of creativity.",
            "At Tagline Tattoo Studio, we're more than just your regular tattoo shop. We can't wait to work with you to bring your next masterpiece to life!"
          ].map((paragraph, index) => (
            <p 
              key={index} 
              className={`
                transition-all duration-700 
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                ${isVisible ? `delay-${index * 100}` : ''}
              `}
            >
              {paragraph}
            </p>
          ))}
        </div>
        
        <div 
          className={`
            mt-6 sm:mt-10 transition-all duration-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <Link 
            href="#contact" 
            className="inline-block bg-[#A3A8A3] text-[#2C302E] px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-medium hover:bg-opacity-80 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}