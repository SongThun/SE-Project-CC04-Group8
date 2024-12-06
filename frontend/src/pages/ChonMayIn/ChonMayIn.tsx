import React from "react";
import { Img } from "../../components/Img";
import PhanChonMayIn from "./PhanChonMayIn";
import Sidebar1 from "../../components/Sidebar1";

export default function ChonMayIn() {
  return (
    <div className="flex h-screen w-screen bg-black">
      <div className="flex flex-col h-[1117px] w-[1735px] bg-[#AAB1D1]">
        <div className="flex h-[82px] w-[1735] bg-red-500">
          {/* Header Here */}
        </div>
        <div className="flex-1 flex flex-row bg-amber-200">
          {/* Delete BG*/}
          <div className="flex h-full w-[125px]">
            {/* Sidebar Here*/}
            <Sidebar1 />
          </div>
          <div className="flex-1 flex flex-col bg-[#F2F6FF]">
            {/* Picture Here*/}
            <div className="flex-1 flex flex-col items-center justify-center">
              <Img
                src="images/img_document_img.png"
                alt="Document Image"
                className="h-[514px] w-[38%] object-contain"
              />
              <div className="flex justify-center self-stretch p-3">
                <span className="text-[16px] font-medium text-[#aab1d1]">
                  Assignment 2-Network Design For A Company.pdf (418 kB)
                </span>
              </div>
            </div>
          </div>
          <div className="flex h-full w-[664px] bg-violet-500">
            {/* Lua Chon May In Here*/}
            <div className="h-full w-[664px] self-center bg-[#f5f5f5] shadow-[0_4px_4px_0_#0000007f]">
              <PhanChonMayIn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
