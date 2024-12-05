import React from "react";

function AccountBalance(props) {
  return (
    <div>
      <div className="h-24 w-[500px] flex-col rounded-lg bg-white p-4 text-black flex ">
        <p className="flex space-x-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
            />
          </svg>
          <span className="ml-2">Số dư tài khoản</span>
        </p>
        <h3 className="ml-10 text-3xl font-bold">{props.value}</h3>
      </div>
    </div>
  );
}

export default AccountBalance;
