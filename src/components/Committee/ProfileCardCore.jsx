import {React, useState} from "react"
import {Icon} from "@iconify/react"
import {Link} from "react-router-dom"
export default function ProfileCardCore() {
  const Departments = [
    "Event Management",
    "Logistics",
    "Social Media",
    "Publicity",
    "Video Editing",
    "Content & Documentation",
    "Graphic Design",
    "Technical",
    "Sponsorship",
  ]
  return (
    <div className="departments bg-black">
      <div className=" mt-3 mb-5 grid w-full grid-flow-row grid-cols-1 items-center gap-2 p-3 font-Abel text-lg font-extrabold text-black opacity-95 duration-300 sm:grid-cols-2 sm:pl-5 sm:pr-5 md:mb-8 md:mt-28 md:grid-cols-3 lg:gap-5 lg:text-xl">
        <Link to={"/em"}>
          <div className="cursor-pointer rounded-3xl bg-gray-600 p-6 text-center hover:scale-110 hover:bg-primary hover:duration-700 lg:p-12">
            Event Management
          </div>
        </Link>
        <Link to={"/logs"}>
          <div className="cursor-pointer rounded-3xl bg-gray-600 p-6 text-center hover:scale-110 hover:bg-primary hover:duration-700 lg:p-12">
            Logistics
          </div>
        </Link>
        <Link to={"/sm"}>
          <div className="cursor-pointer rounded-3xl bg-gray-600 p-6 text-center hover:scale-110 hover:bg-primary hover:duration-700 lg:p-12">
            Social Media
          </div>
        </Link>
        <Link to={"/publicity"}>
          <div className="cursor-pointer rounded-3xl bg-gray-600 p-6 text-center hover:scale-110 hover:bg-primary hover:duration-700 lg:p-12">
            Publicity
          </div>
        </Link>
        <Link to={"/cnd"}>
          <div className="cursor-pointer rounded-3xl bg-gray-600 p-6 text-center hover:scale-110 hover:bg-primary hover:duration-700 lg:p-12">
            Content & Documentation
          </div>
        </Link>
        <Link to={"/tech"}>
          <div className="cursor-pointer rounded-3xl bg-gray-600 p-6 text-center hover:scale-110 hover:bg-primary hover:duration-700 lg:p-12">
            Technical
          </div>
        </Link>
        <Link to={"/ve"}>
          <div className="cursor-pointer rounded-3xl bg-gray-600 p-6 text-center hover:scale-110 hover:bg-primary hover:duration-700 lg:p-12">
            Video Editing
          </div>
        </Link>
        <Link to={"/gd"}>
          <div className="cursor-pointer rounded-3xl bg-gray-600 p-6 text-center hover:scale-110 hover:bg-primary hover:duration-700 lg:p-12">
            Graphic Design
          </div>
        </Link>
        <Link to={"/sponsor"}>
          <div className="cursor-pointer rounded-3xl bg-gray-600 p-6 text-center hover:scale-110 hover:bg-primary hover:duration-700 lg:p-12">
            Sponsorship
          </div>
        </Link>
      </div>
    </div>
  )
}
