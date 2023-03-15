import React from "react"
import upcomingEvents from "../../data/upcomingEvents"

export default function UpcomingEventCards() {
  const allUpcomingEvents = upcomingEvents.map((event) => (
    <div key={event.id} className="p-4 md:w-1/2 xl:w-1/4">
      <div className="rounded-lg bg-tertiary p-6">
        <img
          className="mb-6  w-full rounded object-cover object-center"
          src={event.img}
          alt="content"
        />
        <h2 className="mb-1 text-xl font-bold text-primary">{event.title}</h2>
        <div className="mb-4 space-y-1">
          <h2 className="text-base text-secondary">
            <span>Date: </span> {event.date}
          </h2>
          <h2 className="text-base text-secondary">
            <span>Time: </span> {event.timing}
          </h2>
          <h2 className="text-base text-secondary">
            <span>Venue: </span> {event.venue}
          </h2>
        </div>
        <p className="mb-2 text-base leading-relaxed text-secondary">
          {event.description}
        </p>
        <a href={event.registrationLink} target={"_blank"}>
          <p className="w-fit cursor-pointer border-b-2 border-primary text-[17px] leading-relaxed text-primary hover:font-bold">
            Register here
          </p>
        </a>
      </div>
    </div>
  ))

  return <div className="-m-4 flex flex-wrap">{allUpcomingEvents}</div>
}
