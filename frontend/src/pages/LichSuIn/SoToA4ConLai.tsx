import React from "react";

function SoToA4ConLai() {
  return (
    <div>
      <div className="flex flex-row h-[10vh] w-[23vw] items-center rounded-xl bg-white p-6 text-black gap-4">
        <div className="flex h-[56px] w-[56px] rounded-full  items-center justify-center bg-[#1488DB] bg-opacity-25">
          <svg
            fill="#000000"
            height="28px"
            width="40px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 204.376 204.376"
          >
            <path
              d="M110.397,47.736V0H33.13c-2.485,0-4.5,2.015-4.5,4.5v195.376c0,2.485,2.015,4.5,4.5,4.5h138.117c2.485,0,4.5-2.015,4.5-4.5
	V61.35h-51.744C116.501,61.35,110.397,55.243,110.397,47.736z M108.499,168.626h-46.5v-10h46.5V168.626z M143.499,143.626h-81.5v-10
	h81.5V143.626z M143.499,118.627h-81.5v-10h81.5V118.627z M143.499,93.627h-81.5v-10h81.5V93.627z M120.397,47.736v-37.34
	L164.2,51.35h-40.197C122.014,51.35,120.397,49.729,120.397,47.736z"
            />
          </svg>
        </div>

        <div className="flex flex-col h-[60px] w-[180px] gap-2 justify-start">
          <div>
            <span className="text-[16px] font-medium text-[#737375]">
              Số tờ loại A4 còn lại
            </span>
          </div>

          <div>
            <span className="text-[24px] font-bold">15 tờ</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SoToA4ConLai;
