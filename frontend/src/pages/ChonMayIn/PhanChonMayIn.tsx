import React, { useState, useEffect } from "react";
import { Img } from "../../components/Img";
import { Input, Button } from "antd";
import type { GetProps } from "antd";
import type { ConfigProviderProps } from "antd";
import api from "../../api/api";

type SearchProps = GetProps<typeof Input.Search>;
type SizeType = ConfigProviderProps["componentSize"];

const { Search } = Input;
const { TextArea } = Input;

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

export default function PhanChonMayIn() {
  const [printers, setPrinters] = useState<any[]>([]);
  const [size, setSize] = useState<SizeType>("large");
  const [selectedPrinter, setSelectedPrinter] = useState<string | null>(null);
  const [location, setLocation] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  // Fetch printer data from the database (using the provided printers array)
  const fetchPrinters = async () => {
    try {
      // Simulate an API call for fetching printers data (you would fetch from your backend here)
      const response = await api.get("/api/spso/getPrinters");
      setPrinters(response.data); // Update the state with the fetched printer data
    } catch (error) {
      console.error("Error fetching printers", error);
    }
  };

  useEffect(() => {
    fetchPrinters(); // Call to fetch printer data on component mount
  }, []);

  // Filter the printers to show only those with status "Hoạt động"
  const activePrinters = printers.filter(
    (printer) => printer.status === "Hoạt động"
  );

  // Handle selecting a printer and updating its details
  const handlePrinterSelect = (printerId: number) => {
    const selected = activePrinters.find(
      (printer) => printer.printerId === printerId
    );
    if (selected) {
      setSelectedPrinter(selected.brand); // Set the selected printer's brand as the selected name
      setLocation(selected.location); // Set the location
      setStatus(selected.status); // Set the status
    }
  };

  return (
    <div
      className="flex-1 flex flex-col items-center justify-center gap-5 p-14"
      style={{ fontFamily: "Roboto, sans-serif" }}
    >
      <div className="flex flex-row w-full items-start">
        <span className="text-[32px] font-bold text-gray-800">
          Lựa chọn máy in:
        </span>
      </div>

      {/* Scrollable Printer Options */}
      <div
        className="flex flex-col w-full gap-5 rounded border border-solid border-[#0000007f] bg-[#ffffff] px-2 py-2.5"
        style={{ maxHeight: "250px", overflowY: "auto" }}
      >
        <Search
          placeholder="Search"
          allowClear
          onSearch={onSearch}
          style={{ width: "100%" }}
        />

        {/* Dynamically render only active printers */}
        {activePrinters.map((printer) => (
          <div
            key={printer.printerId}
            onClick={() => handlePrinterSelect(printer.printerId)}
            className={`flex items-center gap-2.5 p-2.5 sm:flex-row cursor-pointer ${
              selectedPrinter === printer.brand ? "bg-blue-100" : ""
            }`}
          >
            <Img
              src="/src/assets/img_mayin2.svg"
              alt="Tuy Chon"
              className="h-[24px] w-[24px]"
            />
            <span
              className="text-[24px] font-normal text-[#000000]"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              {printer.brand}
            </span>
          </div>
        ))}
      </div>

      {/* Location and Status */}
      <div className="flex flex-row w-full items-start gap-5">
        <span className="w-[130px] text-[24px] font-medium text-gray-800">
          Địa điểm:
        </span>
        <span className="text-[24px] font-normal text-gray-800">
          {location || "Chưa chọn máy in"}
        </span>
      </div>

      <div className="flex flex-row w-full items-start gap-5">
        <span className="w-[130px] text-[24px] font-medium text-gray-800">
          Tình trạng:
        </span>
        <span className="text-[24px] font-normal text-gray-800">
          {status || "Chưa chọn máy in"}
        </span>
      </div>

      {/* Notes Section */}
      <div className="flex flex-col w-full items-center gap-5">
        <div className="flex flex-row w-full items-start">
          <span className="text-[24px] font-normal text-gray-800">
            Ghi chú:
          </span>
        </div>

        <TextArea
          rows={4}
          size="large"
          placeholder="Ghi chú..."
          maxLength={255}
        />
        <Button type="primary" shape="round" size={size}>
          Áp dụng
        </Button>
      </div>
    </div>
  );
}
