import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";
import "./index.css";
import { useAuth } from "./context/AuthContext"; 
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <main>
        {/* <Navbar /> */}
        <Outlet />
        <Footer/>
      </main>
    </>
  );
};

export default App;
