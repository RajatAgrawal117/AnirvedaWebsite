import React from "react"
import {Icon} from "@iconify/react"

export default function About() {
  return (
    <div className="mt-4 px-4 lg:relative lg:px-8 xl:mt-16 xl:px-24">
      <div className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 xl:right-16 btwnXlAnd2xl:right-28">
        <img
          src="https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGVjb25vbWljc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
          alt="economic"
          className="mx-auto sm:w-full md:w-4/5 xl:w-[90%] xl:mx-0"
        />
      </div>
      <div className="mt-3  bg-tertiary py-5 md:mx-auto md:w-4/5 md:py-8 lg:mx-0 lg:w-4/5 lg:rounded-2xl lg:px-8 lg:py-12 xl:px-12 xl:py-14 xl:w-[90%] btwnXlAnd2xl:w-4/5 btwnXlAnd2xl:px-20">
        <h1 className="text-center font-Bebas text-5xl uppercase text-primary sm:text-6xl lg:text-left xl:text-7xl">
          About anirveda
        </h1>
        <h2 className="text-center text-lg text-secondary sm:text-xl lg:my-2 lg:text-left">
          Single line here
        </h2>
        <p className="mx-auto mt-1 w-4/5 text-justify text-secondary md:text-lg lg:mx-0 lg:mt-8 lg:w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu
        </p>

        <div className="mt-3 flex justify-center gap-3 md:mt-5 lg:justify-start">
          <a href="https://www.instagram.com/anirveda_pdeu/" target="_blank"><Icon
            icon="mdi:instagram"
            color="#b69575"
            className="cursor-pointer text-3xl"
          /></a>
          <a href="https://www.linkedin.com/company/anirveda-the-technoeconomics-club/" target="_blank"><Icon
            icon="mdi:linkedin"
            color="#b69575"
            className="cursor-pointer text-3xl"
          /></a>
          <Icon
            icon="mdi:whatsapp"
            color="#b69575"
            className="cursor-pointer text-3xl"
          />
          <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=anirvedatecheco@gmail.com" target="_blank">
          <Icon
            icon="mdi:email"
            color="#b69575"
            className="cursor-pointer text-3xl"
          />
          </a>
        </div>
      </div>
    </div>
  )
}
