import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CryptoProvider from "./context/CryptoContext";
import NftProvider from "./context/NftContext";
import AuthProvider from "./context/AuthContext";

ReactDOM.render(
  <BrowserRouter>
    <CryptoProvider>
      <NftProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </NftProvider>
    </CryptoProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
