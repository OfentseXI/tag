import Link from "next/link";
import Image from "next/image";

export default function ArtistPage({ params }) {
  const artistData = [
    {
      name: "Monde",
      role: "Senior Artist",
      bio: "With over 5 years of experience, Monde is a master of sleeves and large-scale pieces. His work combines boldness and precision to create stunning body art.",
      image: "/assets/artists/monde2.jpg",
      funFact: "Monde ....",
      socialMedia: {
        instagram: "https://instagram.com/r.ampe",
        facebook: "https://facebook.com/kutlwano.rampe",
      },
      contactEmail: "monde@taglinetattoostudio.com",
    },
    {
      name: "Lucy",
      role: "Junior Artist",
      bio: "Lucy specializes in anything to do with skulls, miniature tattoos and custom design stencils. His passion lies in creating elegant, detailed designs that reflect his clients' unique stories. He is working towards mastering the use of color on skin as well as he does on paper",
      image: "/assets/artists/lucy2.jpg",
      funFact: "Lucy is.....",
      socialMedia: {
        instagram: "https://instagram.com/lucy_tagline",
        facebook: "https://facebook.com/ofentse.diale.35",
      },
      contactEmail: "dofentse69@gmail.com",
    },
    {
      name: "Fancy",
      role: "Apprentice",
      bio: "A promising young artist, Fancy excels at small tattoos, bringing creativity and precision to every design.",
      image: "/assets/artists/fancy2.jpg",
      funFact: "Fancy's ...",
      socialMedia: {
        instagram: "https://instagram.com/fancy_ink014",
        facebook: "https://www.facebook.com/profile.php?id=100093857430495&mibextid=ZbWKwL",
      },
      contactEmail: "fancy@taglinetattoostudio.com",
    }
  ];

  // Find the artist based on the dynamic route param
  const artist = artistData.find(a => a.name.toLowerCase() === params.artist.toLowerCase());

  // Handle case when artist is not found
  if (!artist) {
    return (
      <section className="bg-[#151716] text-white min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Artist Not Found</h1>
      </section>
    );
  }

  return (
    <div className="bg-[#151716] text-white min-h-screen px-6 py-12">
      {/* Back Button */}
      <div className="mb-8">
        <Link href="/" className="font-body text-[#daa520] hover:underline flex items-center">
          ← Back to Home
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Artist Portrait */}
        <div className="text-center font-body md:text-left">
          <Image
            src={artist.image}
            alt={artist.name}
            width={500}
            height={500}
            className="rounded-lg shadow-lg w-full md:w-3/4 mx-auto"
          />
        </div>

        {/* Artist Details */}
        <div className="space-y-6">
          <h1 className="font-heading text-4xl font-bold">{artist.name}</h1>
          <h2 className="font-body text-xl text-[#daa520]">{artist.role}</h2>
          <p className="font-body text-lg leading-relaxed">{artist.bio}</p>

          {/* Social Media Links */}
          <div className="flex gap-4 mt-4">
            {artist.socialMedia.instagram && (
              <Link href={artist.socialMedia.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#daa520]"
              >
                Instagram
              </Link>
            )}
            {artist.socialMedia.facebook && (
              <Link href={artist.socialMedia.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#daa520]"
              >
                Facebook
              </Link>
            )}
          </div>

          {/* Fun Fact */}
          <div className="bg-[#222423] p-4 rounded-lg shadow-md">
            <h3 className="font-heading text-2xl font-extrabold text-[#daa520] mb-2">Fun Fact</h3>
            <p className="font-body text-lg">{artist.funFact}</p>
          </div>
        </div>
      </div>

      {/* Message Section */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h3 className="text-3xl font-heading font-extrabold mb-4 text-center text-[#daa520]">Send a Message</h3>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="font-body block text-lg font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-lg bg-[#222423] text-white focus:outline-none focus:ring-2 focus:ring-[#daa520]"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="font-body block text-lg font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg bg-[#222423] text-white focus:outline-none focus:ring-2 focus:ring-[#daa520]"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="font-body block text-lg font-medium">
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 rounded-lg bg-[#222423] text-white focus:outline-none focus:ring-2 focus:ring-[#daa520]"
              placeholder="Write your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-[#daa520] text-black font-body font-semibold rounded-lg hover:bg-[#c19017] transition duration-300 w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}