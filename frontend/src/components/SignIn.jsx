import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();

  // Navigate to the SigninAs page with parameters (username and loginType)
  const handleNavigation = (loginType) => {
    navigate(`/signin-as?loginType=${loginType}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg max-w-sm w-full p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Hệ thống in ấn HCMUT</h1>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Đăng Nhập</h2>

        <div className="space-y-4">
          <button
            onClick={() => handleNavigation('student')}
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login as Student
          </button>
          <button
            onClick={() => handleNavigation('spso')}
            className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Login as SPSO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;