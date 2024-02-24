import React from "react";
import solana from "../images/icons/solana.png";
import ethActive from "../images/icons/ethActive.png";
import userImage from "../images/userImage.png";

import { trimCharsDynamic } from "../utils/utils";
import { useAppContext } from "../context/AppContext";

const UserInfo = () => {
  const { state } = useAppContext();

  return (
    <div className="flex gap-2 items-center ">
      <div className="flex flex-col ">
        <div className="flex items-center gap-2 justify-end">
          <img
            src={state?.activeNetwork === "SOL" ? solana : ethActive}
            alt=""
          />
          <span
            style={{ color: "rgba(163, 163, 163, 0.67)" }}
            className="text-[13px] font-normal tracking-[0.26px]"
          >
            CONNECTED
          </span>
        </div>
        <div className="text-[24px] font-normal ">
          {trimCharsDynamic(
            state?.activeNetwork === "SOL"
              ? state?.solAddress
              : state?.ethAddress,
            5
          )}
        </div>
      </div>
      <div>
        <img src={userImage} alt="" />
      </div>
    </div>
  );
};

export default UserInfo;
