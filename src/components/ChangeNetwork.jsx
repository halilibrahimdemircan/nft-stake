import React from "react";
import { useAppContext } from "../context/AppContext";
import solana from "../images/icons/solana.png";
import ethActive from "../images/icons/ethActive.png";
import ethPassive from "../images/icons/ethPassive.png";

const ChangeNetwork = () => {
  const { state, dispatch } = useAppContext();

  return (
    <div className="border border-[#454545] bg-[#272727] rounded-full w-[268px] h-12 flex items-center">
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
        <span>Sol NFTs</span>
      </div>
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
        <img
          src={state?.activeNetwork === "SOL" ? ethPassive : ethActive}
          alt=""
        />
        <span>ETH NFTs</span>
      </div>
    </div>
  );
};

export default ChangeNetwork;
