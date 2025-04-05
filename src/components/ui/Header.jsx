import React from 'react';
import { SlOptionsVertical } from "react-icons/sl";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-3">
    <div className="flex items-center">
      <div className="w-7.5 h-7.5 rounded-full bg-gray-500 overflow-hidden">
        {/* User profile image placeholder */}
      </div>
    </div>
    <div className="flex items-center justify-center">
      <div className="p-1 rounded-lg border border-gray-700">
        <div className="w-5 h-5 flex items-center justify-center">
          <div className="border-2 border-white w-3 h-3 rotate-45"></div>
        </div>
      </div>
    </div>
    <div>
      <button className="p-1">
      <SlOptionsVertical className="w-6 h-6" />
      </button>
    </div>
  </header>
  )
}

export default Header