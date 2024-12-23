import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      text: "Being a part of Anirveda has been a transformative experience for me. The club's emphasis on the intersection of technology and economics has broadened my perspective and equipped me with the tools to navigate the rapidly changing world. The events and discussions have been insightful and have provided me with valuable knowledge and network.",
      name: "Preet Sojitra",
    },
    {
      id: 2,
      text: "Anirveda has provided me with a platform to explore my passion for economics and technology. The knowledgeable and supportive community has allowed me to expand my understanding of these fields and how they shape our world. I am grateful for the opportunities and experiences I have had through this club.",
      name: "Ishaan Gupta",
    },
    {
      id: 3,
      text: "I joined Anirveda as a curious beginner, but I have since grown into a confident enthusiast. The club's focus on the practical applications of economics and technology has been extremely relevant and has helped me to understand the complexities of the modern world. I highly recommend Anirveda to anyone interested in these fields.",
      name: "Anjali Mehta",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [testimonials.length]);

  // Handle manual navigation
  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="mt-14 pb-8 btwnMdAndLg:mt-24">
      <h1 className="px-4 text-center font-Abel text-3xl font-medium text-primary lg:text-[33px] xl:text-4xl">
        What people have to say about us
      </h1>

      <div className="relative mt-8 flex items-center justify-center xs:px-6 sm:p-10 md:mt-0 md:px-5 lg:px-8">
        {/* Left Arrow */}
        <Icon
          icon="ic:baseline-chevron-left"
          className="cursor-pointer rounded-full bg-secondary-15 p-1 pl-0 text-5xl"
          color="#B69575"
          onClick={handlePrev}
        />

        {/* Testimonials Slider */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="relative mx-auto w-[90%] rounded-2xl bg-tertiary py-8 px-8 drop-shadow-md xs:w-4/5 sm:w-[65%] xl:px-11">
                  <svg
                    aria-hidden="true"
                    className="absolute h-12 w-12 text-primary opacity-50"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <div className="mt-12 mb-3 flex items-center justify-center gap-3 lg:mb-5">
                    <p className="font-Lato text-lg font-normal text-secondary">
                      {testimonial.text}
                    </p>
                  </div>
                  <div className="mt-4 mb-3 gap-3 lg:mt-3 lg:mb-5">
                    <h1 className="font-Lato text-base font-normal text-primary">
                      {testimonial.name}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <Icon
          icon="ic:baseline-chevron-right"
          color="#B69575"
          className="cursor-pointer rounded-full bg-secondary-15 p-1 pr-0 text-5xl"
          onClick={handleNext}
        />
      </div>
    </div>
  );
}