import React, { useEffect, useState } from "react";
import LoadingComponent from "./LoadingComponent";
import MyWallet from "./MyWallet";
import ConnectEthereum from "./ConnectEthereum";
import LogoutEth from "./LogoutEth";
import LogoutSol from "./LogoutSol";

const Sign = ({ type }) => {
  // const [copyLicense, setCopyLicense] = useState(false);
  // const [copyWallet, setCopyWallet] = useState(false);

  const [solToken, setSolToken] = useState("");
  const [solAddress, setSolAddress] = useState("");

  return (
    <div
      className={`flex ${
        type == "col" ? "flex-col" : ""
      } font-inter text-white  items-center justify-center   gap-4`}
    >
      <ConnectEthereum />
      <MyWallet
        setSolToken={setSolToken}
        // setAddress={setSolAddress}
        // setLoading={setLoading}
        // saveSolanaWallet={saveSolanaWallet}
        // ethAddress={ethAddress}
        solToken={solToken}
        // setStep={setStep}
      />
      {/* <LogoutEth />
      <LogoutSol /> */}
    </div>
  );
};

export default Sign;
