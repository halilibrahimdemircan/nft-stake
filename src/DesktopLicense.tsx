import React, { useEffect, useState, useCallback } from "react";
import toast from "react-hot-toast";
import LoadingComponent from "./LoadingComponent";
import MyWallet from "./MyWallet";
// @ts-ignore
import arrowUpDesktopIcon from "./images/icons/arrowUpDesktopIcon.svg";
// @ts-ignore
import checkOkIcon from "./images/icons/checkOkIcon.svg";
// @ts-ignore
import desktop_illustration from "./images/icons/desktop_illustration.svg";
// @ts-ignore

import copyDesktopIcon from "./images/icons/copyDesktopIcon.svg";
import { WalletDisconnectButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { injected } from "./Connectors";
import { eth } from "web3";
import {
  saveSolanaWallet,
  signAddressComplete,
  signAddressStart,
} from "./apiCalls/sign";
// @ts-ignore

// import arrowDownIcon from "./images/icons/arrowDownIcon";

// type Props = {};

const DesktopLicense = () => {
  const [copyLicense, setCopyLicense] = useState(false);
  const [copyWallet, setCopyWallet] = useState(false);

  const [solToken, setSolToken] = useState("");
  const [ethToken, setEthToken] = useState("");
  const [ethAddress, setEthAddress] = useState("");
  const [solAddress, setSolAddress] = useState("");
  const [licenseCode, setLicenseCode] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [connectedWallet, setConnectedWallet] = useState("");

  useEffect(() => {
    async function getConnectedWallet() {
      // @ts-ignore

      var userSelectedAddress = await getUserSelectedAddress();

      console.log(userSelectedAddress[0]);
      setConnectedWallet(userSelectedAddress[0]);

      // @ts-ignore
    }
    // @ts-ignore
    if (window.ethereum) {
      getConnectedWallet();
    }
    // @ts-ignore
  }, [window.ethereum]);

  const [links, setLinks] = useState({
    macos_link: "",
    macos_uni_link: "",
    windows_link: "",
  });
  const wallet = useWallet();
  const handleCopyLicense = () => {
    setCopyLicense(true);
    setTimeout(() => {
      setCopyLicense(false);
    }, 5000);
  };
  const handleCopyWallet = () => {
    setCopyWallet(true);
    setTimeout(() => {
      setCopyWallet(false);
    }, 5000);
  };

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

    // const web3 = new Web3(window?.ethereum);
  };

  async function signIn(slotNumber) {
    //debugger;

    slotNumber = 1;
    var userSelectedAddress = await getUserSelectedAddress();

    console.log(userSelectedAddress);

    if (userSelectedAddress?.length > 0) {
      // @ts-ignore
      userSelectedAddress = userSelectedAddress[0];
    } else {
      // @ts-ignore

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

      console.log("signature", signature);

      const completeData = await signAddressComplete(
        startData.address,
        startData.temp_password,
        signature,
        1
      ).then((completeData) => {
        if (completeData.success) {
          setEthAddress(completeData?.address);
          setEthToken(completeData?.token);
          setStep(2);
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
  // @ts-ignore

  useEffect(async () => {
    // @ts-ignore
    if (window.ethereum) {
      const isAuthorized = await injected.isAuthorized();
      // @ts-ignore
    }
    // @ts-ignore
  }, [window.ethereum]);

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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          // className="flex justify-center items-center"
        >
          <img src={desktop_illustration} alt="" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            marginTop: "-24px",
          }}
          //   className="flex flex-col gap-2 -mt-6"
        >
          <span
            style={{
              fontSize: "24px",
              lineHeight: "29px",
              fontWeight: 600,
            }}
            // className="text-2xl leading-7.25 font-semibold text-white"
          >
            NFTinit Desktop Application
          </span>
          <span
            style={{
              fontSize: "14px",
              lineHeight: "16px",
              fontWeight: 500,
              color: "#9C9C9C",
            }}
            // className="text-sm leading-4 font-medium text-#9C9C9C"
          >
            Insanely Powerful Bidding Tool
          </span>
        </div>
        <div
          style={{
            display: "flex",
            gap: "8px",
            padding: "8pxpx",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "12px",
            backgroundColor: "#161616",
          }}
          //   className="flex justify-center items-center gap-2 p-2 rounded-xl bg-#161616"
        >
          <DesktopDownloadTable
            header={"MacOS (Apple Silicon)"}
            title={"New Generation Apple Silicon Chips"}
            link={links.macos_link}
          />
          <div style={{ height: "108px", border: "1px solid #303030" }}></div>
          <DesktopDownloadTable
            header={"MacOS (Intel)"}
            title={"Old Generation Apple Intel Chips"}
            link={links.macos_uni_link}
          />
          <div style={{ height: "108px", border: "1px solid #303030" }}></div>
          <DesktopDownloadTable
            header={"Windows"}
            title={"Intel based Windows PCs"}
            link={links.windows_link}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "center",
          }}
          //   className="flex flex-col gap-2"
        >
          <span
            // style={{
            //   fontSize: "28px",
            //   lineHeight: "29px",
            //   fontWeight: "600",
            //   color: "#D2FF99",
            //   // fontFamily: "fangsong",
            // }}
            className="text-red-500 text-2xl leading-7.25 font-semibold"
          >
            {step === 1
              ? "Step I - Connect Ethereum Wallet"
              : step === 2
              ? "Step II - Connect Solana Wallet"
              : step === 3
              ? "Activation Code"
              : ""}
          </span>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.tensor.trade/trade/mushboomers"
            target={"_blank"}
          >
            <span
              style={{
                fontSize: "14px",
                lineHeight: "16px",
                fontWeight: "500",
                color: "#9C9C9C",
              }}
              // className="text-#9C9C9C text-sm leading-4 font-medium"
            >
              You must have 2+{" "}
              <span style={{ color: "#8222ff", textDecoration: "underline" }}>
                Mushboomers
              </span>{" "}
              to use Tensor Bidding
            </span>
          </a>
          {/* <div
            style={{
              marginBottom: "-20px",
              marginTop: "20px",
              fontSize: "22px",
              fontWeight: "600",
              letterSpacing: "3px",
              color: "#91d27b",
            }}
          >
            {step === 1
              ? "STEP I"
              : step === 2
              ? "STEP II"
              : step === 3
              ? "FINAL"
              : ""}
          </div> */}
        </div>
        {step == 3 && licenseCode?.length > 0 ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "-12px",
              gap: "12px",
            }}
            //   className="w-full flex flex-col items-center justify-center -mt-3"
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                alignItems: "center",
                justifyContent: "center",
              }}
              // className="w-full flex flex-col gap-6 items-center justify-center font-inter"
            >
              <div
                style={{
                  position: "relative",
                }}
                className="has-tooltip"
              >
                <div
                  onClick={() => {
                    navigator.clipboard.writeText(ethAddress);
                    toast.success("Eth Address Copied");
                    handleCopyWallet();
                  }}
                  // className="flex gap-4 justify-center items-center px-4 py-3 bg-#222222 border-0.5 border-#4B4B4B rounded cursor-pointer"
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    gap: "16px",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "12px 16px",
                    backgroundColor: "222222",
                    // border: "0.5px solid #4B4B4B",
                    color: "#d2ff98",
                    borderRadius: "6px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      lineHeight: "20px",
                      fontWeight: "500",
                      color: "#d2ff98",
                    }}
                    className="text-13px leading-4 font-medium text-white"
                  >
                    {ethAddress?.slice(0, 6) +
                      "..." +
                      ethAddress?.slice(
                        ethAddress?.length - 4,
                        ethAddress?.length
                      )}
                  </span>
                  <span>
                    <img src={copyDesktopIcon} alt="" />
                  </span>
                </div>
                <div
                  style={{
                    border: "1.31043px solid rgba(255, 255, 255, 0.35)",
                    left: copyWallet ? "25%" : "45%",
                    top: "3.5rem",
                    padding: "0px 8px",
                    height: "28px",
                    backgroundColor: "#2F2F2F",
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  className={`tooltip`}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    //  className="flex items-center justify-center"
                  >
                    {copyWallet ? (
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "4px",
                        }}
                        // className="flex justify-center items-center gap-1"
                      >
                        <span
                          style={{
                            fontSize: "14px",
                            lineHeight: "16px",
                            fontWeight: "400",
                            color: "#D2FF99",
                          }}
                          // className="text-sm leading-4 font-normal text-#D2FF99"
                        >
                          Copied to Clipboard
                        </span>
                        <span>
                          <img src={checkOkIcon} alt="" />
                        </span>
                      </span>
                    ) : (
                      <span
                        style={{
                          fontSize: "14px",
                          lineHeight: "16px",
                          fontWeight: "400",
                          color: "white",
                        }}
                        className="text-sm leading-4 font-normal text-white"
                      >
                        Copy
                      </span>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                alignItems: "center",
                justifyContent: "center",
              }}
              // className="w-full flex flex-col gap-6 items-center justify-center font-inter"
            >
              <div
                style={{
                  position: "relative",
                }}
                className="has-tooltip"
              >
                <div
                  onClick={() => {
                    navigator.clipboard.writeText(licenseCode);
                    toast.success("License Key Copied");
                    handleCopyLicense();
                  }}
                  // className="flex gap-4 justify-center items-center px-4 py-3 bg-#222222 border-0.5 border-#4B4B4B rounded cursor-pointer"
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    gap: "16px",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "12px 16px",
                    backgroundColor: "222222",
                    border: "0.5px solid #4B4B4B",
                    borderRadius: "6px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      lineHeight: "20px",
                      fontWeight: "500",
                      color: "white",
                    }}
                    className="text-13px leading-4 font-medium text-white"
                  >
                    {licenseCode}
                  </span>
                  <span>
                    <img src={copyDesktopIcon} alt="" />
                  </span>
                </div>
                <div
                  style={{
                    border: "1.31043px solid rgba(255, 255, 255, 0.35)",
                    left: copyLicense ? "25%" : "45%",
                    top: "3.5rem",
                    padding: "0px 8px",
                    height: "28px",
                    backgroundColor: "#2F2F2F",
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  className={`tooltip`}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    //  className="flex items-center justify-center"
                  >
                    {copyLicense ? (
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "4px",
                        }}
                        // className="flex justify-center items-center gap-1"
                      >
                        <span
                          style={{
                            fontSize: "14px",
                            lineHeight: "16px",
                            fontWeight: "400",
                            color: "#D2FF99",
                          }}
                          // className="text-sm leading-4 font-normal text-#D2FF99"
                        >
                          Copied to Clipboard
                        </span>
                        <span>
                          <img src={checkOkIcon} alt="" />
                        </span>
                      </span>
                    ) : (
                      <span
                        style={{
                          fontSize: "14px",
                          lineHeight: "16px",
                          fontWeight: "400",
                          color: "white",
                        }}
                        className="text-sm leading-4 font-normal text-white"
                      >
                        Copy
                      </span>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
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
              <div>
                {step == 1 && (
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
                    <button
                      className="web3auth"
                      // style={{
                      //   border: "1px solid purple",
                      //   backgroundColor: "black",
                      //   color: "white",
                      //   padding: "10px 16px",
                      //   borderRadius: "6px",
                      // }}
                      onClick={signIn}
                    >
                      Connect Eth Wallet
                    </button>
                  </div>
                )}
                {step == 2 && (
                  <MyWallet
                    setToken={setSolToken}
                    setAddress={setSolAddress}
                    setLoading={setLoading}
                    // saveSolanaWallet={saveSolanaWallet}
                    ethAddress={ethAddress}
                    ethToken={ethToken}
                    setLicenseCode={setLicenseCode}
                    setStep={setStep}
                  />
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {wallet.connected && (
        <div
        // style={{
        //   border: "1px solid red",
        //   width: "300px",
        //   paddingLeft: "200px",
        //   // display: "flex",
        //   // justifyContent: "center",
        // }}
        >
          <div
            style={
              {
                // border: "1px solid red",
                //   paddingLeft: "30px",
              }
            }
          >
            <WalletDisconnectButton
              style={{
                backgroundColor: "#2c2d30",
                color: "darkgray",
              }}
              className="walletButtons"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DesktopLicense;

const DesktopDownloadTable = (props: any) => (
  <div
    style={{
      width: "273px",
      borderRadius: "12px",
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
    }}
    // className="hover:bg-#1E1E1E rounded-xl p-4 flex flex-col gap-6"
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        textAlign: "left",
      }}
      //   className="flex flex-col gap-2 text-left"
    >
      <span
        style={{
          fontSize: "16px",
          lineHeight: "19px",
          fontWeight: "600",
          color: "white",
        }}
        //   className="text-base leading-4.75 font-semibold text-white"
      >
        {props.header}
      </span>
      <span
        style={{
          fontSize: "14px",
          lineHeight: "16px",
          fontWeight: "500",
          color: "#9C9C9C",
        }}
        // className="text-sm leading-4 font-medium text-#9C9C9C"
      >
        {props.title}
      </span>
    </div>
    <a href={props.link}>
      <div
        style={{
          backgroundColor: "#8322FF",
          borderRadius: "6px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          width: "max-content",
          padding: "12px",
          cursor: "pointer",
          border: "1px solid transparent",
        }}
        // className="bg-#8322FF rounded-md flex items-center gap-2.5 w-max h-10 p-3 cursor-pointer border border-transparent hover:border-#C699FF"
      >
        <span
          style={{
            fontSize: "14px",
            lineHeight: "13px",
            fontWeight: "600",
            color: "white",
          }}
          //   className="text-sm leading-3.25 font-semibold text-white"
        >
          Download
        </span>
        <span className="">{/* <img src={arrowDownIcon} alt="" /> */}</span>
      </div>
    </a>
  </div>
);
