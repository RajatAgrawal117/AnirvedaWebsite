import React from "react"
import Navbar from "../components/Navbar"
import ContactUs from "../components/ContactUs"
import About from "../components/Sponsors/About";
import PastSponsors from "../components/Sponsors/PastSponsors";
// import Policies from "../components/Sponsors/Policies";

const Sponsors = ()=>{
    return (
      <div className="bg-black font-Lato">
      <section>
        <Navbar />
        <About />
      </section>
      <section>
        <PastSponsors/>
      </section>
      {/* <section>
        <Policies/>
      </section> */}
      {/* Footer */}
      <ContactUs/>
    </div>
    );
}

export default Sponsors