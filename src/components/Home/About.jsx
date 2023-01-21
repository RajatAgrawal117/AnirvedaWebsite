import React from "react"
import { Icon } from "@iconify/react"

export default function About() {
  return (
    <div className="mt-4 px-4">
      <div className="">
        <img
          src="https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGVjb25vbWljc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
          alt="economic"
        />
      </div>
      <div className="mt-3  bg-tertiary py-5">
        <h1 className="text-center font-Bebas text-5xl uppercase text-primary">
          About anirveda
        </h1>
        <h2 className="text-center text-lg text-secondary">Single line here</h2>
        <p className="mx-auto mt-1 w-4/5 text-justify text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu
        </p>

        <div className="flex gap-3 justify-center mt-3">
          <Icon icon="mdi:instagram" color="#b69575" className="text-3xl cursor-pointer" />
          <Icon icon="mdi:linkedin" color="#b69575" className="text-3xl cursor-pointer" />
          <Icon icon="mdi:whatsapp" color="#b69575" className="text-3xl cursor-pointer" />
          <Icon icon="mdi:email" color="#b69575" className="text-3xl cursor-pointer" />
        </div>
      </div>
    </div>
  )
}
