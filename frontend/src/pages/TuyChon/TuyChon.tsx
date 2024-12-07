import React, { useState } from "react";
import { Upload, Button, Typography, Space, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import PhanTuyChon from "./PhanTuyChon";
import Sidebar2 from "../../components/SidebarIn";
import { useFile } from "../utils/FileHolder";
const { Title, Text } = Typography;

export default function TuyChon() {
  const {displayUpload} = useFile();

  return (
    <section className="flex-1 flex flex-col bg-[#F2F6FF]">
      <div className="flex h-[80px] w-full bg-black">{/* Delete This */}</div>
      <section className="flex-1 flex flex-row bg-[#F2F6FF] justify-end">
        {displayUpload()}

        <div className="flex h-full w-[650px] p-8 bg-[#f5f5f5] justify-center items-center shadow-lg ">
          <PhanTuyChon />
        </div>
      </section>
    </section>
  );
}
