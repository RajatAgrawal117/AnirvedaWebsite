import React from "react"

export default function Main() {
  return (
    <div className="mt-12 overflow-hidden px-3 btwnMdAndLg:mt-20 btwnMdAndLg:px-12 lg:px-16 xl:px-20">
      <div className="text-center btwnMdAndLg:text-left">
        <h1 className="font-Bebas text-[7rem] uppercase leading-[8rem] text-primary xs:text-9xl xs:leading-none  xl:text-[9rem]">
          Sponsors 
        </h1>
        <h2 className="-mt-2 font-Abel text-4xl text-secondary btwnMdAndLg:text-3xl xl:text-4xl">
          catchy line
        </h2>
        <p className="mx-auto mt-2 w-4/5 text-justify font-Abel text-base text-secondary btwnMdAndLg:mx-0 btwnMdAndLg:text-xl xl:w-3/5 xl:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nihil quidem ex, delectus atque, nesciunt explicabo quia quasi et similique quaerat accusantium, in ipsa sequi eum quas reprehenderit corrupti rerum!
        </p>
      </div>
      <div className="flex justify-center space-x-4 py-7 btwnMdAndLg:block">
        <a href="#policies">
          <button className="rounded-3xl border-2 border-primary bg-primary px-3 pt-1 pb-[6px] text-lg text-white hover:bg-transparent hover:duration-200">
            Policies
          </button>
        </a>
        <a href="#pastsponsors">
          <button className="rounded-3xl border border-primary px-7 pt-1 pb-[6px] text-lg text-primary hover:bg-primary hover:text-white hover:duration-300">
            Past Sponsors
          </button>
        </a>
      </div>
    </div>
  )
}
