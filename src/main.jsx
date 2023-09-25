import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CryptoProvider from "./context/CryptoContext";
import NftProvider from "./context/NftContext";
import AuthProvider from "./context/AuthContext";
import CartProvider from "./context/CartContext";

ReactDOM.render(
  <BrowserRouter>
    <CryptoProvider>
      <NftProvider>
        <AuthProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </AuthProvider>
      </NftProvider>
    </CryptoProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
