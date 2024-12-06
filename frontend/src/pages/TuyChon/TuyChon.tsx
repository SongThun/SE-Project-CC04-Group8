import React, { useState } from "react";
import { Img } from "../../components/Img";

import PhanTuyChon from "./PhanTuyChon";

export default function TuyChon() {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [fileType, setFileType] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileType(selectedFile.type);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFileUrl(reader.result); // Set the URL to display the file
      };
      reader.readAsDataURL(selectedFile); // Read the file as a data URL
    }
  };

  const renderPreview = () => {
    if (!fileUrl) {
      return (
        <p className="text-[16px] text-[#aab1d1]">
          No file selected for preview
        </p>
      );
    }

    if (fileType.includes("image")) {
      // If the file is an image
      return (
        <img
          src={fileUrl}
          alt="Preview"
          className="h-[514px] w-[38%] object-contain"
        />
      );
    }

    if (fileType.includes("pdf")) {
      // If the file is a PDF
      return (
        <iframe
          src={fileUrl}
          title="PDF Preview"
          className="h-[514px] w-[80%] border"
        ></iframe>
      );
    }

    return (
      <p className="text-[16px] text-[#aab1d1]">Unsupported file format</p>
    );
  };

  console.log("ChonMayIn");
  return (
    <div className="flex h-screen w-screen">
      <div className="flex flex-col h-screen w-screen">
        <div className="flex-1 flex flex-row">
          <div className="flex-1 flex flex-col bg-[#F2F6FF]">
            {/* File Preview Here */}
            <div className="flex-1 flex flex-col items-center justify-center">
              {renderPreview()}
              <div className="flex justify-center self-stretch p-3">
                <span className="text-[16px] font-medium text-[#aab1d1]">
                  {file
                    ? `${file.name} (${(file.size / 1024).toFixed(2)} kB)`
                    : "No file selected"}
                </span>
              </div>
              <div className="flex justify-center p-3">
                <input
                  type="file"
                  accept="image/*,application/pdf"
                  onChange={handleFileChange}
                  className="p-2 bg-[#e1e5f2] rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="flex h-full w-[664px]">
            {/* Printer Selection Here */}
            <div className="h-full w-[664px] self-center bg-[#f5f5f5] shadow-[0_4px_4px_0_#0000007f]">
              <PhanTuyChon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
