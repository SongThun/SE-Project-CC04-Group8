import React, { useState } from "react";
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

  return (
    <div className="flex flex-col h-full items-center justify-center gap-5 p-14">
      <div className="flex flex-row w-full items-start">
        <span className="text-[32px] font-normal font-['Lato'] text-[#000000]">
          Điều chỉnh:
        </span>
      </div>
      <div className="flex flex-row w-full items-start gap-5">
        <span className="w-[160px] text-[24px] font-normal font-['Lato'] text-[#000000]">
          Số mặt mỗi tờ:
        </span>
        <SoMatMoiTo />
      </div>
      <div className="flex flex-row w-full items-start gap-5">
        <span className="w-[160px] text-[24px] font-normal font-['Lato'] text-[#000000]">
          Số tờ:
        </span>
        <SoTo />
      </div>
      <div className="flex flex-row w-full items-start gap-5">
        <span className="w-[160px] text-[24px] font-normal font-['Lato'] text-[#000000]">
          Khoảng in:
        </span>
        <KhoangIn />
      </div>
      <div className="flex flex-row w-full items-start gap-5">
        <span className="w-[160px] text-[24px] font-normal font-['Lato'] text-[#000000]">
          Kích cỡ:
        </span>
        <KichCo />
      </div>
      <div className="flex flex-col w-full items-center gap-5">
        <div className="flex flex-row w-full items-start">
          <span className="text-[24px] font-normal font-['Lato'] text-[#000000]">
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
