import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import "./index.css";
import { AppProvider } from "./context/AppContext";

function getLibrary(provider) {
  return new Web3Provider(provider);
}

ReactDOM.render(
  <AppProvider>
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </AppProvider>,
  document.getElementById("app")
);
