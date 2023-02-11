import React from "react"
import {HashRouter, Routes, Route} from "react-router-dom"

import HomePage from "./Pages/HomePage"
import Committee from "./Pages/Committee"
import Events from "./Pages/Events"
import Gallery from "./Pages/Gallery"
import DepartmentPage from "./Pages/DepartmentPage"

// Data of all the departments
import emHeads from "./data/departments/em/emHeads"
import emCore from "./data/departments/em/emCore"
import logisticsHead from "./data/departments/logistics/logisticsHead"
import logisticsCore from "./data/departments/logistics/logisticsCore"
import smHeads from "./data/departments/sm/smHeads"
import smCore from "./data/departments/sm/smCore"
import publicityHeads from "./data/departments/publicity/publicityHeads"
import cndHeads from "./data/departments/cnd/cndHeads"
import cndCore from "./data/departments/cnd/cndCore"
import techHeads from "./data/departments/tech/techHeads"
import techCore from "./data/departments/tech/techCore"
import veHeads from "./data/departments/ve/veHeads"
import gdHeads from "./data/departments/gd/gdHeads"
import sponsorshipHeads from "./data/departments/sponsorship/sponsorshipHeads"
import ScrollToTop from "./ScrollToTop"

export default function App() {
  return (
    <>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route
            path="/em"
            element={
              <DepartmentPage
                heading="Event Management"
                heads={emHeads}
                core={emCore}
              />
            }
          />
          <Route
            path="/logs"
            element={
              <DepartmentPage
                heading="Logistics"
                heads={logisticsHead}
                core={logisticsCore}
              />
            }
          />
          <Route
            path="/sm"
            element={
              <DepartmentPage
                heading="Social Media"
                heads={smHeads}
                core={smCore}
              />
            }
          />
          <Route
            path="/publicity"
            element={
              <DepartmentPage heading="Publicity" heads={publicityHeads} />
            }
          />
          <Route
            path="/cnd"
            element={
              <DepartmentPage
                heading="Content & Documentation"
                heads={cndHeads}
                core={cndCore}
              />
            }
          />
          <Route
            path="/tech"
            element={
              <DepartmentPage
                heading="Technical"
                heads={techHeads}
                core={techCore}
              />
            }
          />
          <Route
            path="/ve"
            element={<DepartmentPage heading="Video Editing" heads={veHeads} />}
          />
          <Route
            path="/gd"
            element={
              <DepartmentPage heading="Graphics Design" heads={gdHeads} />
            }
          />
          <Route
            path="/sponsorship"
            element={
              <DepartmentPage heading="Sponsorship" heads={sponsorshipHeads} />
            }
          />
        </Routes>
      </HashRouter>
    </>
  )
}
