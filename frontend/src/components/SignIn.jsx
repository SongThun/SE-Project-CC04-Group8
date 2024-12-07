import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logoBK.png';
const Signin = () => {
  const navigate = useNavigate();

  // Navigate to the SigninAs page with parameters (username and loginType)
  const handleNavigation = (loginType) => {
    navigate(`/signin-as?loginType=${loginType}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-500">
      <div className="bg-white shadow-lg rounded-lg max-w-sm w-full p-6">
        <img src={logo} alt="logo" className="w-24 mx-auto" />
        <h1 className="text-2xl font-bold text-center text-blue-800 mb-6">Hệ thống in ấn HCMUT</h1>
        <h2 className="text-xl font-bold text-center text-gray-800 mb-6">Đăng Nhập</h2>

        <div className="space-y-4">
          <button
            onClick={() => handleNavigation('student')}
            className="w-full bg-white text-black py-3 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-400"
          >
            TÀI KHOẢN HCMUT (SINH VIÊN)
          </button>
          <button
            onClick={() => handleNavigation('spso')}
            className="w-full bg-white text-black py-3 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 border border-gray-400"
          >
            QUẢN LÝ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
