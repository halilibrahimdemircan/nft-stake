import React, { useEffect, useState } from "react";
import LoadingComponent from "./LoadingComponent";
import MyWallet from "./MyWallet";

import { WalletDisconnectButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

import { signAddressComplete, signAddressStart } from "../apiCalls/sign";

const DesktopLicense = () => {
  // const [copyLicense, setCopyLicense] = useState(false);
  // const [copyWallet, setCopyWallet] = useState(false);

  const [solToken, setSolToken] = useState("");
  const [ethToken, setEthToken] = useState("");
  const [ethAddress, setEthAddress] = useState("");
  const [solAddress, setSolAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const [connectedWallet, setConnectedWallet] = useState("");

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

  const [links, setLinks] = useState({
    macos_link: "",
    macos_uni_link: "",
    windows_link: "",
  });
  const wallet = useWallet();
  //#region cop funcs
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
          // setStep(2);
          localStorage.setItem("initEthAddress", completeData?.address);
          localStorage.setItem("initEthToken", completeData?.token);
        }
      });
    } else {
      return { success: false, message: startData.error_message };
    }
  }

  useEffect(() => {
    const getVersion = () => {
      // 'http://localhost:8000/api/desktop_version/'
      // 'https://api.nftinit.io/api/desktop_version/'
      fetch("https://api.nftinit.io/api/desktop_version/", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) =>
          setLinks({
            macos_link: data.macos_link,
            macos_uni_link: data.macos_uni_link,
            windows_link: data.windows_link,
          })
        );
    };
    try {
      getVersion();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div
      style={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
      //   className="text-white flex flex-col items-center justify-start w-full h-full bg-d-dark-60"
    >
      <div
        style={{
          padding: "24px",
          fontFamily: "sans-serif",
          display: "flex",
          flexDirection: "column",
          gap: "36px",
          justifyContent: "center",
          alignItems: "center",
        }}
        // className="px-16 py-6 font-inter flex flex-col gap-9"
      >
        {
          <div
            style={{
              // border: "1px solid red",

              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {loading ? (
              <LoadingComponent />
            ) : (
              <div className="border">
                {
                  <div>
                    <div
                      style={{
                        marginBottom: "20px",

                        fontSize: "14px",
                        lineHeight: "16px",
                        fontWeight: "400",
                        color: "gray",
                      }}
                    >
                      Connected Eth Wallet:{" "}
                      {connectedWallet?.slice(0, 6) +
                        "..." +
                        connectedWallet?.slice(
                          connectedWallet?.length - 4,
                          connectedWallet?.length
                        )}
                    </div>
                    <button className="border" onClick={signIn}>
                      Connect Eth Wallet
                    </button>
                  </div>
                }
                {
                  <MyWallet
                    setToken={setSolToken}
                    setAddress={setSolAddress}
                    setLoading={setLoading}
                    // saveSolanaWallet={saveSolanaWallet}
                    ethAddress={ethAddress}
                    ethToken={ethToken}
                    // setStep={setStep}
                  />
                }
              </div>
            )}
          </div>
        }
      </div>

      {/* {wallet.connected && (
        <div>
          <div>
            <WalletDisconnectButton
              style={{
                backgroundColor: "#2c2d30",
                color: "darkgray",
              }}
              className="walletButtons"
            />
          </div>
        </div>
      )} */}
    </div>
  );
};

export default DesktopLicense;
