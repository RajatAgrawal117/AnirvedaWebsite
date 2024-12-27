import React from "react";

const Timeline = ({ events }) => {
  return (
    <div className="relative py-10">
      {/* Horizontal Line */}
      <div className="absolute top-[2.2rem] left-0 h-[2px] w-full bg-gradient-to-r from-primary via-secondary to-primary"></div>

      {/* Timeline Events */}
      <div className="flex overflow-x-auto px-5 space-x-16">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center space-y-4 group"
          >
            {/* Event Circle */}
            <div
              className={`relative flex h-12 w-12 items-center justify-center rounded-full border-4 ${
                event.type === "upcoming"
                  ? "border-primary bg-gradient-to-br from-primary via-secondary to-primary text-black"
                  : "border-secondary bg-secondary text-white"
              } group-hover:scale-110 transition-transform duration-300`}
            >
              <span className="font-bold">{index + 1}</span>
              {/* Glow Effect */}
              <div className="absolute -z-10 h-16 w-16 rounded-full bg-gradient-to-br from-primary to-secondary blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>

            {/* Event Details */}
            <div className="text-center transition-transform duration-300 group-hover:-translate-y-2">
              <h3 className="font-Bebas text-lg text-primary sm:text-xl">
                {event.name}
              </h3>
              <p className="font-Lato text-sm text-secondary opacity-80">
                {event.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;