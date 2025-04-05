import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const InsightsCard = ({ visitorType = "Visitors", data = {} }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Default data if none provided
  const defaultData = {
    founders: {
      count: "7.4K",
      increase: "+000%",
      raw: "(000)",
    },
    investors: {
      count: "6.09K",
      increase: "+000%",
      raw: "(000)",
    },
  };

  const cardData = Object.keys(data).length > 0 ? data : defaultData;

  return (
    <div className="bg-black rounded-xl p-4 text-white mb-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Insights</h2>
        <div>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-zinc-900 text-white py-2 px-4 rounded-full flex items-center justify-between"
          >
            {visitorType}
            <IoMdArrowDropdown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsightsCard;
