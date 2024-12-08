import React from "react";
import { Card, Typography } from "antd";
import { Img } from "../../components/Img";

const { Title } = Typography;

const Info: React.FC = () => {
  return (
    <div className="flex flex-col max-h-[800px] w-[260px] p-5 gap-10 bg-[#E5EEFF] overflow-auto">
      {/* Content inside the scrollable container */}
      <div className="flex flex-col items-center gap-6">
        {[...Array(5)].map((_, index) => (
          <Card
            key={index}
            hoverable
            bordered={false}
            className="w-full max-w-[220px] justify-between items rounded-lg shadow-lg"
            cover={
              <Img
                src="/src/assets/img_document_img.png"
                alt="Document Image"
                className="w-full object-cover"
              />
            }
          >
            <div className="text-center text-[#003366] font-bold">
              Page #{index + 1}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Info;
