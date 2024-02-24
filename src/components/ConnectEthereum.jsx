import React, { useEffect, useState } from "react";
import { signAddressComplete, signAddressStart } from "../apiCalls/sign";
import { useAppContext } from "../context/AppContext";
import LogoutEth from "./LogoutEth";

const ConnectEthereum = () => {
  const [ethAddress, setEthAddress] = useState("");
  const [ethToken, setEthToken] = useState("");
  const [connectedWallet, setConnectedWallet] = useState("");
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    async function getConnectedWallet() {
      var userSelectedAddress = await getUserSelectedAddress();

      console.log(userSelectedAddress[0]);
      setConnectedWallet(userSelectedAddress[0]);
    }
    if (window.ethereum) {
      getConnectedWallet();
    }
  }, [window.ethereum]);

  //#region copy funcs
  // const handleCopyLicense = () => {
  //   setCopyLicense(true);
  //   setTimeout(() => {
  //     setCopyLicense(false);
  //   }, 5000);
  // };
  // const handleCopyWallet = () => {
  //   setCopyWallet(true);
  //   setTimeout(() => {
  //     setCopyWallet(false);
  //   }, 5000);
  // };
  //#endregion

  useEffect(() => {
    if (window?.ethereum) {
      window.ethereum.on("accountsChanged", function (accounts) {
        setConnectedWallet(accounts[0]);
      });
    }
  }, []);

  const getUserSelectedAddress = async () => {
    // @ts-ignore
    if (window.ethereum) {
      // res[0] for fetching a first wallet
      window.ethereum.request({ method: "eth_requestAccounts" });
      return window.ethereum.request({ method: "eth_accounts" });
    } else {
      alert("install metamask extension!!");
    }
  };

  async function signIn(slotNumber) {
    slotNumber = 1;
    var userSelectedAddress = await getUserSelectedAddress();

    if (userSelectedAddress?.length > 0) {
      userSelectedAddress = userSelectedAddress[0];
    } else {
      userSelectedAddress = undefined;
    }

    const startData = await signAddressStart(
      userSelectedAddress,
      slotNumber
    ).then((startData) => startData);
    if (startData.success) {
      let signature = await window.ethereum.request({
        method: "personal_sign",
        params: [
          `NFTinit.com verification code : ${startData.temp_password}`,
          userSelectedAddress,
        ],
      });

      const completeData = await signAddressComplete(
        startData.address,
        startData.temp_password,
        signature,
        1
      ).then((completeData) => {
        if (completeData.success) {
          setEthAddress(completeData?.address);
          setEthToken(completeData?.token);
          dispatch({
            type: "SETETHCREDENTIALS",
            payload: {
              ethAddress: completeData?.address,
              ethToken: completeData?.token,
            },
          });
          // setStep(2);
          localStorage.setItem("initEthAddress", completeData?.address);
          localStorage.setItem("initEthToken", completeData?.token);
        }
      });
    } else {
      return { success: false, message: startData.error_message };
    }
  }
  return (
    <>
      {state?.ethToken && state?.ethAddress ? (
        <LogoutEth />
      ) : (
        <div
          style={{
            borderRadius: "8px",
            border: "0.6px solid #868686",
            background: "rgba(56, 56, 56, 0.86)",
          }}
          className="flex gap-4 items-center whitespace-nowrap border h-12 px-3 rounded-lg font-normal"
        >
          {/* <div
      >
        Connected Eth Wallet:{" "}
        {connectedWallet?.slice(0, 6) +
          "..." +
          connectedWallet?.slice(
            connectedWallet?.length - 4,
            connectedWallet?.length
          )}
      </div> */}
          <span>{ethSvg()}</span>
          <button className="" onClick={signIn}>
            Sign with Ethereum
          </button>
        </div>
      )}
    </>
  );
};

export default ConnectEthereum;

const ethSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="16"
      viewBox="0 0 10 16"
      fill="none"
    >
      <path
        d="M4.99974 5.91486L0 8.14901L4.99974 11.0513L9.99751 8.14901L4.99974 5.91486Z"
        fill="white"
      />
      <path d="M0 8.15069L4.99974 11.053V0L0 8.15069Z" fill="#7A797A" />
      <path d="M4.99951 0V11.053L9.99728 8.15069L4.99951 0Z" fill="#F4F4F4" />
      <path d="M0 9.07935L4.99974 16V11.9816L0 9.07935Z" fill="#7A797A" />
      <path
        d="M4.99951 11.9816V16L10.0012 9.07935L4.99951 11.9816Z"
        fill="#EDEDED"
      />
    </svg>
  );
};
