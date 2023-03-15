import React from "react"
import {pastEvents} from "../../data/pastEvents"

export default function PastEventCards() {
  const allPastEvents = pastEvents.map((event, index) => (
    <div key={index} className="p-4 md:w-1/2 xl:w-1/4">
      <div className="rounded-lg bg-tertiary p-6">
        <img
          className="mb-6 h-40 w-full rounded object-cover object-center"
          src={event.img}
          alt="content"
        />
        <h2 className="mb-4 text-lg font-bold text-primary">{event.title}</h2>
        <p className="text-base leading-relaxed text-secondary">
          {event.description}
        </p>
      </div>
    </div>
  ))

  return <div className="-m-4 flex flex-wrap">{allPastEvents}</div>
}
