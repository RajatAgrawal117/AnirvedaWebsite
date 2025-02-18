import React from "react";
import { economaniaEvents } from "../../data/economania";
import { Icon } from "@iconify/react";

export default function EventsCards() {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {economaniaEvents.map((event) => (
        <div key={event.id} className="p-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4">
          <div className="max-w-xs mx-auto rounded-lg shadow-lg bg-gradient-to-b from-black/80 via-black/70 to-black/60 backdrop-blur-sm border border-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(0,255,255,0.5)]">
            <img
              src={event.img}
              alt={event.title}
              className="object-cover object-center w-full h-48 rounded-t-lg bg-black"
            />
            <div className="flex flex-col justify-between p-6 space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  {event.title}
                </h2>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Icon icon="mdi:calendar" className="text-primary" />
                  <span>{event.date} | {event.timing}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Icon icon="mdi:map-marker" className="text-primary" />
                  <span>{event.venue}</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{event.description}</p>
              </div>
              {event.registrationLink && (
                <a
                  href={event.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 text-sm text-white hover:bg-gradient-to-l transition-all flex items-center justify-center gap-2"
                >
                  <Icon icon="mdi:account-plus-outline" className="text-lg" />
                  Register Now
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
