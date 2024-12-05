import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-900 text-white min-h-screen">
      <div className="flex items-center justify-center p-4">
        <img src="/logo.png" alt="Logo" className="h-12" /> {/* Replace with your logo */}
      </div>
      <ul className="space-y-6">
        <li>
          <Link to="/" className="flex items-center p-4 hover:bg-blue-700 rounded-lg">
            <i className="fas fa-home"></i> {/* Replace with your icon */}
            <span className="ml-3">Trang chủ</span>
          </Link>
        </li>
        <li>
          <Link to="/quan-ly" className="flex items-center p-4 hover:bg-blue-700 rounded-lg">
            <i className="fas fa-cogs"></i>
            <span className="ml-3">Quản lý</span>
          </Link>
        </li>
        <li>
          <Link to="/in-tai-lieu" className="flex items-center p-4 hover:bg-blue-700 rounded-lg">
            <i className="fas fa-print"></i>
            <span className="ml-3">In tài liệu</span>
          </Link>
        </li>
        <li>
          <Link to="/lich-su-hoat-dong" className="flex items-center p-4 hover:bg-blue-700 rounded-lg">
            <i className="fas fa-history"></i>
            <span className="ml-3">Lịch sử hoạt động</span>
          </Link>
        </li>
        <li>
          <Link to="/mua-giay" className="flex items-center p-4 hover:bg-blue-700 rounded-lg">
            <i className="fas fa-shopping-cart"></i>
            <span className="ml-3">Mua giấy</span>
          </Link>
        </li>
        <li>
          <Link to="/trang-chu" className="flex items-center p-4 hover:bg-blue-700 rounded-lg">
            <i className="fas fa-home"></i>
            <span className="ml-3">Trang chủ</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
