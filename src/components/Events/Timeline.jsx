import React, { useEffect, useState } from "react";

// Helper function to calculate the progress
const calculateProgress = (events) => {
  const currentDate = new Date();

  // Find the last event that has passed
  const totalEvents = events.length;
  let lastPassedEventIndex = -1;

  for (let i = 0; i < totalEvents; i++) {
    const eventDate = new Date(events[i].date);
    if (eventDate <= currentDate) {
      lastPassedEventIndex = i;
    } else {
      break;
    }
  }

  // If no event has passed yet, progress is 0%
  if (lastPassedEventIndex === -1) return 0;

  // Calculate the progress up to the last passed event, limiting progress to the last passed event
  const progress = ((lastPassedEventIndex + 1) / totalEvents) * 100;
  return progress;
};

const Timeline = ({ events }) => {
  const [progress, setProgress] = useState(0);

  // Effect to set progress and animate the progress bar
  useEffect(() => {
    const calculatedProgress = calculateProgress(events);
    setProgress(calculatedProgress);
  }, [events]);

  return (
    <div className="relative py-10">
      {/* Progress Bar */}
      <div className="relative w-full h-2 bg-gray-200 rounded-full mt-4 mb-6">
        <div
          className={`h-full bg-gradient-to-r from-primary via-secondary to-primary rounded-full transition-all duration-1000`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Horizontal Line */}
      {/* <div className="absolute top-1/2 left-0 h-[2px] w-full bg-gradient-to-r from-primary via-secondary to-primary"></div> */}

      {/* Timeline Events */}
      <div className="relative w-full px-5 space-x-16 flex items-center">
        {events.map((event, index) => {
          const eventPosition = (index / (events.length - 1)) * 100; // Calculate position of event along the progress bar

          return (
            <div
              key={index}
              className="relative flex flex-col items-center space-y-4 group"
              style={{ left: `${eventPosition}%`, position: 'absolute' }}
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
                <h3 className="font-Bebas text-lg text-primary sm:text-xl">{event.name}</h3>
                <p className="font-Lato text-sm text-secondary opacity-80">{event.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
