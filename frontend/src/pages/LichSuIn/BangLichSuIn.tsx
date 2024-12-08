import React, { useState, useEffect } from "react";
import { DatePicker, Dropdown, Pagination, Space, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import api from "../../api/api";

const HistoryTable: React.FC = () => {
  const [history, setHistory] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPaperSize, setSelectedPaperSize] = useState("Tất cả");
  const [startDate, setStartDate] = useState<any>(null); // Start date state
  const [endDate, setEndDate] = useState<any>(null); // End date state
  const rowsPerPage = 5;

  // Fetch history data from the backend
  const fetchHistory = async () => {
    try {
      const response = await api.get("/api/spso/getPrintHistory");
      console.log("Print history:", api.get("/api/spso/getPrintHistory"));

      setHistory(response.data);
    } catch (error) {
      console.error("Error fetching print history:", error);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Handle dropdown item selection
  const handleMenuClick = (e: any) => {
    setSelectedPaperSize(e.key);
  };

  // Handle start and end date change
  const handleStartDateChange = (date: any) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: any) => {
    setEndDate(date);
  };

  // Filter history based on selected paper size and date range
  const filterHistory = history
    .filter((item) => {
      // Filter by paper size
      if (
        selectedPaperSize !== "Tất cả" &&
        item.page_size !== selectedPaperSize
      ) {
        return false;
      }

      // Filter by date range
      if (startDate) {
        const itemDate = new Date(item.datetime); // Convert to Date object
        console.log("Item Date:", itemDate.toISOString());

        // Set the startDate time to '00:00:00' using native Date object
        const startMoment = new Date(startDate);
        startMoment.setHours(0, 0, 0, 0); // Set time to 00:00:00
        console.log("Start Date:", startMoment.toISOString());

        if (itemDate < startMoment) {
          return false;
        }
      }

      if (endDate) {
        const itemDate = new Date(item.datetime); // Convert to Date object
        console.log("Item Date:", itemDate.toISOString());

        // Set the endDate time to '23:59:59' using native Date object
        const endMoment = new Date(endDate);
        endMoment.setHours(23, 59, 59, 999); // Set time to 23:59:59
        console.log("End Date:", endMoment.toISOString());

        if (itemDate > endMoment) {
          return false;
        }
      }

      return true;
    })
    .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  // Dropdown menu items
  const items = [
    {
      key: "A3",
      label: "A3",
    },
    {
      key: "A4",
      label: "A4",
    },
    {
      key: "Tất cả",
      label: "Tất cả",
    },
  ];

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
          <Pagination
            align="center"
            current={currentPage}
            onChange={handlePageChange}
            pageSize={rowsPerPage}
            total={history.length}
          />
        </span>
        <div className="flex flex-row gap-4 items-center">
          <span className="text-[16px] font-medium text-[#737375] text-opacity-85">
            <DatePicker
              style={{ fontSize: "16px" }}
              placeholder="Start Date"
              onChange={handleStartDateChange}
            />
          </span>
          <span className="text-[16px] font-medium text-[#737375] text-opacity-85">
            <DatePicker
              style={{ fontSize: "16px" }}
              placeholder="End Date"
              onChange={handleEndDateChange}
            />
          </span>
          <span className="text-[16px] font-medium text-[#737375] text-opacity-85">
            <Dropdown
              overlay={<Menu items={items} onClick={handleMenuClick} />}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Loại giấy: {selectedPaperSize} <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </span>
        </div>
      </div>

      <table className="w-full table-auto bg-white border-collapse shadow-md rounded-lg">
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

        <tbody>
          {filterHistory.map((item) => (
            <tr key={item.id} className="h-[55px] border-b border-gray-200">
              <td className="p-3 text-[16px] text-gray-700">
                {item.id || "N/A"}
              </td>
              <td className="p-3 text-sm text-gray-700">
                {new Date(item.datetime).toLocaleString() || "N/A"}
              </td>
              <td className="p-3 text-sm text-gray-700">
                {item.printerID || "N/A"}
              </td>
              <td className="p-3 text-sm text-gray-700">
                {item.file_name || "N/A"}
              </td>
              <td className="p-3 text-sm text-gray-700">
                {item.file_type || "N/A"}
              </td>
              <td className="p-3 text-sm text-gray-700">
                {item.file_size || "N/A"}
              </td>
              <td className="p-3 text-sm text-gray-700">
                {item.number_of_page || "N/A"}
              </td>
              <td className="p-3 text-sm text-gray-700">
                {item.page_size || "N/A"}
              </td>
              <td className="p-3 text-sm text-gray-700">
                <button className="text-blue-500 hover:underline">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;
