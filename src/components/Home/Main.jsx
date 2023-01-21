import React from "react"

export default function Main() {
  return (
    <div className="mt-12 px-3 btwnMdAndLg:mt-20 btwnMdAndLg:px-12 lg:px-16 xl:px-20">
      <div className="text-center btwnMdAndLg:text-left">
        <h1 className="font-Bebas text-8xl uppercase text-primary btwnMdAndLg:text-9xl xl:text-[9rem]">
          anirveda
        </h1>
        <h2 className="-mt-2 font-Abel text-2xl text-secondary btwnMdAndLg:text-3xl xl:text-4xl">
          The Technoeconomics Club
        </h2>
        <p className="mx-auto mt-2 w-4/5 text-justify font-Abel text-base text-secondary btwnMdAndLg:mx-0 btwnMdAndLg:text-xl xl:w-3/5 xl:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu
        </p>
      </div>
      <div className="flex justify-center space-x-4 py-7 btwnMdAndLg:block">
        <button className="rounded-3xl bg-primary px-3 pt-1 pb-[6px] text-lg text-white">
          About Anirveda
        </button>
        <button className="rounded-3xl border border-primary px-7 pt-1 pb-[6px] text-lg text-primary">
          Committee
        </button>
      </div>
    </div>
  )
}
