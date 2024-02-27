import React from "react";

import solanaGray from "../images/icons/solanaGray.svg";

const ConnectSolanaNoStake = ({}) => {
  return (
    <>
      {
        <button
          style={{
            background:
              "linear-gradient(91deg, #FAFF1A -0.78%, #FC1C7A 101.55%)",
            transform: "rotate(1.798deg)",
            boxShadow: "0px 8px 0px 0px #932677",
            textShadow: "0px 2px 0px rgba(251, 241, 33, 0.32)",
          }}
          type="button"
          className="border border-[#F570FF] min-w-[247px] inline-flex justify-center items-center gap-2 rounded-lg  px-3 py-2 text-[18px] leading-[32px] font-semibold text-[#252525] shadow-sm sm:ml-3 sm:w-auto"
          // onClick={}
        >
          <div
            className="flex items-center justify-center gap-2"
            style={{ transform: "rotate(-2deg)" }}
          >
            <img src={solanaGray} alt="" />

            <span>CONNECT WALLET</span>
          </div>
        </button>
      }
    </>
  );
};

export default ConnectSolanaNoStake;
