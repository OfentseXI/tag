import HeroSection from "./components/HeroSection"; 
import AboutUsSection from "./components/AboutUs";
import GallerySection from "./components/Gallery";
import ArtistSection from "./components/ArtistSection";
import ContactSection from "./components/ContactUs";
import ReviewSection from "./components/Reviews";
import BookingSection from "./components/Booking";

export default function Home() {
  
  const artists = [
    {
      name: 'Monde',
      role: 'Senior Artist',
      image: '/assets/artists/monde.jpg',
      bio: 'Monde is an expert in intricate and full-sleeve tattoos with over 10 years of experience.',
    },
    {
      name: 'Lucy',
      role: 'Junior Artist',
      image: '/assets/artists/lucy.jpg',
      bio: 'Lucy specializes in minimalist designs and loves experimenting with abstract styles.',
    },
    {
      name: 'Fancy',
      role: 'Apprentice',
      image: '/assets/artists/fancy.jpg',
      bio: 'Young and Promising',
    },
  ];

  return (
    <div className="bg-[#2C302E]">
      <main>
        <HeroSection />
        <AboutUsSection />
        <GallerySection />
        <ArtistSection artists={artists} />
        <ReviewSection />
        <BookingSection />
        <ContactSection  />
      </main>
    </div>
  );
}
