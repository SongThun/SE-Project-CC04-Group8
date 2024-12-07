import React from "react";
import { Radio, Space } from "antd";

const KichCo = () => {
  const [value, setValue] = React.useState("1"); // Initial state for selected value

  const handleChange = (e: any) => {
    setValue(e.target.value); // Update state when a radio button is clicked
  };

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Radio.Group onChange={handleChange} value={value}>
        <Space direction="vertical" size="large">
          <Radio
            value="1"
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "8px",
              padding: "10px 20px",
              fontSize: "16px",
              fontWeight: "500",
              transition: "all 0.3s",
              width: "100%",
            }}
            className="custom-radio"
          >
            A3 297mm x 420mm
          </Radio>
          <Radio
            value="2"
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "8px",
              padding: "10px 20px",
              fontSize: "16px",
              fontWeight: "500",
              transition: "all 0.3s",
              width: "100%",
            }}
            className="custom-radio"
          >
            A4 210mm x 297mm
          </Radio>
        </Space>
      </Radio.Group>
    </div>
  );
};

export default KichCo;
