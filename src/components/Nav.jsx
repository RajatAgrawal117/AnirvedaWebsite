import React from "react"
import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <div className="flex items-center justify-between px-5 md:px-10 lg:px-16">
      <div className="w-20 xl:w-24">
        <Link to="/"><img src="./images/logo.webp" alt="Anirveda Logo" /></Link>
      </div>
      <div className="flex items-center gap-3 rounded-2xl bg-secondary-opacity px-5 py-1 uppercase text-secondary md:gap-5 md:px-10 lg:px-12 lg:py-2 lg:text-lg xl:gap-7">
        <Link to="/"><h1 className="cursor-pointer">home</h1></Link>
        {/* <Link to="/about"><h1 className="cursor-pointer">about</h1></Link> */}
        <Link to="/events"><h1 className="cursor-pointer">events</h1></Link>
        <Link to="/gallery"><h1 className="cursor-pointer">gallery</h1></Link>
        <Link to="/committee"><h1 className="cursor-pointer">committee</h1></Link>
      </div>
      <div>
        <a href="#contact"><button className=" rounded-lg border-[2px] border-primary px-3 py-1 text-lg uppercase text-primary ">
          Contact
        </button></a>
      </div>
    </div>
  )
}
