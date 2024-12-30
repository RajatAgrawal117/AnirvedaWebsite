import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingScreen from "./LoadingScreen"; 

import HomePage from "./Pages/HomePage";
import Committee from "./Pages/Committee";
import Events from "./Pages/Events";
import Gallery from "./Pages/Gallery";
import DepartmentPage from "./Pages/DepartmentPage";
import Registration from "./Pages/Registration";
import Sponsors from "./Pages/Sponsors";

// Data of all the departments (shortened for clarity)
import emLogisticsHead from "./data/departments/emNlogistics/emLogisticsHead";
import emLogisticsCore from "./data/departments/emNlogistics/emLogisticsCore";
import dmHeads from "./data/departments/dm/dmHeads";
import dmCore from "./data/departments/dm/dmCore";


import ScrollToTop from "./ScrollToTop";
import { SituationProvider } from "./Context/SituationProvider";


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  const symbols = ['$', '€', '#', '</>', '¥', '&', '%', '&','💸','🚀','🌟','⚖️','💡','💹']; 
  const heading = "Hey World! This is ANIRVEDA"; //must be changed from LoadingScreen.jsx

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 3000); //time to change after which the loading page ends

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingScreen symbols={symbols} heading={heading} />
      ) : (
        <SituationProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/committee" element={<Committee />} />
              <Route path="/events" element={<Events />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route
                path="/em-logs"
                element={
                  <DepartmentPage
                    heading="Event Management & Creative"
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
            </Routes>
          </BrowserRouter>
        </SituationProvider>
      )}
    </div>
  );
};

export default App;
