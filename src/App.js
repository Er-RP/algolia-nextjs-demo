import React from "react";
import "instantsearch.css/themes/satellite.css";
import '@algolia/autocomplete-theme-classic';
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import ThemeToggleFAB from "./components/theme";

const App = () => {
  return (
    <div className="flex min-h-svh flex-col bg-background">
      <Header />
      <div className="grow min-h-96 px-6">
        <Outlet />
      </div>
      <Footer />
      <ThemeToggleFAB />
    </div>
  );
};

export default App;
