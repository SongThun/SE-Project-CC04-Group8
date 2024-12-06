import React from "react";
import headerImage from "../assets/header_background.png"

const Header = ({ title }) => {
  return (
    <div 
      className="p-10 rounded-xl items-center flex justify-center"
			style={{ backgroundImage: `url(${headerImage})` }}
    >
			<div className="text-center text-white font-bold text-4xl">
				{title}
			</div>
    </div>
  );
};

export default Header;