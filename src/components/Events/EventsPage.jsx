import React from "react";
import PastEventsCards from "./PastEventCards";
import UpcomingEventCards from "./UpcomingEventCards";
import Timeline from "./Timeline";

export default function EventsPage() {
  const events = [
    { name: "Data Science Seminar", date: "Oct 5, 2023", type: "past" },
    { name: "Hackathon 2023", date: "Nov 20, 2023", type: "past" },
    { name: "Tech Symposium", date: "Jan 15, 2025", type: "upcoming" },
    { name: "Jan Event", date: "Feb 10, 2025", type: "upcoming" },                                  
    { name: "Jan Event", date: "Feb 10, 2025", type: "upcoming" },                                  
    { name: "Economania", date: "Feb 10, 2025", type: "upcoming" },                                  
    { name: "Economania", date: "Feb 10, 2025", type: "upcoming" },                                  
    { name: "Economania", date: "Feb 10, 2025", type: "upcoming" },                                  
    { name: "AI Workshop", date: "Feb 10, 2025", type: "upcoming" },                                  
    { name: "AI Workshop", date: "Feb 10, 2025", type: "upcoming" },                                  
                               
  ];

  return (
    <section>
      <div className="container mx-auto px-5 py-16 sm:py-20">
        <div className="bg-gradient-to-br from-black via-black to-black py-16 rounded-2xl">
          <h2 className="mb-8 text-center font-Bebas text-4xl font-medium text-primary">
            Events Timeline
          </h2>
          <Timeline events={events} />
        </div>
        <br/>
        <div className="mb-12 flex w-full flex-wrap">
          <div className="mb-6 w-full lg:mb-0 lg:w-1/2 2xl:pl-4">
            <h1 className="mb-2 font-Bebas text-4xl font-medium text-primary sm:text-5xl ">
              Our Upcoming Events
            </h1>
            <div className="h-1 w-20 rounded bg-primary"></div>
          </div>
        </div>
        <UpcomingEventCards />
      </div>
      <div className="container mx-auto px-5 pb-12">
        <div className="mb-20 flex w-full flex-wrap">
          <div className="mb-6 w-full lg:mb-0 lg:w-1/2 2xl:pl-4">
            <h1 className="mb-2 font-Bebas text-4xl font-medium text-primary sm:text-5xl ">
              Our Past Events
            </h1>
            <div className="h-1 w-20 rounded bg-primary"></div>
          </div>
        </div>
        <PastEventsCards />
      </div>
    </section>
  );
}
