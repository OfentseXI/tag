'use client';

import { useState, useEffect } from 'react';

export default function AboutUsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionPosition = document.getElementById('about-section')?.offsetTop || 0;

      if (scrollPosition > sectionPosition - window.innerHeight / 2) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="about-section"
      className="min-h-screen bg-[#151716] text-[#A3A8A3] flex flex-col justify-center items-center px-6 sm:px-12 lg:px-20 py-12"
    >
      <div className="text-center max-w-5xl mx-auto">
        <h2
          className={`
            text-4xl md:text-5xl lg:text-5xl font-heading font-extrabold mb-10 
            text-white transition-transform duration-700 
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          About Our Studio
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            {
              title: 'Passion-Driven',
              description:
                'Our team of skilled artists are passionate about their craft and dedicated to bringing your visions to life.',
            },
            {
              title: 'High-Quality Work',
              description:
                'We use only the best equipment and top-grade inks to ensure the longevity and integrity of your tattoo.',
            },
            {
              title: 'Welcoming Atmosphere',
              description:
                'Our clean, modern studio provides a comfortable, relaxing experience from consultation to final design.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`
                flex flex-col items-start p-6 bg-[#2C302E] rounded-lg 
                transition-all duration-700 
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-[#daa520] text-black w-10 h-10 flex items-center justify-center rounded-full text-2xl font-heading font-extrabold mb-4">
                {index + 1}
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}