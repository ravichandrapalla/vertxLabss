import React from "react";
import { SlOptionsVertical } from "react-icons/sl";
import Logo from "../../../public/Logo.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-3 md:w-full md:border-[#1D1D1D] md:bg-[#000000] md:border-b  md:h-12.5">
      <div className="flex items-center md:hidden">
        <div className="w-7.5 h-7.5 rounded-full bg-gray-500 overflow-hidden">
          {/* User profile image placeholder */}
        </div>
      </div>
      <div className="flex items-center justify-center md:hidden">
        <div className="p-1 rounded-lg border border-gray-700">
          <div className="w-5 h-5 flex items-center justify-center">
            <div className="border-2 border-white w-3 h-3 rotate-45"></div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <button className="p-1">
          <SlOptionsVertical className="w-6 h-6" />
        </button>
      </div>
      <div className="hidden md:flex w-[18%] h-full items-center justify-around border-[#1D1D1D] border-r">
        <div className="flex items-center justify-center w-[30px]">
          <img src={Logo} width="30px" height="30px" alt="Logo" />
        </div>
        <div className="flex items-center w-[190px] justify-start ">
          <span className="text-white font-medium px-10">Vertxlabs, Inc</span>
        </div>
      </div>
      <div className="hidden md:flex flex-grow items-center justify-between">
        <div className="p-4">
          <p className="font-semibold text-white">Analytics</p>
        </div>
        <div className="flex w-60 items-center justify-center">
          <div className="flex items-center justify-center border-[#1D1D1D] border-l-1 w-1/2 p-4">
            <p className="font-medium text-white">Activity</p>
          </div>
          <div className="flex items-center justify-center border-[#1D1D1D] border-l-1 w-1/2 p-4">
            <p className="font-medium text-white">Logout</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
