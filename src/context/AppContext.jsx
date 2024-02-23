// AppContext.js

import React, { createContext, useContext, useReducer } from "react";

// Context oluşturulması
const AppContext = createContext();

// İlk durum (initial state)
const initialState = {
  counter: 0,
};

// Reducer fonksiyonu
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
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
