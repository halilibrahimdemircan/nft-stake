import React from "react";
import sampleMush from "../../images/sampleMush.png";

const Card = ({ tokenId, status }) => {
  return (
    <div style={{ width: "164px" }} className="flex flex-col gap-[18px]">
      <div>
        <img src={sampleMush} alt="" />
      </div>
      <div>
        <span>#</span>
        <span>{tokenId}</span>
      </div>
      <div className="flex items-center w-full justify-between bg-white text-black px-3 py-1">
        <span className="text-[#111] font-semibold text-[13px] leading-[14px]">
          {status}
        </span>
        <span className="border w-4 h-4 flex items-center justify-center rounded-full">
          x
        </span>
      </div>
    </div>
  );
};

export default Card;
