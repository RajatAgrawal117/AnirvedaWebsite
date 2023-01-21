import React from "react"
import {Icon} from "@iconify/react"

import Form from "./Form"

export default function ContactUs() {
  return (
    <div className="mt-16 pb-8">
      <div>
        <h1 className="text-center font-Bebas text-4xl uppercase text-primary">
          Contact us
        </h1>
        <p className="text-center font-Abel text-lg text-white">
          Fill the form and get in touch with us
        </p>
      </div>
      {/* Form */}
      <Form />

      <div className="mt-5">
        <div className="relative mt-3 flex justify-center gap-3 pb-3 after:absolute after:left-1/2 after:bottom-0  after:h-[2px] after:w-3/4 after:-translate-x-1/2 after:bg-white  ">
          <Icon
            icon="mdi:instagram"
            color="#C9872B"
            className="cursor-pointer text-3xl"
          />
          <Icon
            icon="mdi:linkedin"
            color="#C9872B"
            className="cursor-pointer text-3xl"
          />
          <Icon
            icon="mdi:whatsapp"
            color="#C9872B"
            className="cursor-pointer text-3xl"
          />
        </div>
        <div className="mt-3 space-y-2">
          <div className="flex items-center justify-center">
            <Icon
              icon="material-symbols:home"
              color="#c9872b"
              className="text-2xl"
            />
            <span className="ml-2 font-Abel text-base text-white">
              1234, Main Street, New York, USA
            </span>
          </div>
          <div className="flex items-center justify-center">
            <Icon
              icon="material-symbols:phone-enabled-sharp"
              color="#c9872b"
              className="text-2xl"
            />
            <span className="ml-2 font-Abel text-base text-white">
              +91 1234567890
            </span>
          </div>
          <div className="flex items-center justify-center">
            <Icon icon="mdi:email" color="#c9872b" className="text-2xl" />
            <span className="ml-2 font-Abel text-base text-white">
              emial123@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
