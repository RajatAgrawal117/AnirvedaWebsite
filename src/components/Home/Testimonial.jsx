import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

export default function Testimonial() {
  const testimonials = [
    // {
    //   id: 1,
    //   text: "Being a part of Anirveda has been a transformative experience for me. The club's emphasis on the intersection of technology and economics has broadened my perspective and equipped me with the tools to navigate the rapidly changing world. The events and discussions have been insightful and have provided me with valuable knowledge and network.",
    //   name: "Preet Sojitra",
    //   linkedIn: "https://www.linkedin.com/in/preetsojitra",
    //   twitter: "https://twitter.com/preetsojitra",
    //   email: "mailto:preetsojitra@example.com",
    // },
    // {
    //   id: 2,
    //   text: "Anirveda has provided me with a platform to explore my passion for economics and technology. The knowledgeable and supportive community has allowed me to expand my understanding of these fields and how they shape our world. I am grateful for the opportunities and experiences I have had through this club.",
    //   name: "Ishaan Gupta",
    //   linkedIn: "https://www.linkedin.com/in/ishaangupta",
    //   twitter: "https://twitter.com/ishaangupta",
    //   email: "mailto:ishaangupta@example.com",
    // },
    {
      id: 3,
      text: "Being a part of Anirveda, the tech-economics club of my college, has been an incredible journey of growth and learning over the past four years. Starting as an associate and progressing to the role of Chief Coordinator, I had the opportunity to develop my leadership and people management skills in ways I never imagined. The club has been instrumental in broadening my understanding of the dynamic interplay between technology and economics. It challenged me to think critically, collaborate effectively, and innovate consistently. Anirveda was more than just a club—it was a platform for personal and professional growth. I will always cherish the experiences and the friendships I built here. I am grateful for this journey, which has equipped me with skills and knowledge that will stay with me for a lifetime.",
      name: "Hrishikesh Kalola | AI engineer - Paperchase",
      linkedIn: "https://www.linkedin.com/in/hrishk/",
      twitter: "https://twitter.com/hrishikeshkalola",
      email: "mailto:hrishikeshkalola@example.com",
    },
    {
      id: 4,
      text: "AV is one of the places where I truly connected with people and to know how such a niche intersection holds so much knowledge. AV is truly one of the places which is best of both the worlds, economics and tech which couldn’t have been more well explored anywhere else",
      name: "Tanish Patel | AI engineer - Paperchase",
      linkedIn: "https://www.linkedin.com/in/tanishpatel01/",
      twitter: "https://twitter.com/tanishpatel",
      email: "mailto:tanishpatel@example.com",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

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
        <Icon
          icon="ic:baseline-chevron-left"
          className="cursor-pointer rounded-full bg-secondary-15 p-1 pl-0 text-5xl"
          color="#B69575"
          onClick={handlePrev}
        />

        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
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
                  <div className="flex justify-left gap-4">
                    <a
                      href={testimonial.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-3xl border border-primary px-7 pt-1 pb-[6px] text-lg text-primary hover:bg-primary hover:text-white hover:duration-300 text-center"
                    >
                      <Icon icon="mdi:linkedin" className="text-xl" />
                    </a>
                    <a
                      href={testimonial.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-3xl border border-primary px-7 pt-1 pb-[6px] text-lg text-primary hover:bg-primary hover:text-white hover:duration-300 text-center"
                    >
                      <Icon icon="mdi:twitter" className="text-xl" />
                    </a>
                    <a
                      href={testimonial.email}
                      className="rounded-3xl border border-primary px-7 pt-1 pb-[6px] text-lg text-primary hover:bg-primary hover:text-white hover:duration-300 text-center"
                    >
                      <Icon icon="mdi:email" className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

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
