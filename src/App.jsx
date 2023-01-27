import { Routes, Route } from "react-router-dom"
import Committee from "./Pages/Committee"
import Events from "./Pages/Events"
import Gallery from "./Pages/Gallery"
import HomePage from "./Pages/HomePage"
import Department from "./Pages/Department"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/department" element={<Department />} />
      </Routes> 
    </div>
  )
}

export default App
