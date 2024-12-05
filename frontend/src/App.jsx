import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";
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
