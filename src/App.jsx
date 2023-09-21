import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./Pages/HomePage"
import Committee from "./Pages/Committee"
import Events from "./Pages/Events"
import Gallery from "./Pages/Gallery"
import DepartmentPage from "./Pages/DepartmentPage"
import Registration from "./Pages/Registration"

// Data of all the departments
import emLogisticsHead from "./data/departments/emNlogistics/emLogisticsHead"
import emLogisticsCore from "./data/departments/emNlogistics/emLogisticsCore"
import dmHeads from "./data/departments/dm/dmHeads"
import dmCore from "./data/departments/dm/dmCore"
import prHeads from "./data/departments/pr/prHeads"
import prCore from "./data/departments/pr/prCore"
import cndHeads from "./data/departments/cnd/cndHeads"
import cndCore from "./data/departments/cnd/cndCore"
import techHeads from "./data/departments/tech/techHeads"
import techCore from "./data/departments/tech/techCore"
import veHeads from "./data/departments/ve/veHeads"
import gdHeads from "./data/departments/gd/gdHeads"
import gdCore from "./data/departments/gd/gdCore"
import sponsorshipHeads from "./data/departments/sponsorship/sponsorshipHeads"
import sponsorshipCore from "./data/departments/sponsorship/sponsorshipCore"

// Scroll to top
import ScrollToTop from "./ScrollToTop"

// Mock RBI
import Home from "./Pages/MockRBI/Home"
import Play from "./Pages/MockRBI/Play"
import Situations from "./Pages/MockRBI/Situations"
import Login from "./Pages/Admin/Login"
import { SituationProvider } from "./Context/SituationProvider"
// import SupplyDemandG from "./Pages/MockRBI/SupplyDemandG"
import CurrentSituation from "./Pages/MockRBI/CurrentSituation"
import Unauthorized from "./Pages/utils/Unauthorized"

export default function App() {
  return (
    <>
      <SituationProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/registration" element={<Registration />} />
            <Route
              path="/em-logs"
              element={
                <DepartmentPage
                  heading="Event Management & Logistics"
                  heads={emLogisticsHead}
                  core={emLogisticsCore}
                />
              }
            />
            <Route
              path="/dm"
              element={
                <DepartmentPage
                  heading="Digital Marketing"
                  heads={dmHeads}
                  core={dmCore}
                />
              }
            />
            <Route
              path="/pr"
              element={
                <DepartmentPage
                  heading="Public Relations"
                  heads={prHeads}
                  core={prCore}
                />
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
              path="/cr"
              element={<DepartmentPage heading="Creative" heads={veHeads} />}
            />
            <Route
              path="/gd"
              element={
                <DepartmentPage
                  heading="Graphics Design & Video Editing"
                  heads={gdHeads}
                  core={gdCore}
                />
              }
            />
            <Route
              path="/sponsorship"
              element={
                <DepartmentPage
                  heading="Sponsorship"
                  heads={sponsorshipHeads}
                  core={sponsorshipCore}
                />
              }
            />
            <Route path="/mockrbi" element={<Home />} />
            <Route path="/mockrbi/play" element={<Play />} />
            {/* <Route path="/mockrbi/supply" element={<SupplyDemandG />} /> */}
            <Route path="/mockrbi/admin/situations" element={<Situations />} />
            <Route path="/mockrbi/situation" element={<CurrentSituation />} />
            <Route
              path="/mockrbi/admin/login"
              element={<Login redirectTo="/mockrbi/situation" />}
            />
            <Route
              path="/admin/login"
              element={<Login redirectTo="/mockrbi/admin/situations" />}
            />
            {/* Utilty routes */}
            <Route path="/unauthorized" element={<Unauthorized />} />
          </Routes>
        </BrowserRouter>
      </SituationProvider>
    </>
  )
}
