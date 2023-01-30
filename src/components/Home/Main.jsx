import React from "react"
import {Link} from "react-router-dom"

export default function Main() {
  return (
    <div className="mt-12 overflow-hidden px-3 btwnMdAndLg:mt-20 btwnMdAndLg:px-12 lg:px-16 xl:px-20">
      <div className="text-center btwnMdAndLg:text-left">
        <h1 className="font-Bebas text-[7rem] uppercase leading-[8rem] text-primary xs:text-9xl xs:leading-none  xl:text-[9rem]">
          anirveda
        </h1>
        <h2 className="-mt-2 font-Abel text-4xl text-secondary btwnMdAndLg:text-3xl xl:text-4xl">
          The TechnoEconomics Club
        </h2>
        <p className="mx-auto mt-2 w-4/5 text-justify font-Abel text-base text-secondary btwnMdAndLg:mx-0 btwnMdAndLg:text-xl xl:w-3/5 xl:text-2xl">
          Anirveda, the TechnoEconomics Club of PDEU, was established with an
          astute vision - "Making student pioneers possess both business acumen
          and technical expertise." It continues to grow as an effort to combine
          the forces of Economics and Technology. In this interwoven web of a
          world, it's important to build an understanding of technology,
          economics, policies, international relations and innovation, all of
          which are covered in the spectrum of themes.
        </p>
      </div>
      <div className="flex justify-center space-x-4 py-7 btwnMdAndLg:block">
        <Link to="/committee">
          <button className="rounded-3xl border-2 border-primary bg-primary px-3 pt-1 pb-[6px] text-lg text-white hover:bg-transparent hover:duration-200">
            Committee
          </button>
        </Link>
        <a href="#upcomingevents">
          <button className="rounded-3xl border border-primary px-7 pt-1 pb-[6px] text-lg text-primary hover:bg-primary hover:text-white hover:duration-300">
            Events
          </button>
        </a>
      </div>
    </div>
  )
}
