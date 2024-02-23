import React, { useState } from "react";
import solanaIcon from "../images/icons/solana.png";
import solanaWhite from "../images/icons/solanaWhite.png";

const ConnectSolana = ({ connected }) => {
  const [over, setOver] = useState(false);

  return (
    <button
      onMouseOver={() => setOver(true)}
      onMouseOut={() => setOver(false)}
      className="solanaButton gap-2"
    >
      <img className="" src={over ? solanaWhite : solanaIcon} alt="" />
      <span>{connected ? "Sign with" : "Connect"} Solana</span>
    </button>
  );
};

export default ConnectSolana;
