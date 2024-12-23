import React, { useState } from "react";
import { Upload, Button, Typography, Space, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import PhanChonMayIn from "./PhanChonMayIn";
import Sidebar2 from "../../components/SidebarIn";
import {useFile} from "../utils/FileHolder";

const { Title, Text } = Typography;

export default function ChonMayIn() {
  const { handleFileChange ,file ,renderPreview ,displayUpload } = useFile();

  return (
    <section className="flex-1 flex flex-row h-full bg-[#F2F6FF] pt-[80px] justify-end">
      <div className="flex-1 p-8 bg-[#F2F6FF] rounded-lg">
        <div className="flex flex-col items-center justify-center space-y-6">
          {renderPreview()}
          <Space direction="vertical" size={16} className="w-full text-center">
            <Text className="text-gray-600">
              {file
                ? `${file.name} (${(file.size / 1024).toFixed(2)} kB)`
                : "No file selected"}
            </Text>
            <Upload
              customRequest={() => {}}
              onChange={handleFileChange}
              showUploadList={false}
              accept="image/*,application/pdf"
            >
              <Button
                icon={<InboxOutlined />}
                type="primary"
                block
                size="large"
                className="border-2 border-[#0050b3] hover:bg-[#0050b3] text-white"
              >
                Upload File
              </Button>
            </Upload>
            <Text className="text-sm text-[#aab1d1]">
              Supported formats: JPG, PNG, PDF
            </Text>
          </Space>
        </div>
      </div>

      <div className="flex h-full w-[650px] p-8 bg-[#f5f5f5]  justify-center items-center shadow-lg">
        <PhanChonMayIn />
      </div>
    </section>
  );
}
