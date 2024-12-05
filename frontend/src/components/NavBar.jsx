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
  // return (
  //   <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  //     <div className="shrink-0">
  //       <svg
  //         className="h-12 w-12 text-purple-500"
  //         xmlns="http://www.w3.org/2000/svg"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //         stroke="currentColor"
  //       >
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           strokeWidth={2}
  //           d="M13 10V3L4 14h7v7l9-11h-7z"
  //         />
  //       </svg>
  //     </div>
  //     <div>
  //       <div className="text-xl font-medium text-black">Tailwind Test</div>
  //       <p className="text-gray-500">Responsive design check</p>
  //       <div className="mt-4">
  //         <button className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors duration-300">
  //           Click Me
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );
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
      // Adjust the navbar's style based on scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [  
    { link: "Trang chủ", path: isAuthenticated ? `/${userInfo.username}/` : "/" },
    { link: "Cửa hàng", path: isAuthenticated ? `/${userInfo.username}/shop` : "/shop" },
    { link: "In tài liệu", path: "/docs" },
    { link: "Lịch sử hoạt động", path: "/history" },
    { link: "Mua giấy", path: "/buy-paper" },
  ];
    return (
      <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1">
        <Link
          to="/signin"
          onClick={() => setShowMenuUsers(!showMenuUsers)}
          className="block px-4 py-2 text-lg text-gray-600 hover:bg-gray-200 mx-px"
        >
          Sign in
        </Link>
        <Link
          to="/signup"
          onClick={() => setShowMenuUsers(!showMenuUsers)}
          className="block px-4 py-2 text-lg text-gray-600 hover:bg-gray-200 mx-px"
        >
          Sign up
        </Link>
      </div>
    );
  };

  return (
    <header className="fixed bg-white w-full z-50">
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg backdrop-blur-sm bg-opacity-90"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/history"
              className="text-center text-lg text-[#737375] font-medium hover:text-blue-600 transition-colors"
            >
              Lịch sử hoạt động
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(({ link, path }) => (
                <Link
                  key={path}
                  to={path}
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors relative group"
                >
                  {link}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Link>
              ))}
            </div>

            {/* Right side icons */}
            <div className="hidden md:flex items-center space-x-6">
              {isCustomer && (
                <Link
                  to={`/${userInfo?.username}/cart`}
                  className="text-gray-600 hover:text-blue-600 transition-colors relative"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </Link>
              )}

              <div className="relative">
                <button
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-2"
                  onClick={() => setShowMenuUsers(!showMenuUsers)}
                >
                  <User className="h-5 w-5" />
                  {isAuthenticated && (
                    <span className="text-sm font-medium">
                      {userInfo?.username}
                    </span>
                  )}
                </button>

                {showMenuUsers && renderAuthenticatedMenu()}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
  
        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
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
            ))}
            <div className="flex items-center space-x-4 px-3 py-2">
              {isCustomer && (
                <Link
                  to={`/${userInfo?.username}/cart`}
                  className="text-gray-600 hover:text-blue-600 transition-colors relative"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ShoppingCart className="h-5 w-5" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </Link>
              )}
              {isAuthenticated ? (
                <>
                  <Link
                    to={`/${userInfo?.username}/${
                      isCustomer ? "customer" : "employee"
                    }-dashboard`}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="h-5 w-5" />
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <LogOut className="h-5 w-5" />
                  </button>
                </>
              ) : (
                <Link
                  to="/signin"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-5 w-5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default Navbar;