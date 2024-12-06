import React, { useState } from "react";
import { Img } from "../../components/Img";
import { Input } from "antd";
import type { GetProps } from "antd";
import { Button } from "antd";
import type { ConfigProviderProps } from "antd";

type SearchProps = GetProps<typeof Input.Search>;
type SizeType = ConfigProviderProps["componentSize"];

const { Search } = Input;
const { TextArea } = Input;

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

export default function PhanChonMayIn() {
  const [size, setSize] = useState<SizeType>("large");
  return (
    <>
      <div className="flex flex-col h-full items-center justify-center gap-5 p-14">
        <div className="flex flex-row w-full items-start">
          <span className="text-[32px] font-normal font-['Lato'] text-[#000000]">
            Lựa chọn máy in:
          </span>
        </div>

        <div className="flex flex-col w-full gap-5 rounded border border-solid border-[#0000007f] bg-[#ffffff] px-2 py-2.5">
          <Search
            placeholder="Search"
            allowClear
            onSearch={onSearch}
            style={{ width: "100%" }}
          />

          <div className="flex items-center gap-2.5 p-2.5 sm:flex-row">
            <Img
              src="/src/assets/img_mayin2.svg"
              alt="Tuy Chon"
              className="h-[24px] w-[24px]"
            />
            <span className="text-[24px] font-normal font-['Lato'] text-[#000000]">
              QuickBooks PDF Converter 3.0
            </span>
          </div>

          <div className="flex items-center gap-2.5 p-2.5 sm:flex-row">
            <Img
              src="/src/assets/img_mayin2.svg"
              alt="Tuy Chon"
              className="h-[24px] w-[24px]"
            />

            <span className="text-[24px] font-normal font-['Lato'] text-[#000000]">
              OM2PDF
            </span>
          </div>

          <div className="flex items-center gap-2.5 p-2.5 sm:flex-row">
            <Img
              src="/src/assets/img_mayin2.svg"
              alt="Tuy Chon"
              className="h-[24px] w-[24px]"
            />

            <span className="text-[24px] font-normal font-['Lato'] text-[#000000]">
              Microsoft XPS Document Writer
            </span>
          </div>
        </div>
        <div className="flex flex-row w-full items-start gap-5">
          <span className="w-[130px] text-[24px] font-normal font-['Lato'] text-[#000000]">
            Địa điểm:
          </span>
          <span className="text-[24px] font-normal font-['Lato'] text-[#000000]">
            Tòa nhà B11
          </span>
        </div>
        <div className="flex flex-row w-full items-start gap-5">
          <span className="w-[130px] text-[24px] font-normal font-['Lato'] text-[#000000]">
            Tình trạng:
          </span>
          <span className="text-[24px] font-normal font-['Lato'] text-[#000000]">
            Sẵn sàng
          </span>
        </div>

        <div className="flex flex-col w-full items-center gap-5">
          <div className="flex flex-row w-full items-start">
            <span className="text-[24px] font-normal font-['Lato'] text-[#000000]">
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
    </>
  );
}
