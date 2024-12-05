import React from "react";
import backgroundImage from "../assets/cse_background.png"; // Import the image

const PaperPurchaseHome = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use the imported image
        backgroundSize: "cover", // Cover the whole div
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent image repetition
        height: "100vh", // Full viewport height
        width: "100vw", // Full viewport width
      }}
    >
      <h1
        style={{
          color: "white", // Corrected: change the text color to white
        }}
      >
        Welcome to My Website
      </h1>
    </div>
  );
};

export default PaperPurchaseHome;
