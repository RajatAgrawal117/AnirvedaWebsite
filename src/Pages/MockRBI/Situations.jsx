import React, {useEffect} from "react"
import {useLocation, useNavigate} from "react-router-dom"

import Navbar from "../../components/MockRBI/Navbar"
import AllSituations from "../../components/MockRBI/AllSituations"

// This page will have access to only Anirveda
export default function Situations() {
  const location = useLocation()
  const navigate = useNavigate()

  const isAuthenticated = location.state
    ? location.state.isAuthenticated
    : false

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/admin/login")
    }
  }, [])

  return (
    <div className={`h-screen bg-black px-10 py-8 font-Lato`}>
      <Navbar />

      <div className="mt-8 px-5">
        <h1 className="text-center text-4xl font-semibold text-primary">
          Situations
        </h1>
        <AllSituations />
      </div>
    </div>
  )
}
