import React, { useState } from "react";

const PayPaperBoard = ({
  accountBalance,
  setAccountBalance,
  remainingPaper,
  setPaperBalance,
  addTransaction,
}) => {
  const [quantity, setQuantity] = useState(15);
  const unitPrice = 1000;
  const total = quantity * unitPrice;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10) || 1); // Ensure quantity is an integer, default to 1 if invalid input
  };

  const handlePurchase = () => {
    if (accountBalance >= total) {
      setAccountBalance((prevBalance) => prevBalance - total);
      setPaperBalance((prevPaper) => prevPaper + quantity);

      // Add a transaction for paper purchase
      addTransaction("Mua giấy", total, `Mua ${quantity} tờ`);

      closeModal();
    } else {
      alert("Số dư tài khoản không đủ.");
    }
  };

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <div className="relative">
      <button
        onClick={openModal}
        className="bg-blue-500 h-10 text-white p-4 rounded-lg flex justify-center items-center"
      >
        Mua giấy
      </button>

      {isModalVisible && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-50 z-50">
          <div className="bg-[#25295C] p-8 rounded-lg w-[600px] flex justify-between items-center">
            <div className="text-white w-2/3">
              <h2 className="text-2xl font-semibold mb-4">Mua giấy</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Số lượng tờ:</span>
                  <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-20 p-2 rounded-lg text-black"
                  />
                </div>
                <div className="flex justify-between">
                  <span>Đơn giá:</span>
                  <span>1.000đ</span>
                </div>
                <div className="flex justify-between">
                  <span>Tổng:</span>
                  <span>{total.toLocaleString()}đ</span>
                </div>
              </div>
            </div>

            <div className="text-white w-1/3 ml-4 border-l-2 pl-4">
              <div className="mb-6">
                <span className="block">Số dư tài khoản</span>
                <span className="text-lg font-bold">
                  {accountBalance.toLocaleString()}đ
                </span>
              </div>
              <div>
                <span className="block">Số giấy còn lại</span>
                <span className="text-lg font-bold">{remainingPaper} tờ</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-0 right-0 text-center">
            <h3 className="text-white mb-4">Xác nhận thanh toán?</h3>
            <div className="flex justify-center space-x-4">
              <button
                onClick={closeModal}
                className="bg-gray-300 text-black p-2 rounded-lg w-24"
              >
                Hủy
              </button>
              <button
                onClick={handlePurchase}
                className="bg-blue-500 text-white p-2 rounded-lg w-24"
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PayPaperBoard;
