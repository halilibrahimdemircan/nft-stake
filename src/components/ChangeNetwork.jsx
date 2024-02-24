import React from "react";
import { useAppContext } from "../context/AppContext";
import solana from "../images/icons/solanaWhite.png";
import ethActive from "../images/icons/ethActive.png";
import ethPassive from "../images/icons/ethPassive.png";

const ChangeNetwork = () => {
  const { state, dispatch } = useAppContext();
  const handleChangeNetwork = (e) => {
    if (state.activeNetwork === "SOL") {
      dispatch({
        type: "SETNETWORK",
        payload: "ETH",
      });
    } else {
      dispatch({
        type: "SETNETWORK",
        payload: "SOL",
      });
    }
  };

  return (
    <div
      onClick={() => handleChangeNetwork()}
      className="border border-[#454545] bg-[#272727] rounded-full w-[268px] h-12 flex items-center justify-center cursor-pointer "
    >
      <div
        style={{
          border: state?.activeNetwork === "SOL" ? "1px solid #FBE7FF" : "",
          borderRadius: "256px",
          background:
            state?.activeNetwork === "SOL"
              ? "linear-gradient(93deg, #14ECAB 0%, #C03CF4 53.86%, #DB5CFF 99.62%)"
              : "",
          boxShadow:
            state?.activeNetwork === "SOL"
              ? "0px 4px 16px 0px rgba(75, 181, 195, 0.48)"
              : "",
        }}
        className="flex  w-[128px] h-10 items-center justify-center gap-4"
      >
        <img src={solana} alt="" />
        <span
          className={`${
            state?.activeNetwork === "SOL" ? "text-white" : "text-[#A7A7A7]"
          }`}
        >
          Sol NFTs
        </span>
      </div>
      <div
        style={{
          border: state?.activeNetwork === "ETH" ? "1px solid #B1B1B1" : "",
          borderRadius: "256px",
          background: state?.activeNetwork === "ETH" ? "#5C5C5C" : "",
          boxShadow:
            state?.activeNetwork === "ETH"
              ? "0px 4px 16px 0px rgba(98, 98, 98, 0.48)"
              : "",
        }}
        className="flex  w-[128px] h-10 items-center justify-center gap-4"
      >
        <img
          src={state?.activeNetwork === "SOL" ? ethPassive : ethActive}
          alt=""
        />
        <span
          className={`${
            state?.activeNetwork === "ETH" ? "text-white" : "text-[#A7A7A7]"
          }`}
        >
          ETH NFTs
        </span>
      </div>
    </div>
  );
};

export default ChangeNetwork;
