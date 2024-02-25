import React from "react";
import { useAppContext } from "../context/AppContext";

const LogoutSol = () => {
  const { dispatch } = useAppContext();

  const logoutSol = () => {
    localStorage.removeItem("initSolAddress"),
      localStorage.removeItem("initSolToken"),
      dispatch({ type: "LOGOUTSOL" });
  };
  return (
    <div
      className="border whitespace-nowrap px-4 h-12 rounded-lg flex items-center justify-start w-[200px] cursor-pointer"
      onClick={() => logoutSol()}
    >
      Logout Sol
    </div>
  );
};

export default LogoutSol;
