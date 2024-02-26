import React from "react";

import boostImage from "../../images/boostImage.svg";
import everydayMushImage from "../../images/everydayMushImage.svg";
import shroomImage from "../../images/shroomImage.svg";
const NonStakedSection = () => {
  return (
    <div
      style={{
        background: "linear-gradient(15deg, #A81AFF -0.75%, #FC1C6D 81.61%)",
        boxShadow: "0px 4px 32px 0px #000",
      }}
      className="h-[324px] w-full border border-[#FF7FBE] rounded-[10px] flex flex-col justify-start py-8 items-center font-rubik"
    >
      <div
        style={{
          textShadow: "0px 2px 4px rgba(0, 0, 0, 0.64)",
          fontStyle: "normal",
        }}
        className="text-[32px] font-medium text-center pb-4"
      >
        Boost your staking with holding both <br />
        Ethereum and Solana Mushboomers
      </div>
      <div className="text-[16px] font-normal leading-[18px] text-center">
        Unlisted Mushboomers are passively staked and generate Shrooms everyday.
        The system automatically pairs ETH & <br /> SOL Mushboomers if you are
        holding both the shroom generation rate is increased by 150% for paired
        NFTs
      </div>
      <div className="flex w-full justify-center gap-[60px]">
        <img src={boostImage} alt="" />
        <img src={everydayMushImage} alt="" />
        <img src={shroomImage} alt="" />
      </div>
    </div>
  );
};

export default NonStakedSection;
