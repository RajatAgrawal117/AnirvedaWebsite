import React, {useState, useEffect} from "react"

import Navbar from "../../components/MockRBI/Navbar"
// import data
import choices from "../../data/mockrbi/choices"

// Using Context
import { useContext } from "react"
import { SituationContext } from "../../Context/SituationProvider"

export default function Play() {

  // De-structuring the state right here
  // This syntax is for nested destructuring
  const { state: { clickedSituation }, handleNormalClick } = useContext(SituationContext)

  const handleClick = () => {
    handleNormalClick({
      id: 6,
      situation:
        "The RBI is expected to cut the repo rate by 25 basis points to 6.25%.",
    })
  }
  console.log(clickedSituation);

  const [showTimer, setShowTimer] = useState(false)

  // Add default balance to local storage
  const defaultBalance = 8000
  localStorage.setItem("balance", defaultBalance)

  return (
    <div className="bg-black px-10 py-8">
      <Navbar />

      {/* Timer */}
      <div
        className={` ${
          showTimer ? "fixed md:hidden" : "hidden"
        } top-8 right-8 rounded-full bg-secondary-opacity text-center`}
      >
        <div className="px-6 py-9">
          <h1 className="font-Lato text-xl font-semibold text-secondary">
            Time Left
          </h1>
          <h1 className="font-Lato text-xl font-semibold text-secondary">
            00:00
          </h1>
        </div>
      </div>

      <div className="mt-16 text-center md:hidden">
        <h1 className="font-Lato text-4xl font-semibold text-primary">
          Your Balance
        </h1>
        <h2 className="mt-2 font-Lato text-3xl font-semibold text-primary">
          ₹ {localStorage.getItem("balance")}
        </h2>
      </div>

      <div className="mt-16 text-center md:mt-4">
        <h1 className="font-Lato text-4xl font-semibold text-primary" onClick={handleClick}>
          Situation
        </h1>
        <p className="mt-3 text-xl text-secondary">
          Increasing inflation in the nation, inflation rate 6% <br />
          Repo rate rised to 6.5%
        </p>
      </div>

      <div className="mt-12 md:mt-7">
        <h1 className="text-center font-Lato text-4xl font-semibold text-primary">
          Make your choice
        </h1>

        <div className="mt-7 space-y-7 sm:flex sm:flex-row sm:flex-wrap sm:gap-6 sm:space-y-0 md:mt-4 lg:justify-center lg:gap-6">
          {choices.map((choice) => (
            <div
              key={choice.id}
              className="flex flex-col  items-center rounded-lg bg-tertiary py-4 xs:mx-auto xs:w-4/5 sm:w-3/6  md:w-[40%] lg:mx-0 lg:w-72 xl:w-80"
            >
              <img
                src={choice.img}
                alt={choice.alt}
                className="w-3/4 xs:w-3/5"
              />
              <button className="my-5 rounded-md border-[2px] border-transparent bg-primary px-4 pt-1 pb-2 text-2xl  text-white transition-colors duration-300 hover:cursor-pointer hover:border-[2px] hover:border-primary hover:bg-transparent hover:text-primary  ">
                {choice.title}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* This Balance and Timer will be visible on larger screens */}
      <div className="mt-8  hidden md:flex md:justify-between">
        {/* Timer */}
        <div className={`${showTimer ? "md:flex" : "invisible"}`}>
          <h1 className="font-Lato text-3xl font-semibold text-primary">
            Time Left : 00:00
          </h1>
        </div>
        {/* Balance */}
        <h1 className="font-Lato text-3xl font-semibold text-primary">
          Your Balance : ₹ {localStorage.getItem("balance")}
        </h1>
      </div>
    </div>
  )
}
