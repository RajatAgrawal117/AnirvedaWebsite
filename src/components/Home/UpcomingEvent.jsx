import React, {useState} from "react"
import {Icon} from "@iconify/react"

import upcomingEvents from "../../data/upcomingEvents"
import {Link} from "react-router-dom"

export default function UpcomingEvent() {
  let [current, setCurrent] = useState(0)

  const upcomingEventsList = upcomingEvents.map((upcomingEvent) => {
    return (
      <div
        key={upcomingEvent.id}
        className={
          "relative w-[90%] rounded-2xl py-8 px-5 sm:px-8 drop-shadow-md  after:absolute after:bottom-0 after:left-0 after:right-0 after:top-20 after:z-[-1] after:w-full after:rounded-2xl after:bg-tertiary xs:w-3/4 xs:after:top-20  sm:w-[65%] sm:after:top-24 xl:px-11 xl:after:top-28"
        }
      >
        <div className="">
          <img src={upcomingEvent.img} />
        </div>
        <div className="mt-3 xl:mt-7">
          <h1 className="text-center font-Lato text-2xl font-bold text-secondary xl:text-3xl">
            {upcomingEvent.title}
          </h1>
          <h2 className="mx-auto mt-1 w-fit cursor-pointer border-b-2 border-secondary text-lg text-secondary">
            Register Here
          </h2>
          <h1 className="mt-2 text-center text-secondary">
            Date: 4th Feb'23, 9AM-6PM
          </h1>

          <p className=" mt-2 text-center font-Lato text-[17px] sm:text-lg font-normal text-primary ">
            {upcomingEvent.description}
          </p>
          <h3 className="mt-2 text-center text-secondary">
            For any query{" "}
            <span className="border-b-2 border-secondary font-bold cursor-pointer">
              contact us
            </span>
          </h3>
        </div>
      </div>
    )
  })

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
        <div className="ml-3 md:hidden">
          <Icon
            icon="ic:baseline-chevron-left"
            className="cursor-pointer rounded-full bg-secondary-15 p-1 pl-[2px] text-3xl sm:pl-0 sm:text-5xl"
            color="#B69575"
            onClick={() => {
              if (current === 0) {
                current = upcomingEventsList.length
              }
              setCurrent(current - 1)
            }}
          />
        </div>
        {/* All Cards */}
        <div className="relative flex justify-center md:hidden">
          {upcomingEventsList[current]}
        </div>
        <div className="hidden md:flex md:gap-4 lg:mx-auto lg:w-[90%] lg:gap-8">
          {upcomingEventsList}
        </div>
        <div className="mr-3 md:hidden">
          <Icon
            icon="ic:baseline-chevron-right"
            color="#B69575"
            className="cursor-pointer rounded-full bg-secondary-15 p-1 pl-[2px]  pr-0 text-3xl sm:pl-0 sm:text-5xl"
            onClick={() => {
              if (current === upcomingEventsList.length - 1) {
                current = -1
              }
              setCurrent(current + 1)
            }}
          />
        </div>
      </div>
    </div>
  )
}
