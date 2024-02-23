// AppContext.js

import React, { createContext, useContext, useReducer } from "react";

// Context oluşturulması
const AppContext = createContext();

// İlk durum (initial state)
const initialState = {
  ethToken: localStorage.getItem("initEthToken") || "",
  solToken: localStorage.getItem("initSolToken") || "",
  ethAddress: localStorage.getItem("initEthAddress") || "",
  solAddress: localStorage.getItem("initSolAddress") || "",
  activeNetwork: "",
};

// Reducer fonksiyonu
const reducer = (state, action) => {
  switch (action.type) {
    case "SETETHCREDENTIALS":
      return {
        ...state,
        ethToken: action.payload.ethToken,
        ethAddress: action.payload.ethAddress,
      };
    case "SETSOLCREDENTIALS":
      return {
        ...state,
        solToken: action.payload.solToken,
        solAddress: action.payload.solAddress,
      };
    case "LOGOUTETH":
      return { ...state, ethToken: "", ethAddress: "" };
    case "LOGOUTSOL":
      return { ...state, solToken: "", solAddress: "" };
    case "SETNETWORK":
      return { ...state, activeNetwork: action.payload };
    default:
      return state;
  }
};

// Context Provider bileşeni
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook oluşturulması
export const useAppContext = () => {
  return useContext(AppContext);
};
