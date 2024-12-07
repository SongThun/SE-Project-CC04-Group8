import React, { useState } from "react";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { useFile } from "../utils/FileHolder";  // Importing useFile
import Info from "./Info";
import { Img } from "../../components/Img";

type SizeType = ConfigProviderProps["componentSize"];

export default function TongQuan() {
  const { displayUpload, renderPreview, file, fileType } = useFile();  // Using useFile hook to manage file upload and preview
  const [size, setSize] = useState<SizeType>("large");

  return (
    <div className="flex-1 flex flex-col bg-[#AAB1D1]">
      <div className="flex h-[80px] w-full bg-black">{/* Delete This */}</div>

      {/* Sắp Xếp Lại */}
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
        {/* <div className="flex h-full w-[260px] bg-stone-600">
          <Info />
        </div> */}
        <section className="flex-1 flex bg-[#F2F6FF]">
          <div className="flex-1 flex flex-col items-center justify-center">
            {/* Display the uploaded file preview */}
            <div className="max-h-[868px] w-full flex items-center justify-center">
              {renderPreview()}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
