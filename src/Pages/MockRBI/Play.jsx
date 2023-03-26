import React from "react"

import Navbar from "../../components/MockRBI/Navbar"
import PlayMain from "../../components/MockRBI/PlayMain"

// Using Context
// import {useContext} from "react"
// import {SituationContext} from "../../Context/SituationProvider"

export default function Play() {
  // De-structuring the state right here
  // This syntax is for nested destructuring
  // ! This is not working as planned. That's why Now I have created the server.
  // const {
  //   state: {clickedSituation},
  // } = useContext(SituationContext)

  // console.log(clickedSituation)

  return (
    <div className="min-h-screen bg-black px-10 py-8">
      <Navbar />

      <PlayMain />
    </div>
  )
}
