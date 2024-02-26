import React, { useState } from "react";
import MyWallet from "./MyWallet";
import ConnectEthereum from "./ConnectEthereum";

const Sign = ({ type }) => {
  return (
    <div
      className={`flex ${
        type == "col" ? "flex-col" : ""
      } font-inter text-white  items-center justify-center   gap-4`}
    >
      <ConnectEthereum />
      <MyWallet />
    </div>
  );
};

export default Sign;
