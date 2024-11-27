'use client';
import React from 'react';
import Image from 'next/image';

const ArtistSection = ({ artists }) => {
  return (
    <section id="artist-section" className="min-h-screen bg-[#151716] flex items-center justify-center py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-[92%] mx-auto items-center text-white">
        {/* Left Artist */}
        {artists.map((artist, index) => (
          <div
            key={artist.name}
            className={`text-center ${
              index === 1 ? 'md:col-span-2' : 'md:col-span-1'
            } flex flex-col items-center`}
          >
            <Image
              src={artist.image}
              alt={`Portrait of ${artist.name}`}
              width={300}
              height={300}
              className="rounded-md shadow-lg transition-transform hover:scale-105"
              loading="lazy"
            />
            <h3 className="mt-4 text-lg font-semibold text-[#daa520]">{artist.name}</h3>
            {artist.role && <p className="text-sm text-gray-400">{artist.role}</p>}
            {artist.bio && (
              <button
                onClick={() => alert(`${artist.name}'s bio coming soon!`)} // Replace with modal or navigation
                className="mt-2 text-sm font-medium text-[#daa520] hover:underline"
              >
                Learn More
              </button>
            )}
          </div>
        ))}
        {/* Text in Between */}
        <div className="text-center md:col-span-2 order-last md:order-none">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Meet Our Artists</h2>
          <p className="text-md md:text-lg leading-relaxed">
            Our team of professional tattoo artists brings your ideas to life with precision, creativity, and passion.
            With years of experience and unique styles, we ensure every design is a masterpiece. Whether you're looking
            for a minimalist design or a full-sleeve artwork, you're in expert hands at Tagline Tattoo Studio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArtistSection;