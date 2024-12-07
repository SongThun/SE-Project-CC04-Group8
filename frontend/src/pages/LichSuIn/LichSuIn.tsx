import React from "react";
import HistoryTable from "./BangLichSuIn";
import TieuDe from "./TieuDe";
import SoToA4ConLai from "./SoToA4ConLai";
import SoToA4DaIn from "./SoToA4DaIn";
import SoToA3DaIn from "./SoToA3DaIn";

const LichSuIn = () => {
  return (
    <div className="flex h-screen w-screen flex-col justify-center items-center bg-[url('/src/assets/cse_background.png')] bg-cover bg-no-repeat">
      <div className="flex flex-col items-center gap-6">
        <div>
          <TieuDe />
        </div>
        <div className="flex flex-row w-full justify-between">
          <SoToA4ConLai />
          <SoToA4DaIn />
          <SoToA3DaIn />
        </div>
        <div className="flex flex-row w-full">
          <HistoryTable />
        </div>
      </div>
    </div>
  );
};

export default LichSuIn;
