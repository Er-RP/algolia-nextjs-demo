import React from "react";
import "instantsearch.css/themes/satellite.css";
import {Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="flex min-h-svh flex-col">  
      <Header/>
      <div className="grow min-h-96">
      <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default App;
