import React, { useState } from "react";

const TopUpBoard = ({ setAccountBalance, addTransaction }) => {
  const [topUpAmount, setTopUpAmount] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleTopUp = () => {
    const amount = Number(topUpAmount);
    setAccountBalance((prevBalance) => prevBalance + amount);

    // Add a transaction for the top-up
    addTransaction("Nạp tiền", amount, `Nạp ${amount.toLocaleString()}đ`);

    closeModal();
  };

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <div className="relative">
      <button
        onClick={openModal}
        className="bg-green-500 h-10 text-white p-4 rounded-lg flex justify-center items-center"
      >
        Nạp thêm tiền
      </button>

      {isModalVisible && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-[400px] text-center">
            <h2 className="text-xl font-semibold mb-4">
              Nạp tiền vào tài khoản
            </h2>
            <input
              type="number"
              placeholder="Nhập số tiền"
              value={topUpAmount}
              onChange={(e) => setTopUpAmount(e.target.value)}
              className="w-full p-2 border rounded-lg mb-4 text-black"
            />
            <div className="flex justify-between space-x-4">
              <button
                onClick={closeModal}
                className="bg-gray-300 text-black p-2 rounded-lg w-24"
              >
                Hủy
              </button>
              <button
                onClick={handleTopUp}
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

export default TopUpBoard;
