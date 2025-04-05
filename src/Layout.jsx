import React from 'react';
import { 
  RiLayoutGridLine, 
  RiLineChartLine, 
  RiGlobalLine, 
  RiNotification3Line, 
  RiTeamLine 
} from 'react-icons/ri';
import { MdOutlineDashboard } from "react-icons/md";
import { BsGlobeAmericas } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { TbTopologyStar3 } from "react-icons/tb";
import { Link, useLocation } from 'react-router';
import Header from './components/ui/Header';

const GlobalLayout = ({ children }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex flex-col h-screen w-screen bg-black text-white">
      {/* Header */}
     
      <Header />
      {/* Tab Navigation */}
      <div className="border-b border-gray-800">
        <div className="flex">
          <button className="flex-1 py-4 border-b-2 border-white font-medium">
            Overview
          </button>
          <button className="flex-1 py-4 text-gray-400">
            Reports
          </button>
          <button className="flex-1 py-4 text-gray-400">
            Demographics
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-around py-3 bg-black border-t border-gray-800">
        <Link to="/dashboard" className={`flex flex-col items-center ${isActive('/dashboard') ? 'text-white' : 'text-gray-500'}`}>
          <MdOutlineDashboard className="w-6 h-6" />
          <span className="text-xs mt-1">Dashboard</span>
        </Link>
        <Link to="/analytics" className={`flex flex-col items-center ${isActive('/analytics') ? 'text-white' : 'text-gray-500'}`}>
          <RiLineChartLine className="w-6 h-6" />
          <span className="text-xs mt-1">Analytics</span>
        </Link>
        <Link to="/connect" className={`flex flex-col items-center ${isActive('/connect') ? 'text-white' : 'text-gray-500'}`}>
          <BsGlobeAmericas className="w-6 h-6" />
          <span className="text-xs mt-1">Connect</span>
        </Link>
        <Link to="/activity" className={`flex flex-col items-center ${isActive('/activity') ? 'text-white' : 'text-gray-500'}`}>
          <BsBell className="w-6 h-6" />
          <span className="text-xs mt-1">Activity</span>
        </Link>
        <Link to="/dealroom" className={`flex flex-col items-center ${isActive('/dealroom') ? 'text-white' : 'text-gray-500'}`}>
          <TbTopologyStar3 className="w-6 h-6" />
          <span className="text-xs mt-1">Dealroom</span>
        </Link>
      </div>
    </div>
  );
};

export default GlobalLayout;