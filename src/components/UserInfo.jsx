import React from "react";
import solana from "../images/icons/solana.png";
import ethActive from "../images/icons/ethActive.png";
import userImage from "../images/userImage.png";

import { trimCharsDynamic } from "../utils/utils";

const UserInfo = ({ token, address, type }) => {
  return (
    <div className="flex gap-2 items-center  w-full">
      <div className="flex flex-col ">
        <div className="flex items-center gap-2 justify-end">
          <img src={type === "SOL" ? solana : ethActive} alt="" />
          <span
            style={{ color: "rgba(163, 163, 163, 0.67)" }}
            className="text-[13px] font-normal tracking-[0.26px]"
          >
            {!token || !address ? "NOT CONNECTED" : "CONNECTED"}
          </span>
        </div>
        <div className="text-[24px] font-normal flex justify-end">
          {trimCharsDynamic(address, 5)}
        </div>
      </div>
      <div className="">
        <img src={userImage} alt="" />
      </div>
    </div>
  );
};

export default UserInfo;
