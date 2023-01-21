import React from "react"

export default function Nav() {
  return (
    <div className="flex items-center justify-between px-5 md:px-10 lg:px-16">
      <div className="w-20 xl:w-24">
        <img src="./images/logo.webp" alt="Anirveda Logo" />
      </div>
      <div className="flex items-center gap-3 rounded-2xl bg-secondary-opacity px-5 py-1 uppercase text-secondary md:gap-5 md:px-10 lg:px-12 lg:py-2 lg:text-lg xl:gap-7">
        <h1 className="cursor-pointer">home</h1>
        <h1 className="cursor-pointer">about</h1>
        <h1 className="cursor-pointer">events</h1>
        <h1 className="cursor-pointer">gallery</h1>
        <h1 className="cursor-pointer">committee</h1>
      </div>
      <div>
        <button className=" rounded-lg border-[2px] border-primary px-3 py-1 text-lg uppercase text-primary ">
          Contact
        </button>
      </div>
    </div>
  )
}
