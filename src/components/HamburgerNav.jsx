import React, {useState} from "react"
import {Icon} from "@iconify/react"

export default function HamburgerNav() {
  const [isOpen, setIsOpen] = useState(false)

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="pt-3">
      {/* Top Bar */}
      <div className="flex items-center px-5 justify-between">
        <div>
          <img src="./images/logo.webp" alt="Anirveda Logo" className="w-1/4" />
        </div>
        <div className="cursor-pointer">
          <Icon
            icon="charm:menu-hamburger"
            color={"#B69575"}
            className="text-4xl"
            onClick={handleHamburgerClick}
          />
        </div>
      </div>

      {/* Hamburger bar items */}
      <div className={`text-secondary font-Lato absolute z-10 top-0 w-full h-full bg-secondary-opacity px-5 pt-3 transition-transform duration-300 ease-in  ${isOpen ? "translate-x-0": "translate-x-[-100%]"} `}>
        {/* Top Bar */}
        <div className="flex items-center">
          <div>
            <img
              src="./images/logo_white.webp"
              alt="Anirveda Logo"
              className="w-1/4"
            />
          </div>
          <div className="cursor-pointer">
            <Icon
              icon="akar-icons:cross"
              color={"#B69575"}
              className="text-4xl"
              onClick={handleHamburgerClick}
            />
          </div>
        </div>

        <div className="text-2xl mt-4 space-y-3 text-center">
          <h1 className="cursor-pointer">Home</h1>
          <h1 className="cursor-pointer">About</h1>
          <h1 className="cursor-pointer">Events</h1>
          <h1 className="cursor-pointer">Gallery</h1>
          <h1 className="cursor-pointer">Committee</h1>
          <h1 className="cursor-pointer">Contact</h1>
        </div>
      </div>
    </div>
  )
}
