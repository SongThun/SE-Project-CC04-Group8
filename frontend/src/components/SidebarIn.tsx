import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu, Avatar, Divider } from "antd";
import {
  DashboardOutlined,
  PrinterOutlined,
  FileSearchOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider
        width={250}
        className="bg-gradient-to-r from-[#141960] to-[#1a2a6c] text-white"
        theme="dark"
        breakpoint="lg"
        collapsedWidth="80"
        trigger={null}
        style={{ boxShadow: "2px 0px 15px rgba(0, 0, 0, 0.2)" }}
      >
        {/* Logo or Dashboard Title */}
        <div className="flex items-center justify-center h-20 border-b border-gray-700"></div>

        {/* Profile Section */}
        {/* <div className="flex flex-col items-center py-4 border-b border-gray-700">
          <Avatar
            size={100}
            icon={<UserOutlined style={{ fontSize: "56px" }} />}
            className="mb-2"
            style={{
              backgroundColor: "#4CAF50", // Set your desired background color here
            }}
          />
          <div className="text-xl font-medium text-white">John Doe</div>
        </div> */}

        {/* Menu */}
        <Menu
          mode="inline"
          theme="dark"
          defaultSelectedKeys={["1"]}
          className="mt-6"
          onClick={({ key }) => {
            if (key === "1") navigate("");
            if (key === "2") navigate("selection");
            if (key === "3") navigate("overview");
          }}
          style={{
            border: "none",
            marginTop: 20,
          }}
        >
          <Menu.Item
            key="1"
            icon={<PrinterOutlined style={{ fontSize: "28px" }} />}
            className="text-lg hover:bg-gradient-to-r from-blue-500 to-teal-400 transition-all duration-300"
            style={{
              borderRadius: "8px",
              padding: "10px 20px",
              marginBottom: "10px", // Added gap between items
            }}
          >
            Máy In
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<FileSearchOutlined style={{ fontSize: "28px" }} />}
            className="text-lg hover:bg-gradient-to-r from-blue-500 to-teal-400 transition-all duration-300"
            style={{
              borderRadius: "8px",
              padding: "10px 20px",
              marginBottom: "10px", // Added gap between items
            }}
          >
            Tùy Chọn
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<DashboardOutlined style={{ fontSize: "28px" }} />}
            className="text-lg hover:bg-gradient-to-r from-blue-500 to-teal-400 transition-all duration-300"
            style={{
              borderRadius: "8px",
              padding: "10px 20px",
              marginBottom: "10px", // Added gap between items
            }}
          >
            Tổng Quan
          </Menu.Item>
        </Menu>

        {/* Footer Section */}
      </Sider>

      {/* Main Content Area */}
      <Layout style={{ padding: "0 24px 24px" }}>
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
