'use client';

import React from 'react';

const BookingSection = () => {
  const steps = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-12 h-12"
          fill="currentColor"
        >
          <path d="M512 256C512 119 393 8 256 8S0 119 0 256s119 248 256 248 248-119 248-248zm-256 72a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm44-210-13 154a32 32 0 0 1-64 0l-13-154a32 32 0 1 1 90 0z" />
        </svg>
      ),
      title: 'WhatsApp Us',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-12 h-12"
          fill="currentColor"
        >
          <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm152 384H104a24 24 0 0 1-24-24V144a24 24 0 0 1 24-24h304a24 24 0 0 1 24 24v224a24 24 0 0 1-24 24z" />
        </svg>
      ),
      title: 'Share Your Idea',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-12 h-12"
          fill="currentColor"
        >
          <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm152 384H104a24 24 0 0 1-24-24V144a24 24 0 0 1 24-24h304a24 24 0 0 1 24 24v224a24 24 0 0 1-24 24z" />
        </svg>
      ),
      title: 'Pricing',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-12 h-12"
          fill="currentColor"
        >
          <path d="M488 352H24c-13.25 0-24-10.75-24-24v-48c0-13.25 10.75-24 24-24h464c13.25 0 24 10.75 24 24v48c0 13.25-10.75 24-24 24zM352 32H160c-13.25 0-24 10.75-24 24v56H24C10.75 112 0 122.75 0 136v48c0 13.25 10.75 24 24 24h112v56c0 13.25 10.75 24 24 24h192c13.25 0 24-10.75 24-24v-56h112c13.25 0 24-10.75 24-24v-48c0-13.25-10.75-24-24-24h-112V56c0-13.25-10.75-24-24-24z" />
        </svg>
      ),
      title: 'Confirm Booking',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-12 h-12"
          fill="currentColor"
        >
          <path d="M512 256C512 119 393 8 256 8S0 119 0 256s119 248 256 248 248-119 248-248zm-256 72a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm44-210-13 154a32 32 0 0 1-64 0l-13-154a32 32 0 1 1 90 0z" />
        </svg>
      ),
      title: 'Get Inked',
    },
  ];

  return (
    <section
      id="booking-section"
      className="min-h-screen bg-[#151716] text-[#A3A8A3] flex flex-col justify-center items-center px-6 sm:px-12 lg:px-20 py-12"
    >
      <div className="text-center max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Process <span className="text-[#DB8C28]">Book A Chair</span>
        </h2>
        <p className="text-lg sm:text-xl mb-10">
          Bookings are strictly by WhatsApp appointment only.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-[#2C302E] p-6 rounded-lg transition-transform duration-500 hover:scale-105"
            >
              <div className="text-[#DB8C28] mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
