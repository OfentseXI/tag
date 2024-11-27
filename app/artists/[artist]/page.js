import Link from "next/link";

export default function ArtistPage({ params }) {
  const artistData = {
    name: "Lucy",
    role: "Junior Artist",
    bio: "Lucy specializes in fine-line and minimalist tattoos. Her passion lies in creating elegant, detailed designs that reflect her clients' unique stories.",
    image: "/path-to-lucy-image.jpg",
    funFact: "Lucy has a background in botanical illustration, which influences her intricate floral designs.",
    socialMedia: {
      instagram: "https://instagram.com/lucy_tattoos",
      twitter: "https://twitter.com/lucy_tattoos",
    },
    contactEmail: "lucy@taglinetattoostudio.com",
  };

  return (
    <section className="bg-[#151716] text-white min-h-screen px-6 py-12">
      {/* Back Button */}
      <div className="mb-8">
        <Link href="/" className="text-[#daa520] hover:underline flex items-center">
          ← Back to Home
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Artist Portrait */}
        <div className="text-center md:text-left">
          <img
            src={artistData.image}
            alt={artistData.name}
            className="rounded-lg shadow-lg w-full md:w-3/4 mx-auto"
          />
        </div>

        {/* Artist Details */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{artistData.name}</h1>
          <h2 className="text-xl text-[#daa520]">{artistData.role}</h2>
          <p className="text-lg leading-relaxed">{artistData.bio}</p>

          {/* Social Media Links */}
          <div className="flex gap-4 mt-4">
            {artistData.socialMedia.instagram && (
              <a
                href={artistData.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#daa520] hover:underline"
              >
                Instagram
              </a>
            )}
            {artistData.socialMedia.twitter && (
              <a
                href={artistData.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#daa520] hover:underline"
              >
                Twitter
              </a>
            )}
          </div>

          {/* Fun Fact */}
          <div className="bg-[#222423] p-4 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Fun Fact</h3>
            <p className="text-lg">{artistData.funFact}</p>
          </div>
        </div>
      </div>

      {/* Message Section */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4 text-center">Send a Message</h3>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium">
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
            <label htmlFor="email" className="block text-lg font-medium">
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
            <label htmlFor="message" className="block text-lg font-medium">
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
            className="px-6 py-3 bg-[#daa520] text-black font-semibold rounded-lg hover:bg-[#c19017] transition duration-300 w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}