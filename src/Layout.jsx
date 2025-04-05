import React, { useState } from "react";

import { Link, useLocation } from "react-router";
import Header from "./components/ui/Header";
import TabNavigation from "./components/TabNavigation";
import BottomNavigation from "./components/BottomNavigation";
import { useDispatch, useSelector } from "react-redux";
import { store } from "./redux/store";

const GlobalLayout = ({ children }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [activeTab, setActiveTab] = useState("Overview");
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col h-screen w-screen bg-black text-white">
      {/* Header */}

      <Header />
      {/* Tab Navigation */}
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">{children}</div>

      {/* Bottom Navigation */}
      <BottomNavigation isActive={isActive} />
    </div>
  );
};

export default GlobalLayout;
