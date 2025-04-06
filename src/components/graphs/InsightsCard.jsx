import React from "react";
import Dropdown from "../ui/Dropdown";

const InsightsCard = ({
  insightType,
  insightOptions,
  mockData,
  insightDropdownOpen,
  setInsightDropdownOpen,
  setInsightType,
}) => {
  const selectedOption =
    insightOptions.find((opt) => opt.value === insightType)?.label ||
    "Visitors";

  // Get the current data
  const currentData = mockData[insightType];
  return (
    <div className="bg-black text-white pt-4 px-4 rounded-xl w-full h-full max-w-md">
      <div className="pb-2 border-[#1D1D1D] border-b">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg ">Insights</h2>
          <Dropdown
            options={insightOptions}
            selected={selectedOption}
            onChange={setInsightType}
            isOpen={insightDropdownOpen}
            onToggle={() => setInsightDropdownOpen(!insightDropdownOpen)}
            className="bg-[#080808] bg-opacity-40 border border-gray-700 rounded-full"
          />
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="text-sm text-gray-400 mb-1">Founders</div>
            <div className="flex items-end">
              <div className="text-2xl font-bold mr-2">
                {currentData?.insights?.founders.total || "7.4K"}
              </div>
              <div className="flex flex-col items-center">
                <span className="text-green-500 text-xs mb-1">
                  {currentData?.insights?.founders.growth || "+000%"}
                </span>
                <span className="text-gray-500 text-xs">
                  ({currentData?.insights?.founders.valueChange || "000"})
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="text-sm text-gray-400 mb-1">Investors</div>
            <div className="flex items-end">
              <div className="text-2xl font-bold mr-2">
                {currentData?.insights?.investors.total || "6.09K"}
              </div>
              <div className="flex flex-col items-center">
                <div className="text-green-500 text-xs mb-1">
                  {currentData?.insights?.investors.growth || "+000%"}
                </div>
                <div className="text-gray-500 text-xs">
                  ({currentData?.insights?.investors.valueChange || "000"})
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end p-3">
        <button className="flex items-center text-sm text-gray-400 hover:text-white">
          <span className="mr-2">View detailed insights</span>
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

export default InsightsCard;
