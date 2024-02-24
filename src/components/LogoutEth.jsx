import React from "react";
import { useAppContext } from "../context/AppContext";

const LogoutEth = () => {
  const { dispatch } = useAppContext();

  const logoutEth = () => {
    localStorage.removeItem("initEthAddress"),
      localStorage.removeItem("initEthToken"),
      dispatch({ type: "LOGOUTETH" });
  };
  return (
    <div
      className="border whitespace-nowrap px-4 h-12 rounded-lg flex items-center justify-start min-w-[200px]"
      onClick={() => logoutEth()}
    >
      Logout Eth
    </div>
  );
};

export default LogoutEth;
