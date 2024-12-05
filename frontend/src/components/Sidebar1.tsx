import { Img } from "./Img";
import React from "react";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

interface Props {
  className?: string;
}

export default function Sidebar1({ ...props }: Props) {
  const [collapsed, setCollapsed] = React.useState(false);

  // Function to toggle collapse/expand the sidebar
  // const collapseSidebar = () => {
  //   setCollapsed(!collapsed);
  // };

  return (
    <Sidebar
      {...props}
      width="126px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      className={`hide-scrollbar ${props.className} flex flex-col h-screen pt-2.5 top-0 px-2.5 bg-[#141960] !sticky overflow-auto`}
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
        className="w-full self-stretch pb-2.5"
      >
        <div className="flex flex-col gap-2">
          <MenuItem
            icon={
              <Img
                src="images/img_pinterest.svg"
                alt="Pinterest Icon"
                className="h-[24px] w-[24px]"
              />
            }
          >
            Máy in
          </MenuItem>
          <MenuItem
            icon={
              <Img
                src="images/img_filter.svg"
                alt="Filter Icon"
                className="h-[24px] w-[24px]"
              />
            }
          >
            Tùy chọn
          </MenuItem>
          <MenuItem
            icon={
              <Img
                src="images/img_user.svg"
                alt="User Icon"
                className="h-[24px] w-[24px]"
              />
            }
          >
            Tổng quan
          </MenuItem>
        </div>
        <div className="mt-2.5 h-[666px] bg-[#141960]" />
        <div>
          <MenuItem
            icon={
              <Img
                src="images/img_arrow_down.svg"
                alt="Arrowdown Icon"
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
