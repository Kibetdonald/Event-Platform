import React from "react";
import AttendListings from "../Components/AttendListings";
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
      <Navbar />
      <FirstSection />
      <div className="w-3/5 mx-auto">
        <EventSchedule />
        <AttendListings/>
      </div>
      <Countdown/>
      <Pricing />
      <EventLocation />
      <Footer />
    </div>
  );
}
