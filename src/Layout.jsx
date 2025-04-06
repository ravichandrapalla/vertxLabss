import React, { useState } from "react";

import { Link, useLocation } from "react-router";
import Header from "./components/ui/Header";
import TabNavigation from "./components/TabNavigation";
import BottomNavigation from "./components/BottomNavigation";
import { useDispatch, useSelector } from "react-redux";
import { store } from "./redux/store";
import Sidebar from "./components/Sidebar";
import TabsContainer from "./components/TabsContainer";

const GlobalLayout = ({ children }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [activeTab, setActiveTab] = useState("Overview");
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col h-screen w-screen bg-black text-white md:grid md:grid-cols-[18.75%_1fr] md:grid-rows-[6.39%_1fr]">
      {/* Header */}
      <div className="col-span-2">
        <Header />
      </div>

      {/* Tab Navigation */}
      <div className="md:hidden">
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className="hidden md:block md:h-[h-screen-50px] ">
        <Sidebar />
      </div>

      {/* Main Content */}

      <div className="flex-1 overflow-y-auto md:h-[100vh-100px] md:w-[100vw-240px]">
        {children}
      </div>

      {/* Bottom Navigation */}
      <div>
        <BottomNavigation isActive={isActive} />
      </div>
    </div>
  );
};

export default GlobalLayout;
