import React from "react";

const NamePage = ({ title }) => {
  return (
    <div className="text-4xl font-bold flex justify-center items-center pt-20 relative z-10">
      <div className="h-20 w-11/12 bg-[#25295C] p-4 text-white rounded-lg flex justify-center items-center">
        {title}
      </div>
    </div>
  );
};

export default NamePage;
