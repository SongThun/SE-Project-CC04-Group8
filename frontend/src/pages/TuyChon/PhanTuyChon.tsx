import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import SoMatMoiTo from "./SoMatMoiTo";
import SoTo from "./SoTo";
import KhoangIn from "./KhoangIn";
import KichCo from "./KichCo";
import { Button, Input } from "antd";
import type { ConfigProviderProps } from "antd";

type SizeType = ConfigProviderProps["componentSize"];

const { TextArea } = Input;

const PhanTuyChon = () => {
  const [size, setSize] = useState<SizeType>("large");

  const navigate = useNavigate(); // Initialize the navigate function

  // Dynamically inject Google Fonts in the head of the document
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Merriweather:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Cleanup when component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Handle button click to navigate to another page
  const handleNavigate = () => {
    navigate("overview"); // Replace "/new-page" with your desired route
  };

  return (
    <div
      className="flex-1 flex flex-col  items-center justify-center gap-5 p-14"
      style={{ fontFamily: "Roboto, sans-serif" }}
    >
      <div className="flex flex-row w-full items-start">
        <span className="text-[32px] font-bold text-gray-800">Điều chỉnh:</span>
      </div>
      <div className="flex flex-row w-full items-center gap-5">
        <span className="w-[250px] text-[24px] font-normal text-gray-800">
          Số mặt mỗi tờ:
        </span>
        <div className="flex w-full justify-end">
          <SoMatMoiTo />
        </div>
      </div>
      <div className="flex flex-row w-full items-center gap-5">
        <span className="w-[250px] text-[24px] font-normal text-gray-800">
          Số tờ:
        </span>
        <div className="flex w-full justify-end">
          <SoTo />
        </div>
      </div>
      <div className="flex flex-row w-full items-center gap-5">
        <span className="w-[160px] text-[24px] font-normal text-gray-800">
          Khoảng in:
        </span>
        <div className="flex w-full justify-end">
          <KhoangIn />
        </div>
      </div>
      <div className="flex flex-row w-full items-center gap-5">
        <span className="w-[160px] text-[24px] font-normal text-gray-800">
          Kích cỡ:
        </span>
        <div className="flex w-full justify-end">
          <KichCo />
        </div>
      </div>
      <div className="flex flex-col w-full items-center gap-5">
        <div className="flex flex-row w-full items-start">
          <span className="text-[24px] font-normal text-gray-800">
            Ghi chú:
          </span>
        </div>

        <TextArea
          rows={4}
          size="large"
          placeholder="Ghi chú..."
          maxLength={255}
        />
        <Button type="primary" shape="round" size={size}>
          Áp dụng
        </Button>
      </div>
    </div>
  );
};

export default PhanTuyChon;
