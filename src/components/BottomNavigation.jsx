import React from "react";
import { Link } from "react-router";
import { MdOutlineDashboard } from "react-icons/md";
import { BsGlobeAmericas } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { TbTopologyStar3 } from "react-icons/tb";
import { RiLineChartLine } from "react-icons/ri";

const BottomNavigation = ({ isActive = true }) => {
  return (
    <div className="flex items-center justify-around py-3 bg-black border-t border-gray-800 md:hidden">
      <Link
        to="/dashboard"
        className={`flex flex-col items-center ${
          isActive("/dashboard") ? "text-white" : "text-gray-500"
        }`}
      >
        <MdOutlineDashboard className="w-6 h-6" />
        <span className="text-xs mt-1">Dashboard</span>
      </Link>
      <Link
        to="/analytics"
        className={`flex flex-col items-center ${
          isActive("/analytics") ? "text-white" : "text-gray-500"
        }`}
      >
        <RiLineChartLine className="w-6 h-6" />
        <span className="text-xs mt-1">Analytics</span>
      </Link>
      <Link
        to="/connect"
        className={`flex flex-col items-center ${
          isActive("/connect") ? "text-white" : "text-gray-500"
        }`}
      >
        <BsGlobeAmericas className="w-6 h-6" />
        <span className="text-xs mt-1">Connect</span>
      </Link>
      <Link
        to="/activity"
        className={`flex flex-col items-center ${
          isActive("/activity") ? "text-white" : "text-gray-500"
        }`}
      >
        <BsBell className="w-6 h-6" />
        <span className="text-xs mt-1">Activity</span>
      </Link>
      <Link
        to="/dealroom"
        className={`flex flex-col items-center ${
          isActive("/dealroom") ? "text-white" : "text-gray-500"
        }`}
      >
        <TbTopologyStar3 className="w-6 h-6" />
        <span className="text-xs mt-1">Dealroom</span>
      </Link>
    </div>
  );
};

export default BottomNavigation;
