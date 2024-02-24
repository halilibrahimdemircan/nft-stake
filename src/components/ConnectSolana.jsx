import React, { useState } from "react";
import solanaIcon from "../images/icons/solana.png";
import solanaWhite from "../images/icons/solanaWhite.png";
import { useAppContext } from "../context/AppContext";
import LogoutSol from "./LogoutSol";

const ConnectSolana = ({ connected }) => {
  const { state } = useAppContext();

  const [over, setOver] = useState(false);
  state;
  return (
    <>
      {state?.solToken && state?.solAddress ? (
        <LogoutSol />
      ) : (
        <button
          onMouseOver={() => setOver(true)}
          onMouseOut={() => setOver(false)}
          className="solanaButton gap-2 w-[200px]"
        >
          <img className="" src={over ? solanaWhite : solanaIcon} alt="" />
          <span>{connected ? "Sign with" : "Connect"} Solana</span>
        </button>
      )}
    </>
  );
};

export default ConnectSolana;
