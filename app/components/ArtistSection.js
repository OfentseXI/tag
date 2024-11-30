'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ArtistSection = ({ artists }) => {
  return (
    <section id="artist-section" className="min-h-screen bg-[#151716] flex items-center justify-center py-12">
      <div className="w-[90%] mx-auto flex flex-col items-center gap-8">
        {/* Section Title */}
        <h2 className="text-4xl md:text-4xl lg:text-4xl font-bold text-white text-center mb-2">Our Talented Artists</h2>
        <p className="text-md md:text-lg leading-relaxed text-center mx-6">
            Our team of professional tattoo artists brings your ideas to life with precision, creativity, and passion.
            With years of experience and unique styles, we ensure every design is a masterpiece. Whether you're looking
            for a minimalist design or a full-sleeve artwork, you're in expert hands at Tagline Tattoo Studio.
        </p>

        {/* Artists Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:mx-20">
          {artists.map((artist) => (
            <div
              key={artist.name}
              className="flex flex-col items-center bg-[#2C302E] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
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

export default ArtistSection;
