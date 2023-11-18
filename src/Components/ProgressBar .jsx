// ProgressBar.js
import React from "react";

const ProgressBar = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center justify-center mb-4 space-x-40">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex flex-col items-center relative"
        >
          <div
            className={`${
              step.number < currentStep
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-500"
            } rounded-full flex items-center justify-center h-12 w-12 z-10 relative`}
          >
            {step.number < currentStep ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              step.number
            )}
          </div>
          <p
            className={`top-16 text-center text-${
              step.number <= currentStep ? "blue-500" : "gray-500"
            }`}
          >
            {step.title}
          </p>
          {index < steps.length - 1 && (
            <div
              className={`h-1 w-60 bg-${
                step.number < currentStep ? "blue-500" : "gray-300"
              } absolute top-6 left-6`} 
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
