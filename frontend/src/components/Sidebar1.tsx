import { Img } from "./Img";
import React from "react";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

export default function Sidebar1() {
  return (
    <Sidebar className="flex flex-col h-[1045px] w-[125px] justify-between bg-[#141960]">
      <Menu
        menuItemStyles={{
          button: {
            padding: "24px",
            flexDirection: "column",
            color: "#ffffff",
            fontWeight: 400,
            fontSize: "16px",
            "&:hover, &.ps-active": {
              backgroundColor: "#294c94 !important",
            },
          },
        }}
        className="flex flex-col self-stretch"
      >
        <div className="flex flex-col self-stretch items-center justify-center p-2.5 gap-10">
          <MenuItem
            className="flex flex-col h-[75px] w-[105px]"
            icon={
              <Img
                src="images/img_mayin.svg"
                alt="May In"
                className="h-[24px] w-[24px]"
              />
            }
          >
            Máy in
          </MenuItem>
          <MenuItem
            className="flex flex-col h-[75px] w-[105px]"
            icon={
              <Img
                src="images/img_tuychon.svg"
                alt="Tuy Chon"
                className="h-[24px] w-[24px]"
              />
            }
          >
            Tùy chọn
          </MenuItem>
          <MenuItem
            className="flex flex-col h-[75px] w-[105px]"
            icon={
              <Img
                src="images/img_tongquan.svg"
                alt="Tong Quan"
                className="h-[24px] w-[24px]"
              />
            }
          >
            Tổng quan
          </MenuItem>
          <div className="h-[550px] bg-[#141960]" />

          <MenuItem
            className="flex flex-col h-[75px] w-[105px]"
            icon={
              <Img
                src="images/img_trove.svg"
                alt="Tro Ve"
                className="h-[24px] w-[24px]"
              />
            }
          >
            Trở về
          </MenuItem>
        </div>
      </Menu>
    </Sidebar>
  );
}
