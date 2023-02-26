import React from "react"
import Navbar from "../components/Navbar"
import ProfileCard from "../components/Committee/ProfileCard"
import advisors from "../data/committee/advisors"
import executives from "../data/committee/executives"
import Departments from "../components/Committee/Departments"
import ContactUs from "../components/ContactUs"

export default function Committee() {
  return (
    <div className="bg-black font-Lato">
      <div className="flex h-[80vh] flex-col bg-black">
        <Navbar />
        <div className="mt-44 bg-black px-3 sm:mt-72 btwnMdAndLg:mt-40 btwnMdAndLg:px-12 lg:px-16 xl:px-20">
          <div className="text-center ">
            <h1 className=" font-Bebas text-[5.5rem] uppercase text-primary sm:text-9xl md:pt-2 btwnMdAndLg:text-[9rem] xl:text-[10rem]">
              Committee
            </h1>
            <h3 className="-mt-2 bg-black pb-24 font-Bebas text-xl text-secondary btwnMdAndLg:text-2xl xl:text-2xl">
              The amazing team that works behind the scenes to make it possible.
            </h3>
          </div>
        </div>
      </div>
      <ProfileCard data={advisors} heading={"Advisors"} />
      <ProfileCard data={executives} heading={"Executives"} />
      <Departments />

      {/* Footer */}
      <ContactUs />
    </div>
  )
}
