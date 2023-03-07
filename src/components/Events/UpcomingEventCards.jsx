import React from "react"
import {comingEvents} from "../../data/comingEvents"

export default function UpcomingEventCards() {
  const allUpcomingEvents = comingEvents.map((event) => (
    <div key={event.index} className="p-4 md:w-1/2 xl:w-1/4">
      <div className="rounded-lg bg-tertiary p-6">
        <img
          className="mb-6  w-full rounded object-cover object-center"
          src={event.img}
          alt="content"
        />
        <h2 className="mb-1 text-lg font-bold text-primary">{event.title}</h2>
        <h2 className="mb-4 text-base text-secondary">
          <span>Date: </span> {event.date}
        </h2>
        <p className="mb-2 text-base leading-relaxed text-secondary">
          {event.description}
        </p>
        {/* <a href={event.registrationLink} target={"_blank"}>
          <p className="w-fit cursor-pointer border-b-2 border-primary text-[17px] leading-relaxed text-primary hover:font-bold">
            Register here
          </p>
        </a> */}
      </div>
    </div>
  ))

  return <div className="-m-4 flex flex-wrap">{allUpcomingEvents}</div>
}
