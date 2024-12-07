import React, { useState, useEffect } from "react";
import SoMatMoiTo from "./SoMatMoiTo";
import SoTo from "./SoTo";
import KhoangIn from "./KhoangIn";
import KichCo from "./KichCo";
import { Button } from "antd";
import { Input } from "antd";
import type { ConfigProviderProps } from "antd";

type SizeType = ConfigProviderProps["componentSize"];

const { TextArea } = Input;

const PhanTuyChon = () => {
  const [size, setSize] = useState<SizeType>("large");

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

  return (
    <div
      className="flex-1 flex flex-col  items-center justify-center gap-5 p-14"
      style={{ fontFamily: "Roboto, sans-serif" }}
    >
      <div className="flex flex-row w-full items-start">
        <span className="text-[32px] font-normal font-['Merriweather'] text-[#000000]">
          Điều chỉnh:
        </span>
      </div>
      <div className="flex flex-row w-full items-center gap-5">
        <span className="w-[240px] text-[24px] font-normal font-['Roboto'] text-[#000000]">
          Số mặt mỗi tờ:
        </span>
        <div className="flex w-full justify-end">
          <SoMatMoiTo />
        </div>
      </div>
      <div className="flex flex-row w-full items-center gap-5">
        <span className="w-[160px] text-[24px] font-normal font-['Roboto'] text-[#000000]">
          Số tờ:
        </span>
        <div className="flex w-full justify-end">
          <SoTo />
        </div>
      </div>
      <div className="flex flex-row w-full items-center gap-5">
        <span className="w-[160px] text-[24px] font-normal font-['Roboto'] text-[#000000]">
          Khoảng in:
        </span>
        <div className="flex w-full justify-end">
          <KhoangIn />
        </div>
      </div>
      <div className="flex flex-row w-full items-center gap-5">
        <span className="w-[160px] text-[24px] font-normal font-['Roboto'] text-[#000000]">
          Kích cỡ:
        </span>
        <div className="flex w-full justify-end">
          <KichCo />
        </div>
      </div>
      <div className="flex flex-col w-full items-center gap-5">
        <div className="flex flex-row w-full items-start">
          <span className="text-[24px] font-normal font-['Roboto'] text-[#000000]">
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
