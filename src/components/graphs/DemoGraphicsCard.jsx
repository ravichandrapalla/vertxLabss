import React from "react";
import { IN, US, CA, AE } from "country-flag-icons/react/3x2";
import World from "../../../public/World.png";

const getFlag = (param) => {
  switch (param) {
    case "🇮🇳":
      return <IN title="India" className="w-8 h-8 rounded" />;
    case "🇺🇸":
      return <US title="United States" className="w-8 h-8 rounded" />;
    case "🇨🇦":
      return <CA title="Canada" className="w-8 h-8 rounded" />;
    case "🇦🇪":
      return <AE title="United Arab Emirates" className="w-8 h-8 rounded" />;
    default:
      // For other countries, return a generic flag representation
      return (
        <div className="w-8 h-6 bg-gray-600 rounded flex items-center justify-center">
          {param}
        </div>
      );
  }
};

const DemographicsCard = () => {
  // Sample data for the demographics
  const countries = [
    { name: "India", flag: "🇮🇳", percentage: 40, color: "bg-indigo-500" },
    { name: "USA", flag: "🇺🇸", percentage: 25, color: "bg-amber-500" },
    { name: "CANADA", flag: "🇨🇦", percentage: 10, color: "bg-amber-200" },
    { name: "UAE", flag: "🇦🇪", percentage: 7, color: "bg-emerald-500" },
  ];

  return (
    <div className="bg-black text-white p-6 rounded-xl w-full max-w-3xl">
      <div className="border-[#1D1D1D] border-b pb-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Demographics</h2>
          <div className="relative">
            <div className="bg-black bg-opacity-40 border border-gray-700 rounded-full px-4 py-1 flex items-center">
              <span className="mr-2">Visitors</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex mb-4">
          <div className="relative w-full h-40">
            {/* Placeholder for world map - replace with your actual map image */}
            <div className="absolute inset-0 ">
              {/* This represents the dotted world map */}
              <div className="w-full h-full bg-dots">
                <img src={World} alt="world map" />
              </div>
            </div>

            {/* Location markers */}
            {/* <div className="absolute top-1/4 left-1/3">
            <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
          </div>
          <div className="absolute top-1/3 left-1/5">
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
          </div>
          <div className="absolute top-1/4 left-1/5">
            <div className="w-3 h-3 rounded-full bg-amber-200"></div>
          </div>
          <div className="absolute top-1/3 left-2/5">
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
          </div> */}
          </div>
        </div>
        {/* <div className="flex space-x-2 mb-6">
        {countries.map((country, index) => (
          <div
            key={index}
            className="flex items-center bg-black bg-opacity-40 border border-gray-700 rounded-full px-4 py-1"
          >
            <div className={`w-3 h-3 rounded-full ${country.color} mr-2`}></div>
            <span>{country.name}</span>
          </div>
        ))}
      </div> */}
        <div className="space-y-4">
          {countries.map((country, index) => (
            <div key={index} className="flex items-center">
              <div className="w-12 h-8 border border-gray-700 rounded-md flex items-center justify-center mr-4">
                {getFlag(country.flag)}
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="font-bold">{country.name}</span>
                  <span>{country.percentage}%</span>
                </div>
                <div className="bg-gray-800 rounded-full h-2">
                  <div
                    className={`${country.color} rounded-full h-2`}
                    style={{ width: `${country.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button className="flex items-center text-sm text-gray-400 hover:text-white">
          <span className="mr-2">View all countries</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DemographicsCard;
