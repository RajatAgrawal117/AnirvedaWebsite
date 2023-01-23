import React from "react"

import Navbar from "../components/Navbar"
import Main from "../components/Home/Main"
import BigText from "../components/Home/BigText"
import About from "../components/Home/About"
import ContactUs from "../components/Home/ContactUs"
import Testimonial from "../components/Home/Testimonial"
import Card from "../components/Card"

const HomePage = () => { 
  return (
    <div className="bg-black font-Lato">
      <div className="h-[80vh]flex flex-col">
        <Navbar />
        <Main />
      </div>
      <BigText />
      <About />
      <div className="flex justify-center m-[2rem]">
        <Card name={"Ambush Marketing"} description = {"Anirveda, the techno-economics of PDEU, organizes a fun event 'Ambush Marketing' where rivaling companies compete against other by outdoing and directly attacking the rival’s marketing strategy to emerge as the best. The objective of the event is to engage participants in ‘ambush marketing’ and understand its impact on companies. In the event, students in a group of 2-4 advertise themselves by chaffing about their rival companies over their loopholes and hence showcasing how they are better. The judgement is based on two criteria: domination and creativity."}/>
        <Card name={"Global-o-poly"} description={"Anirveda, the TechnoEconomics Club of PDEU, organizes a riveting auction-based event 'Globalopoly' for Tesseract. In the Monopoly-inspired game, the participating teams with 2-4 members each are provided with a country profile. The game proceeds with bidding for 14 resources at base price for single unit. A crisis round is declared before the trading round. After trading, internal trading will also be allowed. Finally the team which will be able to justify its resources and trading will be declared winner."} />
        <Card name={"ISS Odyssey"} />
      </div>
      <Testimonial/>
      <ContactUs />
    </div>
  )
}

export default HomePage
