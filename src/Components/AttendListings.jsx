import React from "react";
import data from "../Assets/Images/data.jpg";

export default function AttendListings() {
  return (
    <div>
      <div class="w-full flex flex-wrap">
        <div class="w-full md:w-1/2 p-4">
          <h2 class="text-lg font-semibold">
            AT DATA FOR BREAKFAST, YOU’LL LEARN HOW TO:
          </h2>
          <ul class="list-disc ml-6">
            <li>&nbsp;
              Unite your siloed data, and access governed and secure first-,
              second-, and third-party data for previously unimagined insights.
            </li>
             <li>&nbsp;
              Develop and run data applications, models, and pipelines where
              data lives.
            </li>
            <li>&nbsp;
              Work and collaborate seamlessly across multiple clouds no matter
              where data or your local and global business communities reside.
            </li>
            <li>&nbsp;
              Find new customers and increase revenue by offering data sets,
              data services, and applications in Snowflake Marketplace.
            </li>
          </ul>
        </div>

        <div class="w-full md:w-1/2 p-4">
          <img src={data} alt="Image" class="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}
