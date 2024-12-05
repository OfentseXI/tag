'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky z-50 top-0 bg-[#151716]">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <Image 
            src="/assets/taglogoG.png" 
            alt="Logo" 
            width={130} 
            height={80} 
            className="h-20 py-2"
          />
        </div>
        
        <div 
          id="dropdown" 
          className={`
            ${isMenuOpen ? 'block' : 'hidden'} 
            absolute top-full left-0 
            bg-[#151716] w-full 
            text-lg font-body text-[#A3A8A3]
          `}
        >
          <ul className="flex flex-col items-center py-4">
            {[
              { href: "#section1", text: "About Us" },
              { href: "#section2", text: "What We Do" },
              { href: "#section3", text: "SkinArt Gallery" },
              { href: "#section4", text: "Artist Profiles" },
              { href: "#section5", text: "Reviews" },
              { href: "#section6", text: "Book Now!" }
            ].map((item, index) => (
              <li 
                key={index} 
                className="my-2 hover:text-white duration-500 hover:scale-105 hover:font-semibold"
              >
                <Link href={item.href}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div 
          id="hamburger" 
          onClick={toggleMenu} 
          className="cursor-pointer"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="40" 
            height="40" 
            fill="#A3A8A3" 
            className="bi bi-list" 
            viewBox="0 0 16 16"
          >
            <path 
              fillRule="evenodd" 
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
}