'use client';

import React from 'react';

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    review:
      'Amazing experience! The artists are so talented, and the environment is welcoming. Highly recommend Tagline Studios!',
    rating: 5,
    date: '2024-11-01',
  },
  {
    id: 2,
    name: 'Jane Smith',
    review:
      'Great service and fantastic tattoos! The team is very professional and ensures a comfortable experience.',
    rating: 4.5,
    date: '2024-10-25',
  },
  {
    id: 3,
    name: 'Alex Johnson',
    review:
      'Loved my tattoo! The detail and creativity are unmatched. Will definitely come back for more!',
    rating: 5,
    date: '2024-10-10',
  },
];

const ReviewSection = () => {
  return (
    <section id="section4" className="min-h-screen flex flex-col bg-[#2C302E] text-[#A3A8A3] py-16 px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-heading font-extrabold text-white text-center mb-10">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-6 bg-[#151716] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#daa520] text-black rounded-full flex items-center justify-center text-xl font-heading font-extrabold">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-heading font-extrabold text-white">{review.name}</h3>
                  <p className="text-sm font-body font-medium text-[#A3A8A3]">{review.date}</p>
                </div>
              </div>
              <p className="text-m font-body font-medium text-[#A3A8A3] mb-4">{review.review}</p>
              <div className="flex items-center text-yellow-400 text-3xl">
              {Array(Math.floor(review.rating)).fill('★').join('')}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center text-center">
          <a
            href="https://www.google.com/maps/place/Tagline+Tattoo+Studio/@-25.5790883,27.1500462,17z/data=!4m8!3m7!1s0x1ebddfc41cd56469:0xec63feda8c403633!8m2!3d-25.5790883!4d27.1526211!9m1!1b1!16s%2Fg%2F11vyyd2jqh?entry=ttu&g_ep=EgoyMDI0MTIwMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-3xl font-heading font-bold text-white bg-[#daa520] rounded-md hover:bg-[#c2931c] transition-colors duration-300 mt-10"
          >
            Leave a Review!
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;