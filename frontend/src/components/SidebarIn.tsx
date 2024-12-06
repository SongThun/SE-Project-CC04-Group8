import React from "react";
import { Img } from "./Img";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#141960] text-white h-screen">
        <div className="flex items-center justify-center h-20 border-b border-gray-700">
          <button
            className="text-2xl font-semibold"
            // onClick={() => {
            //   navigate("/");
            // }}
          >
            Dashboard
          </button>
        </div>
        <ul className="mt-6">
          <li className="text-lg">
            <button
              className="w-full text-left py-3 px-4 hover:bg-gray-700 focus:outline-none flex items-center"
              onClick={() => {
                navigate("");
              }}
            >
              <Img
                src="/src/assets/img_mayin.svg"
                alt="May In"
                className="h-[24px] w-[24px]"
              />
              May In
            </button>
          </li>
          <li className="text-lg">
            <button
              className="w-full text-left py-3 px-4 hover:bg-gray-700 focus:outline-none flex items-center"
              onClick={() => {
                navigate("selection");
              }}
            >
              <Img
                src="/src/assets/img_tuychon.svg"
                alt="Tuy Chon"
                className="h-[24px] w-[24px]"
              />
              Tuy Chon
            </button>
          </li>
          <li className="text-lg">
            <button
              className="w-full text-left py-3 px-4 hover:bg-gray-700 focus:outline-none flex items-center"
              onClick={() => {
                navigate("overview");
              }}
            >
              <Img
                src="/src/assets/img_tongquan.svg"
                alt="Tong Quan"
                className="h-[24px] w-[24px]"
              />
              Tong Quan
            </button>
          </li>
        </ul>
      </div>
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
