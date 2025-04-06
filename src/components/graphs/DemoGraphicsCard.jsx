import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { IN, US, CA, AE } from "country-flag-icons/react/3x2";
// import World from "../../assets/World.png";
import Legend from "../ui/Legend";
import Dropdown from "../ui/Dropdown";

// Extended demographics data
const allDemographics = [
  { country: "India", percentage: 40, color: "bg-purple-600", flag: "🇮🇳" },
  { country: "USA", percentage: 25, color: "bg-orange-500", flag: "🇺🇸" },
  { country: "CANADA", percentage: 10, color: "bg-red-500", flag: "🇨🇦" },
  { country: "UAE", percentage: 7, color: "bg-green-500", flag: "🇦🇪" },
  { country: "UK", percentage: 5, color: "bg-blue-500", flag: "🇬🇧" },
  { country: "Australia", percentage: 4, color: "bg-yellow-500", flag: "🇦🇺" },
  { country: "Germany", percentage: 3, color: "bg-pink-500", flag: "🇩🇪" },
  { country: "France", percentage: 2, color: "bg-indigo-500", flag: "🇫🇷" },
];

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

const DemoGraphics = () => {
  const [visitorType, setVisitorType] = useState("Visitors");
  const [showAllCountries, setShowAllCountries] = useState(false);

  // Display top 4 countries or all countries based on showAllCountries
  const displayDemographics = showAllCountries
    ? allDemographics
    : allDemographics.slice(0, 4);

  const dropdownOptions = {
    visitors: ["Visitors", "Connections", "Interactions", "Impressions"],
  };

  return (
    <div className="p-4 flex flex-col min-h-[calc(100vh-145px)] md:col-span-2 md:flex-row items-center justify-between gap-5 bg-black rounded-xl overflow-hidden">
      {/* World Map Section */}
      <div className="md:w-[66.5%]  flex flex-col bg-[#000000] rounded-lg items-start justify-start">
        <div className="m-6 flex flex-col items-start gap-4 w-full ">
          <p className="text-xl font-semibold">Demographics</p>
          <Dropdown
            options={dropdownOptions.visitors}
            selected={visitorType}
            setSelected={setVisitorType}
          />
        </div>
        <img
          src={World}
          alt="World Map"
          className="w-full h-full px-6 rounded-lg"
        />
        <Legend />
      </div>

      {/* Country Data */}
      <div className="w-full md:w-[32.5%] flex flex-col flex-grow p-4 ">
        <div className="flex flex-col border-[#1D1D1D] border-b-1 pb-2 max-h-64 overflow-y-auto">
          {displayDemographics.map(({ country, percentage, color, flag }) => (
            <div
              key={country}
              className="flex items-center justify-between w-full mb-3 gap-2"
            >
              <div className="">{getFlag(flag)}</div>
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <span className="flex items-center space-x-2">
                    <span>{country}</span>
                  </span>
                  <span className="text-sm">{percentage}%</span>
                </div>
                <div className="bg-gray-700 h-2 rounded-md mt-1">
                  <div
                    className={`${color} h-2 rounded-md`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-end">
          <button
            className="mt-2 flex items-center justify-end space-x-2 text-blue-400 "
            onClick={() => setShowAllCountries(!showAllCountries)}
          >
            <div className="flex items-center space-x-6">
              <span>
                {showAllCountries ? "Show less" : "View all countries"}
              </span>
              <FaArrowRight />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DemoGraphics;
