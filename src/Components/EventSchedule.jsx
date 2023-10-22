import React, { useState } from "react";

const EventSchedule = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { day: "Day 1", date: "October 1, 2023" },
    { day: "Day 2", date: "October 2, 2023" },
    { day: "Day 3", date: "October 3, 2023" },
  ];

  const schedules = [
    {
      day: "Day 1",
      events: [
        { time: "09:00 AM", title: "Registration" },
        { time: "10:00 AM", title: "Opening Ceremony" },
        { time: "12:00 PM", title: "Keynote Speaker" }, 
      ],
    },
    {
      day: "Day 2",
      events: [
        { time: "09:30 AM", title: "Panel Discussion" },
        { time: "11:30 AM", title: "Breakout Sessions" },
        { time: "02:00 PM", title: "Networking Lunch" }, 
      ],
    },
    {
      day: "Day 3",
      events: [
        { time: "10:00 AM", title: "Workshops" },
        { time: "01:00 PM", title: "Closing Ceremony" }, 
      ],
    },
  ];

  return (
    <div className="w-full">
      <ul className="flex justify-center space-x-4 p-4">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`${
              activeTab === index + 1
                ? "text-white bg-blue-400"
                : "text-gray-700 bg-gray-200"
            } cursor-pointer rounded-lg py-2 px-4 hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out`}
            onClick={() => setActiveTab(index + 1)}
          >
            {tab.day}
          </li>
        ))}
      </ul>

      <div className="p-4">
        <h2 className="text-3xl font-semibold text-center">
          {tabs[activeTab - 1].day} - {tabs[activeTab - 1].date}
        </h2>
        <div className="mt-4">
          {schedules[activeTab - 1].events.map((event, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 my-2 hover:shadow-md transition duration-300 ease-in-out"
            >
              <div className="text-xl font-semibold">{event.time}</div>
              <div>{event.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventSchedule;
