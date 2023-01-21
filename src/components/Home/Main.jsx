import React from "react"

export default function Main() {
  return (
    <div className="mt-12 px-3">
      <div className="text-center">
        <h1 className="font-Bebas text-8xl uppercase text-primary">anirveda</h1>
        <h2 className="-mt-2 font-Lato text-2xl text-secondary">
          The Technoeconomics Club
        </h2>
        <p className="mt-2 text-base text-secondary text-justify w-4/5 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu
        </p>
      </div>
      <div className="flex justify-center space-x-4 py-7">
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
