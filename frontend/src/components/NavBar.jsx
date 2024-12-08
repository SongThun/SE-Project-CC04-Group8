import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logoBK.png";
import { Menu, X, MessageCircle, Bell, User, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  // State management
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMessageSidebarOpen, setIsMessageSidebarOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);
  const { userInfo, isAuthenticated, logout, isSPSO } = useAuth();
  const [selectedChat, setSelectedChat] = useState(null);
  const [messageInput, setMessageInput] = useState('');

  const navigate = useNavigate();

  // Mock chat data
  const mockChats = [
    {
      id: 1,
      sender: 'Trương Tuấn Anh',
      lastMessage: 'Chào bạn, bạn cần giúp gì không?',
      time: '10 mins ago',
      messages: [
        { id: 1, sender: 'Trương Tuấn Anh', text: 'Chào bạn, bạn cần giúp gì không?', time: '10:15 AM', isSent: false },
        { id: 2, sender: 'You', text: 'Xin chào, cảm ơn bạn', time: '10:16 AM', isSent: true },
        { id: 3, sender: 'Trương Tuấn Anh', text: 'Tôi có thể hỗ trợ gì cho bạn?', time: '10:17 AM', isSent: false }
      ]
    },
    {
      id: 2,
      sender: 'Nguyễn Văn A',
      lastMessage: 'Báo cáo đã sẵn sàng',
      time: '1 hour ago',
      messages: [
        { id: 1, sender: 'Nguyễn Văn A', text: 'Báo cáo đã sẵn sàng', time: '9:45 AM', isSent: false },
        { id: 2, sender: 'You', text: 'Cảm ơn bạn', time: '9:46 AM', isSent: true }
      ]
    }
  ];

  // Handle sending messages
  const handleSendMessage = () => {
    if (messageInput.trim() === '') return;

    if (selectedChat) {
      selectedChat.messages.push({
        id: selectedChat.messages.length + 1,
        sender: 'You',
        text: messageInput,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isSent: true
      });
      setMessageInput('');
      setSelectedChat({ ...selectedChat }); // Trigger re-render
    }
  };

  // Handle user logout
  const handleLogout = () => {
    logout();
    navigate("/");
    setIsMenuOpen(false);
  };

  // Scroll effect to change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items based on authentication and user role
  const navItems = [
    { link: "Trang chủ", path: isAuthenticated ? `/${userInfo.username}` : "/" },
    ...(isSPSO ? [{ link: "Quản lý", path: `/${userInfo.username}/spso` }] : []),
    { link: "In tài liệu", path: `/${userInfo.username}/select-printer` },
    { link: "Lịch sử hoạt động", path: `/${userInfo.username}/history` },
    { link: "Mua giấy", path: `/${userInfo.username}/PaperPurchase` },
  ];

  return (
    <header className={`fixed w-full z-50 ${isScrolled ? 'bg-gray-100 shadow-md' : 'bg-white shadow'} transition-all duration-300`}>
      <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-100">
        {/* Logo */}
        <div className="flex items-center gap-7">
        <img className="w-[60px] h-[60px]" src={logo} alt="Logo" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className="text-lg text-[#737375] font-medium hover:text-blue-600 transition-colors"
            >
              {link}
            </Link>
          ))}
        </nav>
        </div>
        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          {/* Message Icon */}
          <div 
            className="relative cursor-pointer hover:bg-gray-100 p-2 rounded-full"
            onClick={() => setIsMessageSidebarOpen(!isMessageSidebarOpen)}
          >
            <MessageCircle className="h-6 w-6 text-gray-600" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">{mockChats.length}</span>
          </div>

          {/* Notification Icon */}
          <div 
            className="relative cursor-pointer hover:bg-gray-100 p-2 rounded-full"
            onClick={() => setIsNotificationDropdownOpen(!isNotificationDropdownOpen)}
          >
            <Bell className="h-6 w-6 text-gray-600" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
          </div>

          {/* User Info */}
          <div className="relative flex items-center">
            <User className="h-8 w-8 text-gray-600 bg-gray-200 rounded-full p-1" />
            <span className="ml-2 text-[#737375] text-lg font-medium hover:text-blue-600 transition-colors">
              {userInfo.name}
            </span>
          </div>

          {/* User Avatar
          <div className="w-10 h-10 relative">
            <img
              className="w-10 h-10 rounded-full"
              src="https://via.placeholder.com/48x48"
              alt="User Avatar"
            />
            <div className="w-3 h-3 bg-[#1ecb4f] absolute top-[28px] right-[25px] rounded-full border-2 border-white" />
          </div> */}

          {/* Log Out Icon */}
          <button
            onClick={handleLogout}
            className="w-6 h-6 bg-neutral-50 rounded-full flex justify-center items-center hover:bg-blue-100 transition-colors"
          >
            <LogOut className="h-5 w-5 text-gray-600 hover:text-blue-600" />
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <div className="flex flex-col px-4 py-2">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg text-[#737375] font-medium hover:text-blue-600 transition-colors py-2"
              >
                {link}
              </Link>
            ))}
          </div>
        </nav>
      )}

      {/* Message Sidebar */}
      {isMessageSidebarOpen && (
        <div className="fixed top-0 right-0 w-96 h-full bg-white shadow-lg z-60 flex flex-col">
          <div className="p-4 flex justify-between items-center border-b">
            <h2 className="text-xl font-semibold text-gray-800">
              {selectedChat ? selectedChat.sender : 'Tin nhắn'}
            </h2>
            <button
              onClick={() => {
                selectedChat ? setSelectedChat(null) : setIsMessageSidebarOpen(false);
              }}
              className="hover:bg-gray-100 p-2 rounded-full"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {!selectedChat ? (
            <div className="overflow-y-auto p-4">
              {mockChats.map(chat => (
                <div 
                  key={chat.id} 
                  className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                  onClick={() => setSelectedChat(chat)}
                >
                  <User className="h-10 w-10 text-gray-600 bg-gray-200 rounded-full p-1" />
                  <div>
                    <p className="text-lg font-medium text-gray-800">{chat.sender}</p>
                    <p className="text-sm text-gray-500">{chat.lastMessage}</p>
                    <p className="text-xs text-gray-400">{chat.time}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto p-4">
              {selectedChat.messages.map(message => (
                <div 
                  key={message.id} 
                  className={`flex items-center space-x-3 mb-2 ${message.isSent ? 'justify-end' : 'justify-start'}`}
                >
                  {!message.isSent && (
                    <User className="h-6 w-6 text-gray-600 bg-gray-200 rounded-full p-1" />
                  )}
                  <div className={`max-w-xs text-left p-2 rounded-lg ${message.isSent ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'}`}>
                    <p>{message.text}</p>
                    <span className="text-xs text-gray-400">{message.time}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {selectedChat && (
            <div className="border-t p-3">
              <div className="flex">
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  className="flex-1 p-2 rounded-lg border-2 border-gray-300"
                  placeholder="Type a message..."
                />
                <button 
                  onClick={handleSendMessage}
                  className="text-blue-500 ml-2 p-2"
                >
                  Gửi
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      
      {/* Notification Dropdown */}
      {isNotificationDropdownOpen && (
        <div className="absolute top-16 right-4 mt-2 w-96 bg-white shadow-lg rounded-lg border z-60">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">Thông báo</h2>
            <button 
              onClick={() => setIsNotificationDropdownOpen(false)}
              className="hover:bg-gray-100 p-2 rounded-full"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          <div className="max-h-[400px] overflow-y-auto">
            {[
              { 
                id: 1, 
                type: 'assignment', 
                message: 'Bài tập mới được tải lên', 
                time: '15 phút trước' 
              },
              { 
                id: 2, 
                type: 'deadline', 
                message: 'Sắp đến hạn nộp bài', 
                time: '2 giờ trước' 
              },
              { 
                id: 3, 
                type: 'event', 
                message: 'Nhắc nhở sự kiện trong khuôn viên trường', 
                time: '5 giờ trước' 
              }
            ].map(notification => (
              <div 
                key={notification.id} 
                className="p-4 hover:bg-gray-50 border-b flex items-start space-x-3"
              >
                <div className="flex-shrink-0">
                  {notification.type === 'assignment' && (
                    <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
                      <User className="h-5 w-5" />
                    </div>
                  )}
                  {notification.type === 'deadline' && (
                    <div className="bg-red-100 text-red-600 p-2 rounded-full">
                      <Bell className="h-5 w-5" />
                    </div>
                  )}
                  {notification.type === 'event' && (
                    <div className="bg-green-100 text-green-600 p-2 rounded-full">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 font-medium">{notification.message}</p>
                  <span className="text-xs text-gray-500">{notification.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
