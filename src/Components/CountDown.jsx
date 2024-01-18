import React, { useState, useEffect } from "react";

const Countdown = () => {
  const targetDate = new Date("2023-12-05T00:00:00");

  const calculateTimeLeft = () => {
    // Check if targetDate is not valid
    if (!targetDate || isNaN(targetDate.getTime())) {
      console.error("Invalid targetDate format");
      return null;
    }

    const difference = targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="bg-blue-400 p-12 text-white flex">
      <div className="ml-20">
        <h2 className="text-3lg font-semibold">Event Date</h2>
        <span className="text-sm">Count Every Second Until the Event</span>
      </div>
      <div className="flex items-center justify-center w-100 ml-20">
        <div className="flex">
        <div className="w-32 h-24 p-2 border border-gray-300 rounded shadow-lg m-1 flex items-center justify-center">
            <h3 className="text-3xl">
              {timeLeft.days}
              <br/>
              <span className="text-sm">Days</span>
            </h3>
          </div>
          <div className="w-32 h-24 p-2 border border-gray-300 rounded shadow-lg m-1 flex items-center justify-center">
            <h3 className="text-3xl">
              {timeLeft.hours}
              <br/>
              <span className="text-sm">Hrs</span>
            </h3>
          </div>
          <div className="w-32 h-24 p-2 border border-gray-300 rounded shadow-lg m-1 flex items-center justify-center">
            <h3 className="text-3xl">
              {timeLeft.minutes}
              <br/>
              <span className="text-sm">Min</span>
            </h3>
          </div>
          <div className="w-32 h-24 p-2 border border-gray-300 rounded shadow-lg m-1 flex items-center justify-center">
            <h3 className="text-3xl">
              {timeLeft.seconds}
              <br/>
              <span className="text-sm">Sec</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
