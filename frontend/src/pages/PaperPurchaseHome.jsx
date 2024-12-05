import React from "react";
import backgroundImage from "../assets/cse_background.png"; // Import the image
import TransactionTable from "../components/TransactionTable";

const PaperPurchaseHome = () => {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-no-repeat flex flex-col space-y-4"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Background image still needs to be in inline style for local image
      }}
    >
      <div className="text-white text-4xl font-bold flex justify-center items-center pt-20 z-10 relative">
        <div className="h-20 w-11/12 flex-col rounded-lg bg-[#25295C] p-4 text-white flex justify-center items-center">
          Lịch sử giao dịch
        </div>
      </div>

      <div className="flex space-x-10 justify-center items-center">
        <div className="h-24 w-[430px] flex-col rounded-lg bg-white p-4 text-black flex ">
          <h5>Số dư tài khoản</h5>
        </div>
        <div className="h-24 w-[430px] flex-col rounded-lg bg-white p-4 text-black flex ">
          <h5>Số giấy còn lại</h5>
        </div>
        <div className="flex flex-col space-y-4">
          <button className="h-10 w-[430px] flex-col rounded-lg bg-blue-500 text-white p-4 text-black flex justify-center items-center hover:bg-blue-600">
            <h5>Mua thêm giấy</h5>
          </button>
          <button className="h-10 w-[430px] flex-col rounded-lg bg-blue-500 text-white p-4 text-black flex justify-center items-center hover:bg-blue-600">
            <h5>Nạp thêm giấy</h5>
          </button>
        </div>
      </div>

      <TransactionTable />
    </div>
  );
};

export default PaperPurchaseHome;
