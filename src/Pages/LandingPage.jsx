import React from "react";
import Countdown from "../Components/CountDown";
import EventLocation from "../Components/EventLocation";
import EventSchedule from "../Components/EventSchedule";
import FirstSection from "../Components/FirstSection";
import Footer from "../Components/Footer";
import Navbar from "../Components/NavBar";
import Pricing from "../Components/Pricing";

export default function LandingPage() {
  const placeholderTargetDate = new Date("2023-12-05T00:00:00");
  return (
    <div>
      {/* <div className="bg-blue-500 h-400 relative"> */}
        <Navbar />
        <FirstSection />
      {/* </div> */}

     
      <div className="w-3/5 mx-auto">
        <EventSchedule />
      </div>
       {/* <div className="w-4/5 mx-auto"> */}
       <Countdown targetDate={placeholderTargetDate.toISOString()} />
      {/* </div> */}
      <Pricing />
      <EventLocation />
      <Footer />
    </div>
  );
}
