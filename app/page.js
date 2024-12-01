import HeroSection from "./components/HeroSection"; 
import AboutUsSection from "./components/AboutUs";
import GallerySection from "./components/Gallery";
import ArtistSection from "./components/ArtistSection";
import ContactsSection from "./components/ContactUs";

export default function Home() {
  
  const artists = [
    {
      name: 'Lucy',
      role: 'Junior Artist',
      image: '/tl-assets/Artists/me.jpg',
      bio: 'Lucy specializes in minimalist designs and loves experimenting with abstract styles.',
    },
    {
      name: 'Monde',
      role: 'Senior Artist',
      image: '/tl-assets/Artists/Screenshot_20240927_043503.jpg',
      bio: 'Monde is an expert in intricate and full-sleeve tattoos with over 10 years of experience.',
    },
    {
      name: 'Fancy Fentse',
      role: 'Apprentice',
      image: '/tl-assets/Artists/Screenshot_20240927_043503.jpg',
      bio: '',
    },
  ];

  return (
    <div className="bg-[#2C302E]">
      <main>
        <HeroSection />
        <AboutUsSection />
        <GallerySection />
        <ArtistSection artists={artists} />
        <ContactsSection  />
      </main>
    </div>
  );
}
