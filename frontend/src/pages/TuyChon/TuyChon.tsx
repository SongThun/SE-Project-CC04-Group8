import React, { useState } from "react";
import { Upload, Button, Typography, Space, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import PhanTuyChon from "./PhanTuyChon";
import Sidebar2 from "../../components/SidebarIn";

const { Title, Text } = Typography;

export default function TuyChon() {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [fileType, setFileType] = useState(null);

  const handleFileChange = (info) => {
    const selectedFile = info.fileList[0];
    if (selectedFile) {
      setFile(selectedFile.originFileObj);
      setFileType(selectedFile.type);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFileUrl(reader.result);
      };
      reader.readAsDataURL(selectedFile.originFileObj);
    }
  };

  const renderPreview = () => {
    if (!fileUrl) {
      return (
        <Text className="text-gray-500">No file selected for preview</Text>
      );
    }

    if (fileType.includes("image")) {
      return (
        <img
          src={fileUrl}
          alt="Preview"
          className="w-full max-w-[80%] max-h-[500px] object-contain"
        />
      );
    }

    if (fileType.includes("pdf")) {
      return (
        <iframe
          src={fileUrl}
          title="PDF Preview"
          className="w-full h-[500px] border-2 rounded-lg"
        ></iframe>
      );
    }

    return <Text className="text-red-500">Unsupported file format</Text>;
  };

  return (
    <section className="flex-1 flex flex-row h-full bg-[#F2F6FF] justify-end">
      <div className="flex-1 p-8 bg-[#f2f6ff] rounded-lg">
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

      <div className="flex h-full w-[650px] p-8 bg-[#f5f5f5] justify-center items-center shadow-lg ">
        <PhanTuyChon />
      </div>
    </section>
  );
}
