import React, { useState } from "react";
import { Img } from "../../components/Img";
import { DownloadOutlined } from "@ant-design/icons";
import { Button, Divider, Flex, Radio } from "antd";
import type { ConfigProviderProps } from "antd";
import Info from "./Info";

type SizeType = ConfigProviderProps["componentSize"];

export default function TongQuan() {
  const [size, setSize] = useState<SizeType>("large"); // default is 'middle'

  return (
    <div className="flex h-screen w-screen bg-[#AAB1D1]">
      <div className="flex flex-col h-screen w-screen bg-[#AAB1D1]">
        <div className="flex h-[82px] w-[1735] bg-red-500">
          {/* Header Here */}
        </div>
        <div className="flex-1 flex flex-row bg-amber-200">
          {/* Delete BG*/}
          <div className="flex-1 flex flex-col bg-green-300">
            <div className="flex h-[84px] w-full bg-violet-800">
              {/* Sap Xep Lai Here*/}
              <div className="flex flex-row h-[84px] w-full items-center justify-between bg-[#ffffff] p-2.5">
                <div className="flex flex-row items-center gap-2.5">
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
            </div>
            <div className="flex-1 flex flex-row bg-[#F2F6FF]">
              <div className="flex h-full w-[260px] bg-stone-600">
                {/* Info Here*/}
                <Info />
              </div>
              <div className="flex-1 flex justify-center items-center">
                {/* Picture Herer*/}
                <div className="flex-1 flex flex-col items-center justify-center">
                  <Img
                    src="/src/assets/img_document_img.png"
                    alt="Document Image"
                    className="h-[868px] w-[48%] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
