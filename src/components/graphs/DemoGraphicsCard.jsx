import React, { useState } from "react";
import { IN, US, CA, AE } from "country-flag-icons/react/3x2";
import World from "../../../public/World.png";
import Dropdown from "../ui/Dropdown";

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

const DemographicsCard = ({
  demographicType,
  demographicOptions,
  mockData,
  demographicDropdownOpen,
  setDemographicDropdownOpen,
  setDemographicType,
}) => {
  // Sample data for the demographics
  const [showAllCountries, setShowAllCountries] = useState(false);
  const countries = [
    { name: "India", flag: "🇮🇳", percentage: 40, color: "bg-indigo-500" },
    { name: "USA", flag: "🇺🇸", percentage: 25, color: "bg-amber-500" },
    { name: "CANADA", flag: "🇨🇦", percentage: 10, color: "bg-amber-200" },
    { name: "UAE", flag: "🇦🇪", percentage: 7, color: "bg-emerald-500" },
  ];
  const currentData = mockData[demographicType]?.demographicsData || {};
  const allDemographics = Object.entries(currentData).map(
    ([country, percentage], index) => {
      // Define a set of colors for the bars
      const colors = [
        "bg-purple-600",
        "bg-orange-500",
        "bg-red-500",
        "bg-green-500",
        "bg-blue-500",
        "bg-yellow-500",
        "bg-pink-500",
        "bg-indigo-500",
      ];
      // Get corresponding flag emoji
      const flagEmojis = {
        India: "🇮🇳",
        USA: "🇺🇸",
        CANADA: "🇨🇦",
        UAE: "🇦🇪",
        UK: "🇬🇧",
        Australia: "🇦🇺",
        Germany: "🇩🇪",
        France: "🇫🇷",
      };

      return {
        country,
        percentage,
        color: colors[index % colors.length],
        flag: flagEmojis[country] || country.substring(0, 2),
      };
    }
  );
  const selectedOption =
    demographicOptions.find((opt) => opt.value === demographicType)?.label ||
    "Visitors";
  const displayDemographics = showAllCountries
    ? allDemographics
    : allDemographics.slice(0, 4);

  return (
    <div className="bg-black text-white p-6 rounded-xl w-full max-w-3xl md:max-w-full">
      <div className="relative md:flex ">
        <div className="flex justify-between items-center mb-6 md:flex-col md:items-start md:space-y-2 md:absolute md:top-[0%] md:z-50 md:left-0">
          <h2 className="text-2xl font-bold">Demographics</h2>
          <div className="relative">
            <Dropdown
              options={demographicOptions}
              selected={selectedOption}
              onChange={setDemographicType}
              isOpen={demographicDropdownOpen}
              onToggle={() =>
                setDemographicDropdownOpen(!demographicDropdownOpen)
              }
            />
          </div>
        </div>
        <div className="flex mb-4 md:w-[80%]  ">
          <div className="w-full h-full bg-dots ">
            <img src={World} alt="world map" />
          </div>
        </div>

        <div className="space-y-4  md:w-[50%] md:border-[#1D1D1D] md:border-b">
          {displayDemographics.map((country, index) => (
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

      <div className="hidden md:absolute md:z-50 md:bottom-14 md:flex space-x-2">
        {countries.map((country, index) => (
          <div
            key={index}
            className="flex items-center bg-black bg-opacity-40 border border-gray-700 rounded-full px-4 py-1"
          >
            <div className={`w-3 h-3 rounded-full ${country.color} mr-2`}></div>
            <span>{country.name}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-6 md:mt-3">
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
