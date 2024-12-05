import React from 'react';
import { Link, Outlet,useNavigate } from 'react-router-dom';

const SidebarSPSO = () => {
    const navigate = useNavigate();
    const navItems = [
      { link: "Dashboard", path: `` },
      { link: "Config", path: `config/` },
      { link: "Layout", path: `layout/` },
      { link: "Printer", path: `printer/` },
      { link: "PrintHistory", path: `print-history/` },
    ];
  return (
    <div className="flex h-screen pt-20">
      {/* Sidebar */}
      <nav className="w-64 bg-gray-100 p-4 overflow-y-auto">
      <ul className="space-y-4">
        {navItems.map(({ link, path }) => (
          <li key={path}>
            <button
              onClick={() => navigate(path)}
              className="w-full text-left px-4 py-2 text-gray-700 text-lg font-medium rounded hover:bg-blue-500 hover:text-white transition-colors"
            >
              {link}
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