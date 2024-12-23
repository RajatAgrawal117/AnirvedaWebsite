import React from "react"
import { sponsors } from "../../data/sponsors"

export default function SponsorsCards() {
  const pastSponsors = sponsors.map((sponsor, index) => (
    <div key={index} className="p-4 md:w-1/2 xl:w-1/4">
      <div className="rounded-lg bg-tertiary p-6">
        <img className="mb-6 w-full rounded" src={sponsor.img} alt="content" />
        <h2 className="mb-4 text-lg font-bold text-primary">{sponsor.title}</h2>
        <p className="text-base leading-relaxed text-secondary">
          {sponsor.description}
        </p>
      </div>
    </div>
  ))

  return <div className="-m-4 flex flex-wrap">{pastSponsors}</div>
}
