import React from "react"
import {Link} from "react-router-dom"

export default function Nav() {
  return (
    <div className="flex items-center justify-between px-5 md:px-10 lg:px-16">
      <div className="w-20 xl:w-24">
        <Link to="/">
          <img src="./images/logo.webp" alt="Anirveda Logo" />
        </Link>
      </div>
      <div className="flex items-center gap-3 rounded-2xl bg-secondary-opacity px-5 py-1 uppercase text-secondary md:gap-5 md:px-10 lg:px-12 lg:py-2 lg:text-lg xl:gap-7">
        {[
          {
            id: 0,
            title: "home",
            url: "/",
          },
          {
            id: 1,
            title: "events",
            url: "/events",
          },
          {
            id: 2,
            title: "gallery",
            url: "/gallery",
          },
          {
            id: 3,
            title: "committee",
            url: "/committee",
          },
        ].map(({id,title, url}) => (
          <Link to={url} key={id}>
            <h1 className="hover:after:duration-300 relative cursor-pointer overflow-hidden after:absolute after:bottom-0 after:left-0 after:h-[1.8px] after:w-full after:translate-x-[-100%] after:bg-secondary hover:after:translate-x-0 hover:after:transition-transform">
              {title}
            </h1>
          </Link>
        ))}
      </div>
      <div>
        <a href="#contact">
          <button className=" rounded-lg border-[2px] border-primary hover:border-secondary hover:text-secondary hover:bg-secondary-opacity px-3 py-1 text-lg uppercase text-primary ">
            Contact
          </button>
        </a>
      </div>
    </div>
  )
}
