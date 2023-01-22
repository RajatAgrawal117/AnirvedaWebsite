import React from "react"
import {Icon} from "@iconify/react"

import Form from "./Form"

export default function ContactUs() {
  return (
    <div className="mt-16 pb-8 lg:grid lg:grid-cols-contactSection lg:gap-8 lg:px-14 lg:pb-24 xl:px-20">
      <div className="lg:mt-14 xl:ml-7">
        <h1 className="text-center font-Bebas text-5xl uppercase text-primary btwnMdAndLg:text-6xl lg:text-left lg:text-[55px]">
          Contact us
        </h1>
        <p className="text-center font-Abel text-lg text-white sm:text-xl lg:mt-5 lg:text-left lg:text-2xl">
          Fill the form and get in touch with us
        </p>
        <div className="hidden lg:block">
          <div className="relative  mt-12  flex gap-3 pb-5 after:absolute after:left-0 after:bottom-0  after:h-[1px] after:w-full after:bg-[#D9D9D9]  ">
          <a href="https://www.instagram.com/anirveda_pdeu/" target="_blank">
          <Icon
            icon="mdi:instagram"
            color="#C9872B"
            className="cursor-pointer text-3xl"
          />
          </a>
          <a href="https://www.linkedin.com/company/anirveda-the-technoeconomics-club/" target="_blank">
          <Icon
              icon="mdi:linkedin"
              color="#C9872B"
              className="cursor-pointer text-4xl"
            />
          </a>
            <Icon
              icon="mdi:whatsapp"
              color="#C9872B"
              className="cursor-pointer text-4xl"
            />
          </div>
          <div className="mt-8 space-y-6">
            <div>
              <h1 className="font-Abel text-lg uppercase text-white">
                Location
              </h1>
              <div className="flex items-center">
                <Icon
                  icon="material-symbols:home"
                  color="#c9872b"
                  className="text-2xl"
                />
                <span className="ml-2 font-Abel text-base text-white">
                  Pandit Deendayal Energy University, Gandhinagar, Gujarat
                </span>
              </div>
            </div>

            <div>
              <h1 className="font-Abel text-lg uppercase text-white">Phone</h1>
              <div className="flex items-center">
                <Icon
                  icon="material-symbols:phone-enabled-sharp"
                  color="#c9872b"
                  className="text-2xl"
                />
                <span className="ml-2 font-Abel text-base text-white">
                  +91 1234567890
                </span>
              </div>
            </div>
            <div>
              <h1 className="font-Abel text-lg uppercase text-white">
                Support
              </h1>
              <div className="flex items-center">
                <Icon icon="mdi:email" color="#c9872b" className="text-2xl" />
                <span className="ml-2 font-Abel text-base text-white">
                  anirvedatecheco@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <Form />

      {/* Hidden after lg breakpoint */}
      <div className="mt-5 lg:hidden">
        <div className="relative mt-3 flex justify-center gap-3 pb-3 after:absolute after:left-1/2 after:bottom-0  after:h-[2px] after:w-3/4 after:-translate-x-1/2 after:bg-[#D9D9D9]  ">
        <a href="https://www.instagram.com/anirveda_pdeu/" target="_blank">
          <Icon
            icon="mdi:instagram"
            color="#C9872B"
            className="cursor-pointer text-3xl"
          />
          </a>
          <a href="https://www.linkedin.com/company/anirveda-the-technoeconomics-club/" target="_blank">
          <Icon
              icon="mdi:linkedin"
              color="#C9872B"
              className="cursor-pointer text-4xl"
            />
          </a>
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
            Pandit Deendayal Energy University,<br /> Gandhinagar, Gujarat
            </span>
          </div>
          <div className="flex items-center justify-center">
            <Icon
              icon="material-symbols:phone-enabled-sharp"
              rotate="1"
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
            anirvedatecheco@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
