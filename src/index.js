import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import router from "./utils/router";
import CategoriesProvider from "./utils/context/useCategories";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CategoriesProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </CategoriesProvider>
  </React.StrictMode>
);
