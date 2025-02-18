import React from "react"
import Navbar from "../components/Navbar"
import ContactUs from "../components/ContactUs"
import About from "../components/Economania/About"
import Events from "../components/Economania/Events"

const Economania = () => {
  return (
    <div className="bg-black font-Lato">
      <Navbar />
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url('/images/economania.png')"
        }}
      >
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-primary animate-slide-in-left">
            Welcome to <span className="text-secondary bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Economania</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-secondary animate-slide-in-right">
            Where <span className="font-semibold text-primary">Economics</span> Meets <span className="font-semibold text-secondary">Innovation</span>
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#events">
            <button 
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold hover:bg-gradient-to-l transition-all transform hover:scale-105 shadow-lg hover:shadow-primary/50 animate-pulse"
            >
              Explore Events
            </button>
            </a>
            <a href="#about">
            <button 
              className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition-all transform hover:scale-105"
            >
              Learn More
            </button>
            </a>   
          </div>
        </div>
      </section>
      <About/>
      <Events/>
      <ContactUs />
    </div>
  )
}

export default Economania
