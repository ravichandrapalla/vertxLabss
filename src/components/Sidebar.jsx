// components/Sidebar.tsx
import { BiPlus } from "react-icons/bi";
import Profile from "../../public/Profile.png"; // Adjust the path as necessary
const menuItems = [
  { name: "Dashboard" },
  { name: "Analytics" },
  { name: "Connect" },
  { name: "Dealroom" },
  { name: "Profile" },
  { name: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:h-full border-[#1D1D1D] border-r">
      <div className="w-12.5 flex flex-col justify-between border-[#1D1D1D] border-r">
        <div className="border-[#1D1D1D] border-b w-12.5 h-12.5 flex items-center justify-center">
          <img alt="profile pic" src={Profile} width={30} height={30} />
        </div>
        <div className="border-[#1D1D1D] border-t-1 p-2 w-12.5 h-12.5">
          <BiPlus size={30} color="white" />
        </div>
      </div>
      <div className="flex flex-col p-2.5">
        <ul className="flex flex-col px-4 space-y-3 text-white">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-3 cursor-pointer p-2 hover:bg-gray-800 rounded-lg"
            >
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
