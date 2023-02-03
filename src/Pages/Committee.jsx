import React from "react"
import Navbar from "../components/Navbar"
import ProfileCardsExec from "../components/Committee/ProfileCardsExec"
import ProfileCard from "../components/Committee/ProfileCard"
import CommitteeMain from "../components/Committee/CommitteeMain"
import ProfileCardCore from "../components/Committee/ProfileCardCore"
const Committee = () => {
  return (
    <div className="bg-black font-Lato">
      <div className="flex h-[80vh] flex-col bg-black">
        <Navbar />
        <CommitteeMain />
        <h1 className=" bg-black pt-28 text-center font-Bebas text-[5rem] text-8xl font-light uppercase text-primary">
          Advisors
        </h1>
        <ProfileCard />
        <h1 className=" bg-black pt-28 text-center font-Bebas text-[5rem] text-8xl font-light uppercase text-primary">
          Executives
        </h1>
        <ProfileCardsExec />
        <h1 className=" bg-black pt-28 text-center font-Bebas text-[4.5rem] text-8xl font-light uppercase text-primary lg:text-[5rem]">
          Departments
        </h1>
        <ProfileCardCore />
      </div>
    </div>
  )
}

export default Committee
