import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ProductsContextProvider from "./context/product-context";
import "./index.css";
import configureStore from './hooks-store/products-store'
import App from "./App";

configureStore()

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </>
);
