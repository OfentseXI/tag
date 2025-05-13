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
      name: "Monde",
      role: "Senior Artist",
      image: "/assets/artists/monde.jpg",
      bio: "Our senior artist with over 4 years of experience, known for bold, intricate sleeves and large-scale masterpieces. Precision meets artistry in every piece.",
    },
    {
      name: "Lucy",
      role: "Junior Artist",
      image: "/assets/artists/lucy.jpg",
      bio: "A junior artist with a passion for detail, specializing in complex miniatures and custom designs. If it involves skulls, he’s all in.",
    },
    {
      name: "Fancy",
      role: "Apprentice",
      image: "/assets/artists/fancy.jpg",
      bio: "A rising talent and dedicated apprentice, bringing fresh creativity to small designs with flair and style.",
    },
    {
      name: "John D",
      role: "Management",
      image: "/assets/artists/JohnD.jpg",
      bio: "The mind behind the message. As our marketing maestro, John brings bold, vibrant ideas and sharp strategy to every move Tagline makes.",
    },
    {
      name: "Nico de Barber",
      role: "Barber",
      image: "/assets/artists/Nico.jpg",
      bio: "No shortcuts, just finesse. Nico's cuts are clean, sharp, and always speak louder than words. What you see is exactly what you get, and what you get is the best.",
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
