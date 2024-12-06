import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, 
  FileSliders,
  Printer,
  FileClock
} from 'lucide-react';

const SidebarSPSO = () => {
  const location = useLocation(); // Get current location
  const navigate = useNavigate();

  const iconSize = 15
  const navItems = [
    { link: "Bảng điều khiển", path: "" , element: <LayoutDashboard size={iconSize}/>},
    { link: "Quản lý cấu hình", path: "config/", element: <FileSliders size={iconSize}/>},
    { link: "Máy in", path: "printer/" , element: <Printer size={iconSize}/>},
    { link: "Lịch sử hoạt động", path: "print-history/", element: <FileClock size={iconSize}/> },
  ];

  const [current, setCurrent] = useState("Bảng điều khiển");

  useEffect(() => {
    // Match the current path with navItems and set current
    const currentPath = location.pathname;
    const matchedItem = navItems.slice(1).find(item => currentPath.includes(item.path));
    if (matchedItem) {
      setCurrent(matchedItem.link); // Set current to the matched link
    }
  }, [location]); // Update current when location changes

  const handleNavigate = (link, path) => {
    setCurrent(link); // Set current to the clicked link
    navigate(path); // Navigate to the corresponding path
  };

  return (
    <div className="flex h-screen pt-[80px]">
      {/* Sidebar */}
      <nav className="p-4 overflow-y-auto">
        <ul>
          {navItems.map((nav, id) => (
            <li key={id} className={current === nav.link ? "bg-blue-50 text-blue-500" : "text-gray-500"}>
              <button
                onClick={() => handleNavigate(nav.link, nav.path)}
                className="w-full pl-4 pr-10 py-2 hover:bg-blue-50 hover:text-blue-500 flex items-center"
              >
                {nav.element}
                <p className="pl-2 text-left text-md font-semibold">{nav.link}</p>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default SidebarSPSO;
