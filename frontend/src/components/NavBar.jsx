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
  Bell,
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
    </nav>
  </header>
);

export default Navbar;
