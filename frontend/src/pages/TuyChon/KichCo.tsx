import React from "react";
import { Radio } from "antd";

const KichCo = () => {
  const [value, setValue] = React.useState("1"); // Initial state for selected value

  const handleChange = (e: any) => {
    setValue(e.target.value); // Update state when a radio button is clicked
  };

  return (
    <Radio.Group onChange={handleChange} value={value}>
      <Radio value="1">A3 297mm x 420mm</Radio>
      <Radio value="2">A4 210mm x 297mm</Radio>
    </Radio.Group>
  );
};

export default KichCo;
