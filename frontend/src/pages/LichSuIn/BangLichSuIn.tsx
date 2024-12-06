import React, { useState } from "react";
import TableRow from "./TableRow";
import type { DatePickerProps } from "antd";
import { DatePicker, Dropdown, Pagination, Space } from "antd";
import { DownOutlined, SettingOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "A3",
  },
  {
    key: "2",
    label: "A4",
  },
  {
    key: "3",
    label: "Tất cả",
  },
];

const HistoryTable: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="w-[75vw]">
      <div className="flex flex-row w-full h-[55px] bg-white items-center p-6 justify-between rounded-t-xl">
        <div className="flex flex-row gap-4">
          <span className="text-[16px] font-bold text-[#001038] text-opacity-85">
            Lịch sử in
          </span>
          <span className="text-[16px] font-medium text-[#737375] text-opacity-85">
            Lịch sử mua giấy
          </span>
        </div>
        <span className="text-[16px] font-medium text-[#737375] text-opacity-85">
          <Pagination align="center" defaultCurrent={1} total={50} />
        </span>
        <div className="flex flex-row gap-4 items-center">
          <DatePicker onChange={onChange} style={{ fontSize: "16px" }} />
          <span className="text-[16px] font-medium text-[#737375] text-opacity-85">
            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Loại giấy
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </span>
        </div>
      </div>
      <table className="w-full table-auto bg-white border-collapse shadow-md rounded-lg">
        {/* Table Header */}
        <thead className="h-[55px] bg-gray-100">
          <tr>
            <th className="text-left p-3 text-[16px] font-medium text-[#737375]">
              ID
            </th>
            <th className="text-left p-3 text-[16px] font-medium text-[#737375]">
              Ngày in
            </th>
            <th className="text-left p-3 text-[16px] font-medium text-[#737375]">
              ID Máy in
            </th>
            <th className="text-left p-3 text-[16px] font-medium text-[#737375]">
              Tên file
            </th>
            <th className="text-left p-3 text-[16px] font-medium text-[#737375]">
              Định dạng
            </th>
            <th className="text-left p-3 text-[16px] font-medium text-[#737375]">
              Kích thước
            </th>
            <th className="text-left p-3 text-[16px] font-medium text-[#737375]">
              Số tờ
            </th>
            <th className="text-left p-3 text-[16px] font-medium text-[#737375]">
              Loại giấy
            </th>
            <th className="text-left p-3 text-[16px] font-medium text-[#737375]">
              Tùy chọn
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {/* Example Row */}
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;
