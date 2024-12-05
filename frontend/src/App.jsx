import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";
import "./index.css";
import { useAuth } from "./context/AuthContext"; 

const App = () => {
  return (
    <>
      <main>
        {/* <Navbar /> */}
        {console.log("App.jsx")}
        <Outlet />
      </main>
    </>
  );
};

export default App;
