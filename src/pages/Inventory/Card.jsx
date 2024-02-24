import React from "react";
import sampleMush from "../../images/sampleMush.png";

const Card = ({ tokenId, status, image, shrooms, unlistedTime }) => {
  return (
    <div style={{ width: "164px" }} className="flex flex-col gap-[6px]">
      <div>
        <div className="bg-white text-[#111111] flex items-center justify-center w-full h-6 rounded-t-lg text-[13px] font-semibold uppercase">
          {unlistedTime?.split(",")[0]}
        </div>
        <img className="rounded-b-lg" src={image} alt="" />
      </div>
      <div className="text-[32px]">
        <span>#</span>
        <span>
          {tokenId?.length > 5 ? tokenId?.slice(0, 5) + ".." : tokenId}
        </span>
      </div>
      <div className="flex w-full justify-between items-center">
        <span className="text-[13px] text-[#7E7E7E]">SHROOMS</span>
        <span>{shrooms}</span>
      </div>

      <div
        className={`${
          status === "UNLISTED" ? "bg-[#BDFF00]" : "bg-white"
        } flex items-center w-full justify-between  text-black px-3 py-1 rounded-l-sm`}
      >
        <span className="text-[#111] font-medium text-[13px] leading-[14px]">
          {status}
        </span>
        <span className="w-4 h-4 flex items-center justify-center rounded-full">
          {status === "UNLISTED" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M5.33337 8.49992L7.02316 10.0207C7.31083 10.2796 7.75777 10.24 7.99537 9.93449L10.6667 6.49992M8.00004 15.1666C11.6819 15.1666 14.6667 12.1818 14.6667 8.49992C14.6667 4.81802 11.6819 1.83325 8.00004 1.83325C4.31814 1.83325 1.33337 4.81802 1.33337 8.49992C1.33337 12.1818 4.31814 15.1666 8.00004 15.1666Z"
                stroke="#111111"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d="M15.0417 8.51563C15.0417 12.1975 12.0569 15.1823 8.37504 15.1823C4.69314 15.1823 1.70837 12.1975 1.70837 8.51563C1.70837 4.83373 4.69314 1.84896 8.37504 1.84896C12.0569 1.84896 15.0417 4.83373 15.0417 8.51563Z"
                stroke="#111111"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.9283 11.0689L5.89277 6.0334M5.89277 11.0689L10.9283 6.0334"
                stroke="#111111"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
        </span>
      </div>
    </div>
  );
};

export default Card;
