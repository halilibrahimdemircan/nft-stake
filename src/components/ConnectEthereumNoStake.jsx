import React, { useEffect, useState } from "react";
import { signAddressComplete, signAddressStart } from "../apiCalls/sign";
import { useAppContext } from "../context/AppContext";

import ethGray from "../images/icons/ethGray.svg";

const ConnectEthereumNoStake = () => {
  const [ethAddress, setEthAddress] = useState("");
  const [ethToken, setEthToken] = useState("");
  const [connectedWallet, setConnectedWallet] = useState("");
  const { dispatch } = useAppContext();

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
      {
        <button
          style={{
            background:
              "linear-gradient(91deg, #FAFF1A -0.78%, #FC1C7A 101.55%)",
            transform: "rotate(1.798deg)",
            boxShadow: "0px 8px 0px 0px #932677",
            textShadow: "0px 2px 0px rgba(251, 241, 33, 0.32)",
          }}
          type="button"
          className="border border-[#F570FF] min-w-[247px] inline-flex justify-center items-center gap-2 rounded-lg  px-3 py-2 text-[18px] leading-[32px] font-semibold text-[#252525] shadow-sm sm:ml-3 sm:w-auto"
          onClick={signIn}
        >
          <div
            className="flex items-center justify-center gap-2"
            style={{ transform: "rotate(-2deg)" }}
          >
            <img src={ethGray} alt="" />

            <span>CONNECT WALLET</span>
          </div>
        </button>
      }
    </>
  );
};

export default ConnectEthereumNoStake;
