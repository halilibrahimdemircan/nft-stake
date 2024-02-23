import React, { useEffect, useState } from "react";
import LoadingComponent from "./LoadingComponent";
import MyWallet from "./MyWallet";
import ConnectEthereum from "./ConnectEthereum";

const Sign = () => {
  // const [copyLicense, setCopyLicense] = useState(false);
  // const [copyWallet, setCopyWallet] = useState(false);

  const [solToken, setSolToken] = useState("");
  const [solAddress, setSolAddress] = useState("");

  return (
    <div className="font-inter text-white flex items-center justify-center  gap-4">
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
    </div>
  );
};

export default Sign;
