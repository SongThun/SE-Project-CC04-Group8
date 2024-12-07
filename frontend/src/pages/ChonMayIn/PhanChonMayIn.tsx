import React, { useState, useEffect } from "react";
import { Img } from "../../components/Img";
import { Input, Button } from "antd";
import type { GetProps } from "antd";
import type { ConfigProviderProps } from "antd";

type SearchProps = GetProps<typeof Input.Search>;
type SizeType = ConfigProviderProps["componentSize"];

const { Search } = Input;
const { TextArea } = Input;

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

export default function PhanChonMayIn() {
  const [size, setSize] = useState<SizeType>("large");
  const [selectedPrinter, setSelectedPrinter] = useState<string | null>(null);
  const [location, setLocation] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  // Printer info mapping
  const printerInfo = {
    "QuickBooks PDF Converter 3.0": {
      location: "B11",
      status: "Sẵn sàng",
    },
    OM2PDF: {
      location: "Tòa nhà C12",
      status: "Không sẵn sàng",
    },
    "Microsoft XPS Document Writer": {
      location: "Tòa nhà A7",
      status: "Sẵn sàng",
    },
    "Microsoft XPS Document Writer 2": {
      location: "Tòa nhà D5",
      status: "Sẵn sàng",
    },
  };

  // Dynamically inject Google Fonts in the head of the document
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Merriweather:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Cleanup when component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const handlePrinterSelect = (printerName: string) => {
    setSelectedPrinter(printerName); // Update the selected printer
    const printerDetails = printerInfo[printerName];
    setLocation(printerDetails.location); // Update location
    setStatus(printerDetails.status); // Update status
  };

  return (
    <>
      <div
        className="flex-1 flex flex-col items-center justify-center gap-5 p-14 "
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        <div className="flex flex-row w-full items-start">
          <span
            className="text-[32px] font-normal font-['Merriweather'] text-[#000000]"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            Lựa chọn máy in:
          </span>
        </div>

        {/* Scrollable Printer Options */}
        <div
          className="flex flex-col w-full gap-5 rounded border border-solid border-[#0000007f] bg-[#ffffff] px-2 py-2.5"
          style={{ maxHeight: "300px", overflowY: "auto" }} // Add scrollable styles
        >
          <Search
            placeholder="Search"
            allowClear
            onSearch={onSearch}
            style={{ width: "100%" }}
          />

          {/* Printer Option 1 */}
          <div
            onClick={() => handlePrinterSelect("QuickBooks PDF Converter 3.0")}
            className={`flex items-center gap-2.5 p-2.5 sm:flex-row cursor-pointer ${
              selectedPrinter === "QuickBooks PDF Converter 3.0"
                ? "bg-blue-100" // Selected style
                : ""
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
              QuickBooks PDF Converter 3.0
            </span>
          </div>

          {/* Printer Option 2 */}
          <div
            onClick={() => handlePrinterSelect("OM2PDF")}
            className={`flex items-center gap-2.5 p-2.5 sm:flex-row cursor-pointer ${
              selectedPrinter === "OM2PDF" ? "bg-blue-100" : ""
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
              OM2PDF
            </span>
          </div>

          {/* Printer Option 3 */}
          <div
            onClick={() => handlePrinterSelect("Microsoft XPS Document Writer")}
            className={`flex items-center gap-2.5 p-2.5 sm:flex-row cursor-pointer ${
              selectedPrinter === "Microsoft XPS Document Writer"
                ? "bg-blue-100"
                : ""
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
              Microsoft XPS Document Writer
            </span>
          </div>

          {/* Printer Option 4 */}
          <div
            onClick={() =>
              handlePrinterSelect("Microsoft XPS Document Writer 2")
            }
            className={`flex items-center gap-2.5 p-2.5 sm:flex-row cursor-pointer ${
              selectedPrinter === "Microsoft XPS Document Writer 2"
                ? "bg-blue-100"
                : ""
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
              Microsoft XPS Document Writer 2
            </span>
          </div>

          {/* Add more printer options as needed */}
        </div>

        {/* Location and Status */}
        <div className="flex flex-row w-full items-start gap-5">
          <span
            className="w-[130px] text-[24px] font-normal text-[#000000]"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Địa điểm:
          </span>
          <span
            className="text-[24px] font-normal text-[#000000]"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            {location || "Chưa chọn máy in"}
          </span>
        </div>

        <div className="flex flex-row w-full items-start gap-5">
          <span
            className="w-[130px] text-[24px] font-normal text-[#000000]"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Tình trạng:
          </span>
          <span
            className="text-[24px] font-normal text-[#000000]"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            {status || "Chưa chọn máy in"}
          </span>
        </div>

        {/* Notes Section */}
        <div className="flex flex-col w-full items-center gap-5">
          <div className="flex flex-row w-full items-start">
            <span
              className="text-[24px] font-normal text-[#000000]"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              Ghi chú:
            </span>
          </div>

          <TextArea
            rows={4}
            size="large"
            placeholder="Ghi chú..."
            maxLength={255}
            style={{ fontFamily: "Roboto, sans-serif" }}
          />
          <Button type="primary" shape="round" size={size}>
            Áp dụng
          </Button>
        </div>
      </div>
    </>
  );
}
