import React, { useState } from "react";
import backgroundImage from "../assets/cse_background.png";
import TransactionTable from "../components/TransactionTable";
import AccountBalance from "../components/AccountBalance";
import PaperBalance from "../components/PaperBalance";
import NamePage from "../components/NamePage";
import PayPaperBoard from "../components/PayPaperBoard";
import TopUpBoard from "../components/TopUpBoard";

const PaperPurchase = () => {
  // State for account balance and paper balance
  const [accountBalance, setAccountBalance] = useState(10000); // Starting balance: 10,000
  const [paperBalance, setPaperBalance] = useState(100); // Starting paper: 100

  // State for transaction history
  const [transactions, setTransactions] = useState([
    {
      type: "Nạp tiền",
      time: "Sep 9, 2024, 04:30pm",
      amount: "100.000đ",
      details: "Nạp 100.000đ",
    },
    {
      type: "Mua giấy",
      time: "Sep 9, 2024, 04:30pm",
      amount: "100.000đ",
      details: "Mua 100 tờ loại A4",
    },
    // Add more transactions as needed
  ]);

  // Function to add a new transaction
  const addTransaction = (type, amount, details) => {
    const newTransaction = {
      type,
      time: new Date().toLocaleString(), // Get the current time
      amount: `${amount.toLocaleString()}đ`, // Format the amount with currency
      details,
    };
    setTransactions((prevTransactions) => [
      newTransaction,
      ...prevTransactions,
    ]); // Add new transaction to the top
  };

  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-no-repeat flex-col space-y-8"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <NamePage title="Lịch sử giao dịch" />

      <div className="max-w-[80vw] mx-auto flex space-x-10 justify-center items-center">
        {/* Account Balance and Paper Balance */}
        <AccountBalance value={accountBalance} />
        <PaperBalance value={paperBalance} />

        <div className="flex flex-col space-y-4">
          {/* Pay for Paper and TopUp Buttons */}
          <PayPaperBoard
            accountBalance={accountBalance}
            setAccountBalance={setAccountBalance}
            remainingPaper={paperBalance}
            setPaperBalance={setPaperBalance}
            addTransaction={addTransaction}
          />
          <TopUpBoard
            setAccountBalance={setAccountBalance}
            addTransaction={addTransaction}
          />
        </div>
      </div>

      {/* Transaction table displays updated transaction list */}
      <TransactionTable transactions={transactions} />
    </div>
  );
};

export default PaperPurchase;
