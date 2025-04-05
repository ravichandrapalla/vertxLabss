import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/slices/activeTabSlice";

const TabNavigation = () => {
  const { activeTab } = useSelector((state) => state.activeTab);
  const dispatch = useDispatch();
  console.log("tab nav", activeTab);
  return (
    <div className="border-b border-gray-800">
      <div className="flex">
        {["Overview", "Reports", "Demographics"].map((tab) => (
          <button
            key={tab}
            className={`flex-1 py-4 ${
              activeTab === tab ? "border-b-2 border-white" : "text-gray-400"
            }`}
            onClick={() => {
              // setActiveTab(tab);

              dispatch(setActiveTab(tab));
              console.log("dispatching", tab);
            }}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;
