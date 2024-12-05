import React, { useState, useEffect } from "react";
import pic1 from "../assets/home1.png";
import pic2 from "../assets/home2.png";
import pic3 from "../assets/home3.png";
import pic4 from "../assets/home4.png";

const Home = () => {
  const pictures = [pic1, pic2, pic3, pic4];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [pictures.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {pictures.map((pic, index) => (
          <div key={index} className="w-full h-screen relative flex-shrink-0">
            <img
              src={pic}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
              style={{ transition: "transform 1.5s ease-in-out" }}
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {pictures.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 bg-white rounded-full cursor-pointer ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Home;
