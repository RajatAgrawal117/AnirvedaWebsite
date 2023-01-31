import React from "react"
import EventsPage from "../components/Events/EventsPage"
import Navbar from "../components/Navbar"

const Events = () => {
  return (
    <div className="bg-black font-Lato">
      <Navbar />
      <EventsPage/>
    </div>
  )
}

export default Events
