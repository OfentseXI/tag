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
    <section className="h-screen bg-[#2C302E] text-[#A3A8A3] py-16 px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-10">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-6 bg-[#151716] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#daa520] text-black rounded-full flex items-center justify-center font-bold">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">{review.name}</h3>
                  <p className="text-sm text-[#A3A8A3]">{review.date}</p>
                </div>
              </div>
              <p className="text-sm text-[#A3A8A3] mb-4">{review.review}</p>
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-6 h-6 ${
                      index < Math.floor(review.rating) ? 'text-yellow-500' : 'text-gray-500'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927a1 1 0 011.902 0l1.518 4.681a1 1 0 00.95.69h4.917a1 1 0 01.592 1.809l-3.988 2.887a1 1 0 00-.364 1.118l1.518 4.681a1 1 0 01-1.451 1.118L10 14.347l-3.987 2.887a1 1 0 01-1.451-1.118l1.518-4.681a1 1 0 00-.364-1.118l-3.988-2.887a1 1 0 01.592-1.809h4.917a1 1 0 00.95-.69l1.518-4.681z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;