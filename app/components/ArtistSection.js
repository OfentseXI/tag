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
    <section id="section3" className="min-h-screen bg-[#151716] flex items-center justify-center md:px-12 lg:px-20 py-12">
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
            text-xl md:text-xl lg:text-2xl text-gray-300 font-body leading-relaxed text-center mx-6
            transition-all duration-700 
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
            Our team of professional tattoo artists brings your ideas to life with precision, creativity, and passion.
            With years of experience and unique styles, we ensure every design is a masterpiece. Whether you&apos;re looking
            for a minimalist design or a full-sleeve artwork, you&apos;re in expert hands at Tagline Tattoo Studio.
        </p>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:mx-15">
          {artists.map((artist) => (
            <div
              key={artist.name}
              className="flex flex-wrap items-center justify-center bg-[#2C302E] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <Image
                src={artist.image}
                alt={`Portrait of ${artist.name}`}
                width={280}
                height={280}
                className="w-full h-80 rounded-md shadow-md object-cover"
                loading="lazy"
              />
              <div className="mt-4 text-center">
                <h3 className="lg:text-3xl text-3xl font-heading font-extrabold text-[#daa520]">{artist.name}</h3>
                {artist.role && <p className="lg:text-lg text-xl font-body text-gray-400">{artist.role}</p>}
                <p className="lg:text-m text-xl font-body text-gray-300 mt-2">{artist.bio}</p>
                {artist.bio && (
                  <Link href={`/artists/${artist.name.toLowerCase().replace(/ /g, '-')}`}>
                    <button
                      className="my-4 lg:text-lg text-xl font-body font-medium text-[#daa520] hover:underline transition-all"
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
