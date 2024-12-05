'use client';

import { useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ArtistSection({ artists }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionPosition = document.getElementById('artist-section')?.offsetTop || 0;

      if (scrollPosition > sectionPosition - window.innerHeight / 2) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="artist-section" className="min-h-screen bg-[#151716] flex items-center justify-center md:px-12 lg:px-20 py-12">
      <div className="w-[90%] mx-auto flex flex-col items-center gap-8">
        {/* Section Title */}
        <h2
          className={`
            text-4xl md:text-5xl lg:text-5xl font-heading font-extrabold 
            text-white transition-transform duration-700 
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          Our Talented Artists
        </h2>
        <p 
          className={`
            text-2xl md:text-xl lg:text-2xlm font-body leading-relaxed text-center mx-6
            transition-all duration-700 
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
            Our team of professional tattoo artists brings your ideas to life with precision, creativity, and passion.
            With years of experience and unique styles, we ensure every design is a masterpiece. Whether you&apos;re looking
            for a minimalist design or a full-sleeve artwork, you&apos;re in expert hands at Tagline Tattoo Studio.
        </p>

        {/* Artists Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:mx-20">
          {artists.map((artist) => (
            <div
              key={artist.name}
              className="flex flex-wrap items-center bg-[#2C302E] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <Image
                src={artist.image}
                alt={`Portrait of ${artist.name}`}
                width={280}
                height={280}
                className="rounded-md shadow-md hover:scale-105 transition-transform"
                loading="lazy"
              />
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-[#daa520]">{artist.name}</h3>
                {artist.role && <p className="text-sm text-gray-400">{artist.role}</p>}
                <p className="text-sm text-gray-300 mt-2">{artist.bio}</p>
                {artist.bio && (
                  <Link href={`/artists/${artist.name.toLowerCase().replace(/ /g, '-')}`}>
                    <button
                      className="mt-4 text-sm font-medium text-[#daa520] hover:underline transition-all"
                    >
                      Learn More
                    </button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
