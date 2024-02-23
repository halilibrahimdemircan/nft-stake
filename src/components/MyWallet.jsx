import { useWallet } from "@solana/wallet-adapter-react";
import {
  WalletDisconnectButton,
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { Header, Payload, SIWS } from "@web3auth/sign-in-with-solana";
import bs58 from "bs58";
import React, { useEffect, useState } from "react";

import ConnectSolana from "./ConnectSolana";

// import { saveSolanaWallet } from "../apiCalls/sign";

const MyWallet = (props) => {
  let walletAddress = "";

  // if you use anchor, use the anchor hook instead
  // const wallet = useAnchorWallet();
  // const walletAddress = wallet?.publicKey.toString();

  const wallet = useWallet();
  if (wallet.connected && wallet.publicKey) {
    walletAddress = wallet.publicKey.toString();
  }
  const { publicKey, signMessage, disconnect, connect, select, connected } =
    useWallet();

  // Domain and origin
  const domain = window.location.host;
  const origin = window.location.origin;

  const [siwsMessage, setSiwsMessage] = useState();
  const [nonce, setNonce] = useState("");
  const [sign, setSignature] = useState("");

  // Generate a message for signing
  // The nonce is generated on the server side
  async function createSolanaMessage() {
    // props?.setLoading(true);
    try {
      //TODO api den temp password alınacak usestate setlenecek
      //let url = "http://127.0.0.1:8000";
      let url = "https://api.nftinit.io";
      const response = await fetch(url + "/api/sign_start_sol/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address: publicKey?.toString(),
        }),
      });

      const data = await response.json();

      let statement = data?.temp_password;

      const payload = new Payload();
      payload.domain = domain;

      payload.address = publicKey?.toString();
      payload.uri = origin;
      payload.statement = statement;
      payload.version = "1";
      payload.chainId = 1;

      const header = new Header();
      header.t = "sip99";

      let message = new SIWS({ header, payload });

      // we need the nonce for verification so getting it in a global variable
      setNonce(message.payload.nonce);
      setSiwsMessage(message);
      const messageText = message.prepareMessage();
      const messageEncoded = new TextEncoder().encode(messageText);
      const signature = await signMessage(messageEncoded).then(async (resp) => {
        const mess = bs58.encode(resp);
        const signature = {
          t: "sip99",
          s: mess,
        };
        const payload = message?.payload;
        setSignature(bs58.encode(resp));

        let url = "https://api.nftinit.io";
        const response = await fetch(url + "/api/sign_complete_sol/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            address: publicKey?.toString(),
            payload: payload,
            temp_password: statement,
            signature: signature,
          }),
        });

        const data = await response.json();

        if (data?.success) {
          // props?.setLoading(false);
          props.setSolToken(data?.token);
          // TODO local storage a token ve address yaz
          // let saveData = await saveSolanaWallet(
          //   props?.ethAddress,
          //   props?.ethToken,
          //   data?.address,
          //   data?.token
          // );
          // console.log("saveData :>> ", saveData);
          // if (saveData?.success) {
          //   props?.setLicenseCode(saveData?.temp_password_desktop);
          // } else {

          //   toast.error(saveData?.error_message);
          // }

          return;
        }
      });
      // props?.setLoading(false);
    } catch (error) {
      if (error.message == "User rejected the request.") {
        setSignature("");
        // props?.setLoading(false);
        disconnect();
      }

      // props?.setLoading(false);
    }
  }
  // useEffect(() => {
  //   if (wallet.connected && !(sign?.length > 0)) {
  //     createSolanaMessage();
  //   } else {
  //     props?.setSolToken("");
  //   }
  // }, [wallet, props?.solToken]);

  return (
    <>
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
          {
            <div
              onClick={async () => {
                connected ? createSolanaMessage() : () => {};
              }}
              className=" "
            >
              {connected ? (
                <ConnectSolana connected={connected} />
              ) : (
                <WalletModalProvider>
                  <WalletMultiButton
                    style={{
                      // position: "absolute",
                      // pointerEvents: "none",
                      opacity: "0.9",
                      // bottom: "17px",
                      // top: "0px",
                      // border: "1px solid red",
                      width: "170px",
                    }}
                  />
                </WalletModalProvider>
              )}
              {
                // !wallet.connected && sign === "" &&
              }
            </div>
          }

          {/* {sign && (
            <div
              style={{
                width: "40%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p className="center">Verify Signature</p>
              <input
                className="signature"
                type="text"
                id="signature"
                value={sign}
                onChange={(e) => setSignature(e.target.value)}
              />
              <button
                className="web3auth"
                id="verify"
                onClick={handleSignComplete}
              >
                Verify
              </button>
              <button
                className="web3auth"
                id="verify"
                onClick={(e) => {
                  setSiwsMessage(null);
                  setNonce("");
                  setSignature("");
                }}
              >
                Back to Wallet
              </button>
            </div>
          )} */}
        </div>
      }
    </>
  );
};

export default MyWallet;
