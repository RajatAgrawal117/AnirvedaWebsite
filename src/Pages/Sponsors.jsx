import React from "react"
import Navbar from "../components/Navbar"
import ContactUs from "../components/ContactUs"
import About from "../components/Sponsors/About";
import PastSponsors from "../components/Sponsors/PastSponsors";
// import Policies from "../components/Sponsors/Policies";

const Sponsors = ()=>{
    return (
      <div className="bg-black font-Lato">
      <div className="flex h-[80vh] flex-col bg-black">
        <Navbar />
        <About/>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
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