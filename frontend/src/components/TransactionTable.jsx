import React, { useState } from "react";

function TransactionTable({ transactions = [] }) {
  // State to manage the selected transaction type
  const [selectedType, setSelectedType] = useState(""); // Empty string means no filter

  // Filter transactions based on the selected type
  const filteredTransactions = selectedType
    ? transactions.filter((transaction) => transaction.type === selectedType)
    : transactions;

  return (
    <div className="mx-auto max-w-7xl rounded-lg bg-white">
      {/* Dropdown for selecting transaction type */}
      <div className="flex justify-end mb-4">
        <select
          className="mt-2 mr-4 border border-gray-300 rounded-md p-2"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">Loại giao dịch : Tất cả</option>
          <option value="Nạp tiền">Loại giao dịch : Nạp tiền</option>
          <option value="Mua giấy">Loại giao dịch : Mua giấy</option>
        </select>
      </div>

      {/* Transaction Table */}
      <table className="min-w-full table-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">
              Loại giao dịch
            </th>
            <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">
              Thời gian
            </th>
            <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">
              Số tiền
            </th>
            <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">
              Chi tiết
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="py-2 px-4 text-sm">{transaction.type}</td>
              <td className="py-2 px-4 text-sm">{transaction.time}</td>
              <td className="py-2 px-4 text-sm">{transaction.amount}</td>
              <td className="py-2 px-4 text-sm">{transaction.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
