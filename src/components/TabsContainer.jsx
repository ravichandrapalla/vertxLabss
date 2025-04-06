import React from "react";

const TabsContainer = ({ activeTab, setActiveTab }) => {
  return (
    <section className="  w-full text-white h-18.5 flex justify-around md:justify-between items-center md:border-b border-[#1D1D1D] bg-[#000000] overflow-hidden">
      {/* Left Tabs */}
      <div className=" flex items-center text-white font-semibold text-xs md:text-[#555555]">
        {["Overview", "Reports", "Demographics"].map((tab) => {
          const isActive = activeTab === tab;

          return (
            <div
              key={tab}
              className={`${
                tab === "Reports" && "md:hidden"
              } w-28 flex items-center justify-center p-4 md:border-r border-[#1D1D1D] cursor-pointer
            ${isActive ? "md:text-white" : ""}
            ${isActive ? "border-b-2 border-b-white md:border-b-0" : ""}
          `}
              onClick={() => setActiveTab(tab)}
            >
              <p>{tab}</p>
            </div>
          );
        })}
      </div>

      {/* Right Tab */}
      <div className="hidden md:flex items-center justify-center md:border-l border-[#1D1D1D] w-30">
        <div
          className={`flex items-center justify-center p-4 cursor-pointer
        ${activeTab === "More" ? "md:text-white" : ""}
        ${activeTab === "More" ? "border-b-2 border-b-white md:border-b-0" : ""}
      `}
          onClick={() => setActiveTab("More")}
        >
          <p>More</p>
        </div>
      </div>
    </section>
  );
};

export default TabsContainer;
