import React, { useState } from "react";
import { economaniaEvents } from "../../data/economania";
import { Icon } from "@iconify/react";
import Popup from "./Popup";

export default function EventsCards() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleCardClick = (event) => {
    setSelectedEvent(event);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedEvent(null);
  };

  // Separate Breach 2025 from other events
  const breachEvent = economaniaEvents.find(event => event.title === "Breach 2025");
  const otherEvents = economaniaEvents.filter(event => event.title !== "Breach 2025");

  return (
    <div className="flex flex-col items-center w-full">
      {/* Breach 2025 - Full Width Card */}
      {breachEvent && (
        <div key={breachEvent.id} className="w-full p-4">
          <div
            className="w-full max-w-6xl mx-auto rounded-lg shadow-lg bg-gradient-to-b from-black/80 via-black/70 to-black/60 backdrop-blur-sm border border-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(0,255,255,0.5)] cursor-pointer"
            onClick={() => handleCardClick(breachEvent)}
          >
            <img
              src={breachEvent.img}
              alt={breachEvent.title}
              className="object-cover object-center w-full h-[300px] rounded-t-lg bg-black"
            />
            <div className="flex flex-col justify-between p-6 space-y-4">
              <h2 className="text-4xl font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                {breachEvent.title}
              </h2>
              <div className="flex items-center gap-2 text-lg text-gray-300">
                <Icon icon="mdi:calendar" className="text-primary" />
                <span>{breachEvent.date} | {breachEvent.timing}</span>
              </div>
              <a
                href={breachEvent.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-lg text-white hover:bg-gradient-to-l transition-all flex items-center justify-center gap-2"
                onClick={(e) => e.stopPropagation()} // Prevent popup from opening when clicking register
              >
                <Icon icon="mdi:account-plus-outline" className="text-2xl" />
                Register Now
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Other Events - Grid Layout */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
        {otherEvents.map((event) => (
          <div key={event.id} className="p-4">
            <div
              className="rounded-lg shadow-lg bg-gradient-to-b from-black/80 via-black/70 to-black/60 backdrop-blur-sm border border-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(0,255,255,0.5)] cursor-pointer"
              onClick={() => handleCardClick(event)}
            >
              <img
                src={event.img}
                alt={event.title}
                className="object-cover object-center w-full h-48 rounded-t-lg bg-black"
              />
              <div className="flex flex-col justify-between p-6 space-y-4">
                <h2 className="text-2xl font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  {event.title}
                </h2>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Icon icon="mdi:calendar" className="text-primary" />
                  <span>{event.date} | {event.timing}</span>
                </div>
                {event.registrationLink && (
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 text-sm text-white hover:bg-gradient-to-l transition-all flex items-center justify-center gap-2"
                    onClick={(e) => e.stopPropagation()} // Prevent popup from opening when clicking register
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

      {/* Popup Component */}
      {isOpen && <Popup isOpen={isOpen} onClose={handleClose} eventDetails={selectedEvent} />}
    </div>
  );
}