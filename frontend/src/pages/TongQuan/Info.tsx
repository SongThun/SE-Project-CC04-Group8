import React from "react";
import { Img } from "../../components/Img";

const Info: React.FC = () => {
  return (
    <div className="flex flex-col h-[961px] w-[260px] p-5 gap-10 bg-[#E5EEFF] item-center overflow-auto">
      {/* Content inside the scrollable container */}

      <div className="flex flex-col items-center">
        <Img
          src="/src/assets/img_document_img.png"
          alt="Document Image"
          className="h-[200px] w-[150px] object-contain"
        />
      </div>
      <div className="flex flex-col items-center">
        <Img
          src="/src/assets/img_document_img.png"
          alt="Document Image"
          className="h-[200px] w-[150px] object-contain"
        />
      </div>
      <div className="flex flex-col items-center">
        <Img
          src="/src/assets/img_document_img.png"
          alt="Document Image"
          className="h-[200px] w-[150px] object-contain"
        />
      </div>
      <div className="flex flex-col items-center">
        <Img
          src="/src/assets/img_document_img.png"
          alt="Document Image"
          className="h-[200px] w-[150px] object-contain"
        />
      </div>
      <div className="flex flex-col items-center">
        <Img
          src="/src/assets/img_document_img.png"
          alt="Document Image"
          className="h-[200px] w-[150px] object-contain"
        />
      </div>
    </div>
  );
};

export default Info;
