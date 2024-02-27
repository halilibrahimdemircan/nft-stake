import React from "react";
import tensorIcon from "../images/icons/tensorIcon.svg";
import blurIcon from "../images/icons/blurIcon.svg";
import { useAppContext } from "../context/AppContext";

const GetMushboomersButton = ({ type }) => {
  const { state } = useAppContext();

  return (
    <button
      style={{
        background: "linear-gradient(92deg, #38005A -0.77%, #2C151E 100.54%)",
        boxShadow: "0px 8px 0px 0px #932677",
        transform: "rotate(1.536deg)",
      }}
      type="button"
      className="border border-[#F570FF] inline-flex w-full justify-center items-center gap-2 rounded-lg  px-3 py-2 text-[18px] leading-[32px] font-semibold text-white shadow-sm  sm:ml-3 sm:w-auto"
      onClick={() => {
        if (type === "ETH") {
          window?.open("https://blur.io/collection/mushboomers", "_blank");
        } else if (type === "SOL") {
          window?.open("https://www.tensor.trade/trade/mushboomers", "_blank");
        }
      }}
    >
      <div
        className="flex items-center justify-center gap-2"
        style={{ transform: "rotate(-2deg)" }}
      >
        <img
          src={type === "ETH" ? blurIcon : type === "SOL" ? tensorIcon : ""}
          alt=""
        />
        <span>GET MUSHBOOMERS</span>
      </div>
    </button>
  );
};

export default GetMushboomersButton;
