import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, message, Space } from "antd";

const SoTo = () => {
  // State to store the selected item label
  const [selectedItem, setSelectedItem] = useState<string>("");

  // Menu click handler
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    const selectedLabel = e.domEvent.target.textContent || "";
    setSelectedItem(selectedLabel); // Update the button text with the selected label
    message.info(`Đã chọn ${selectedLabel}.`);
  };

  // Menu items
  const items: MenuProps["items"] = [
    {
      label: "In tất cả", // Displayed in the menu
      key: "1", // The unique key used in the handleMenuClick function
    },
    {
      label: "In trang hiện tại",
      key: "2",
    },
    {
      label: "Tùy chọn in",
      key: "3",
    },
  ];

  // Menu component with onClick event
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <Dropdown menu={menuProps}>
      <Button size="large" style={{ fontSize: "16px", padding: "12px 24px" }}>
        {" "}
        {/* Set the button size to large */}
        <Space>
          {selectedItem || "In tất cả"}{" "}
          {/* Display selected item label or default text */}
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
};

export default SoTo;
