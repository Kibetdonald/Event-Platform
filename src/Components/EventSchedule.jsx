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
        {
          time: "09:00 AM - 11:00 AM",
          title: "Morning Session",
        },
        {
          time: "11:30 AM - 01:00 PM",
          title: "Afternoon Session",
          subEvents: [
            {
              title: "Registration",
              responsiblePerson: "John Doe",
              profilePicture: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
            },
            {
              title: "Welcome Speech",
              responsiblePerson: "Jane Smith",
              profilePicture: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
            },
          ],
        },
        // Other events for Day 1
      ],
    },
    {
      day: "Day 2",
      events: [
        {
          time: "09:30 AM - 11:30 AM",
          title: "Discussion Panel",
          subEvents: [
            {
              title: "Panel Discussion",
              responsiblePerson: "David Johnson",
              profilePicture: "https://www.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1914527185.jpg",
            },
            // Add more sub-events as needed
          ],
        },
        // Other events for Day 2
      ],
    },
    {
      day: "Day 3",
      events: [
        {
          time: "10:00 AM - 01:00 PM",
          title: "Workshops",
          subEvents: [
            {
              title: "Workshop 1",
              responsiblePerson: "Sara Brown",
              profilePicture: "https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png",
            },
            // Add more sub-events as needed
          ],
        },
        // Other events for Day 3
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
              <div className="text-xl font-semibold">{event.title}</div>
              <div>{event.time}</div>
              {event.subEvents && (
                <div className="mt-2 flex">
                  {event.subEvents.map((subEvent, subIndex) => (
                    <div
                      key={subIndex}
                      className="border border-gray-300 rounded-lg p-4 my-2 hover:shadow-md transition duration-300 ease-in-out mx-2 flex items-center"
                    >
                      {/* <div>
                        <img
                          src={subEvent.profilePicture}
                          alt={subEvent.responsiblePerson}
                          className="w-16 h-16 rounded-full mr-2"
                        />
                      </div> */}
                      <div>
                        <div>{subEvent.title}</div>
                        <div>Responsible: {subEvent.responsiblePerson}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventSchedule;