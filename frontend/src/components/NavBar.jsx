import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logoBK.png";
import {
  Menu,
  X,
  ShoppingCart,
  User,
  LogOut,
  MessageCircle, 
  Bell
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  const userInfo = { username: "customer" };
  const isAuthenticated = true;
  const isCustomer = true;

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/signin");
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navItems = [
    { link: "Trang chủ", path: isAuthenticated ? `/${userInfo.username}/` : "/" },
    // { link: "Cửa hàng", path: isAuthenticated ? `/${userInfo.username}/shop` : "/shop" },
    { link: "In tài liệu", path: "/docs" },
    { link: "Lịch sử hoạt động", path: "/history" },
    { link: "Mua giấy", path: "/buy-paper" },
  ];
    return (
      <div className="w-full h-[80px] px-4 md:px-8 bg-white shadow border-b border-neutral-100 flex items-center justify-between">
        {/* Logo Section */}
      <div className="flex items-center">
        <img className="w-[60px] h-[60px]" src={logo} alt="Logo" />
      </div>

      {/* Navigation Links Section */}
      <div className="flex gap-10 flex-1 justify-start items-center">
        <div className="flex gap-6">
          {navItems.map(({ link, path }) => (
            <button
              key={path}
              onClick={() => navigate(path)}
              className="text-center text-lg text-[#737375] font-medium hover:text-blue-600 transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
      </div>
  
        {/* User Info Section */}
        <div className="flex items-center gap-4">
          {/* Message Icon */}
          <div className="w-6 h-6 bg-neutral-50 rounded-full flex justify-center items-center hover:bg-blue-100 transition-colors">
            <MessageCircle className="h-5 w-5 text-gray-600 hover:text-blue-600" />
          </div>
  
          {/* Bell Icon */}
          <div className="w-6 h-6 bg-neutral-50 rounded-full flex justify-center items-center hover:bg-blue-100 transition-colors">
            <Bell className="h-5 w-5 text-gray-600 hover:text-blue-600" />
          </div>
  
          {/* User Name */}
          <div className="text-[#737375] text-lg font-medium font-['Inter'] hover:text-blue-600 transition-colors">
            Trần Văn A
          </div>
  
          {/* Avatar and Notification Badge */}
          <div className="w-10 h-10 relative">
            <img
              className="w-10 h-10 rounded-full"
              src="https://via.placeholder.com/48x48"
              alt="User Avatar"
            />
            <div className="w-3 h-3 bg-[#1ecb4f] absolute top-[28px] right-[25px] rounded-full border-2 border-white" />
          </div>
  
          {/* Log Out Icon */}
          <button
            onClick={() => alert("Log Out")}
            className="w-6 h-6 bg-neutral-50 rounded-full flex justify-center items-center hover:bg-blue-100 transition-colors"
          >
            <LogOut className="h-5 w-5 text-gray-600 hover:text-blue-600" />
          </button>
        </div>
  
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
  
        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="bg-white shadow-lg p-4 space-y-4">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-gray-600 font-medium hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Trang chủ
              </Link>
              <Link
                to="/docs"
                className="text-gray-600 font-medium hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                In tài liệu
              </Link>
              <Link
                to="/history"
                className="text-gray-600 font-medium hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                  Lịch sử hoạt động
              </Link>
              <Link
                to="/buy-paper"
                className="text-gray-600 font-medium hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Mua giấy
              </Link>
            </div>
  
            {/* Mobile User Info */}
            <div className="flex items-center gap-4">
              <div className="text-gray-600 text-lg font-medium">Trần Văn A</div>
              <div className="relative">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://via.placeholder.com/48x48"
                  alt="User Avatar"
                />
                <div className="w-4 h-4 bg-[#1ecb4f] absolute top-[32px] right-[30px] rounded-full border-2 border-white" />
              </div>
              {/* Log Out Icon */}
              <button
                onClick={() => alert("Log Out")}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default Navbar;