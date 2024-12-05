import React from 'react'
import Sidebar from "../components/SPSOsidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex-1 bg-gray-100">
        {/* Main Content */}
        {children}
      </div>
    </div>
  )
}

export default Layout