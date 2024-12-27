import React, { useState } from "react";
import { Icon } from "@iconify/react";

import upcomingEvents from "../../data/upcomingEvents";
import { Link } from "react-router-dom";

export default function UpcomingEvent() {
  let [current, setCurrent] = useState(0);

  const upcomingEventsList = upcomingEvents.map((upcomingEvent) => {
    return (
      <div
        key={upcomingEvent.id}
        className="max-w-xs rounded-md shadow-md bg-black text-gray-100 transition-transform duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(0,255,255,0.5)]"
      >
        <img
          src={upcomingEvent.img}
          alt="event poster"
          className="object-cover object-center w-full rounded-t-md"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="break-words text-3xl font-semibold tracking-wide text-primary text-center">
              {upcomingEvent.title}
            </h2>
            <div className="space-y-1 text-sm text-gray-400">
              <p>
                <span className="font-semibold">Date:</span> {upcomingEvent.date}
              </p>
              <p>
                <span className="font-semibold">Time:</span> {upcomingEvent.timing}
              </p>
              <p>
                <span className="font-semibold">Venue:</span> {upcomingEvent.venue}
              </p>
            </div>
            <p className="break-words bg-black">
              {upcomingEvent.description.length > 500
                ? `${upcomingEvent.description.slice(0, 500)}...`
                : upcomingEvent.description}
            </p>
          </div>
          <Link
            to={`/registration?event=${upcomingEvent.state}&event_name=${upcomingEvent.title}&event_description=${upcomingEvent.description}`}
            state={{
              event: upcomingEvent.state,
              event_name: upcomingEvent.title,
              event_description: upcomingEvent.description,
            }}
          >
            <div className="rounded-3xl border border-primary px-7 pt-1 pb-[6px] text-lg text-primary hover:bg-primary hover:text-white hover:duration-300 text-center">
              Register Here
            </div>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div className="mt-20 pb-8 btwnMdAndLg:mt-24" id="upcomingevents">
      <div>
        <h1 className="text-center font-Bebas text-5xl uppercase text-primary sm:text-6xl xl:text-7xl">
          Upcoming Events
        </h1>
        <Link to={"/events"}>
          <h3 className="relative mx-auto mt-2 w-fit cursor-pointer overflow-hidden text-center font-Abel text-2xl text-secondary after:absolute after:bottom-0 after:left-0 after:h-[1.8px] after:w-full after:translate-x-[-100%] after:bg-secondary hover:after:translate-x-0 hover:after:transition-transform hover:after:duration-300">
            View all Events
          </h3>
        </Link>
      </div>

      <div className="relative flex items-center justify-center xs:px-6 sm:p-10 md:mt-0 md:px-5 lg:px-8">
        {upcomingEventsList.length === 0 ? (
          <h1 className="mt-8 text-center font-Lato text-2xl font-bold text-secondary xl:text-3xl">
            No Upcoming Events. Stay Tuned for more updates.
          </h1>
        ) : (
          <>
            <div className="ml-3 md:hidden">
              <Icon
                icon="ic:baseline-chevron-left"
                className="cursor-pointer rounded-full bg-secondary-15 p-1 pl-[2px] text-3xl sm:pl-0 sm:text-5xl"
                color="#B69575"
                onClick={() => {
                  if (current === 0) {
                    current = upcomingEventsList.length;
                  }
                  setCurrent(current - 1);
                }}
              />
            </div>

            <div className="relative flex justify-center md:hidden">
              {upcomingEventsList[current]}
            </div>

            <div className="hidden md:grid md:grid-cols-3 md:gap-4 lg:gap-8">
              {upcomingEventsList}
            </div>

            <div className="mr-3 md:hidden">
              <Icon
                icon="ic:baseline-chevron-right"
                color="#B69575"
                className="cursor-pointer rounded-full bg-secondary-15 p-1 pl-[2px] pr-0 text-3xl sm:pl-0 sm:text-5xl"
                onClick={() => {
                  if (current === upcomingEventsList.length - 1) {
                    current = -1;
                  }
                  setCurrent(current + 1);
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
