import { Img } from "./Img";
import React from "react";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

export default function Sidebar1() {
  return (
    <Sidebar
      className="flex flex-col h-full w-[10vw] items-center bg-[#141960]"
      rootStyles={{
        height: "-webkit-fill-available",
        [`.${sidebarClasses.container}`]: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      }}
    >
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
      >
        <div className="flex flex-col items-center justify-center p-2.5 gap-4">
          <MenuItem
            className="flex flex-col"
            icon={
              <Img
                src="/src/assets/img_mayin.svg"
                alt="May In"
                className="h-[24px] w-[24px]"
              />
            }
          >
            Máy in
          </MenuItem>
          <MenuItem
            className="flex flex-col"
            icon={
              <Img
                src="/src/assets/img_tuychon.svg"
                alt="Tuy Chon"
                className="h-[24px] w-[24px]"
              />
            }
          >
            Tùy chọn
          </MenuItem>
          <MenuItem
            className="flex flex-col"
            icon={
              <Img
                src="/src/assets/img_tongquan.svg"
                alt="Tong Quan"
                className="h-[24px] w-[24px]"
              />
            }
          >
            Tổng quan
          </MenuItem>
        </div>
      </Menu>
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
      >
        <div className="flex flex-col items-center justify-center p-2.5 gap-4">
          <MenuItem
            icon={
              <Img
                src="/src/assets/img_trove.svg"
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
