import React, { useState } from "react";
import { Img } from "../../components/Img";
import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import type { ConfigProviderProps } from "antd";
import Info from "./Info";

type SizeType = ConfigProviderProps["componentSize"];

export default function TongQuan() {
  const [size, setSize] = useState<SizeType>("large");

  return (
    <div className="flex-1 flex flex-col bg-[#AAB1D1]">
      {/* Sap Xep Lai*/}
      <section className="flex h-[84px] w-full">
        <div className="flex flex-row h-full w-full items-center justify-between bg-white p-2.5">
          {/* Change Color */}
          <div className="flex items-center gap-2.5">
            <Img
              src="/src/assets/img_sapxeplai.svg"
              alt="Sap Xep Lai"
              className="h-[24px] w-[24px]"
            />
            <span className="text-[32px] font-medium font-['Lato'] text-[#000000]">
              Sắp xếp lại
            </span>
          </div>
          <Button type="primary" icon={<DownloadOutlined />} size={size}>
            In
          </Button>
        </div>
      </section>

      <div className="flex-1 flex flex-row">
        {/* Main Content (Info & Image Section) */}
        <div className="flex h-full w-[260px] bg-stone-600">
          <Info />
        </div>
        <section className="flex-1 flex bg-[#F2F6FF]">
          <div className="flex-1 flex flex-col items-center justify-center">
            <Img
              src="/src/assets/img_document_img.png"
              alt="Document Image"
              className="h-[868px] w-[48%] object-contain"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
