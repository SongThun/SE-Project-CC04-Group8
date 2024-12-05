import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";
import "./index.css";

const App = () => {
  return (
    <>
      <main>
        <Navbar />
        {console.log("App.jsx")}
        <Outlet />
      </main>
    </>
  );
};

export default App;
