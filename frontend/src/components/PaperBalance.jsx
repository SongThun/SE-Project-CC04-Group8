import React from "react";

function PaperBalance(props) {
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
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            />
          </svg>

          <span className="ml-2">Số giấy còn lại</span>
        </p>
        <h3 className="ml-10 text-3xl font-bold">{props.value}</h3>
      </div>
    </div>
  );
}

export default PaperBalance;
