import Sign from "../../components/Sign";
import boxIcon from "../../images/icons/boxIcon.png";
import boostedFrame from "../../images/boostedFrame.svg";
import infoIcon from "../../images/icons/infoIcon.png";
import solana from "../../images/icons/solana.png";
import ethActive from "../../images/icons/ethActive.png";
import mbLogo from "../../images/mbLogo.png";
import stakingImage from "../../images/stakingImage.svg";
import shroomBg from "../../images/shroomBg.svg";
import viewStake from "../../images/viewStake.png";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import Inventory from "../Inventory";
const Home = () => {
  const { state } = useAppContext();

  return (
    <>
      {(state?.ethAddress && state?.ethToken) ||
      (state?.solToken && state?.solAddress) ? (
        <Inventory />
      ) : (
        <div className="flex flex-col w-full relative h-screen">
          <div className="w-full h-full px-[140px] pt-[40px] flex flex-col gap-[38px]">
            <h2 className="text-[40px] font-normal ">
              {" "}
              <span
                style={{
                  background:
                    "linear-gradient(91deg, #DB5CFF -5.3%, #FF588A 41.74%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Stake
              </span>{" "}
              Mushboomers and{" "}
              <span
                style={{
                  background:
                    "linear-gradient(91deg, #FBD62C 53.42%, #FF7A50 103.73%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "Inter",
                  fontSize: "40px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >
                Earn Shrooms
              </span>
            </h2>
            <div className="flex justify-between w-full   gap-[90px]">
              <div className="flex gap-[40px] w-full">
                <div className="flex flex-col gap-[40px]">
                  <div className="flex flex-col gap-4">
                    <div className="bg-[#CFEC35] rounded-lg border border-[#E6FF64] h-[128px] w-[256px] flex items-center justify-center">
                      <div className="bg-[#1C1C1C] w-[160px] py-2 px-3 flex flex-col items-start justify-center rounded-lg">
                        <span
                          style={{ color: "rgba(163, 163, 163, 0.67)" }}
                          className="font-normal text-[13px]"
                        >
                          EARNED SHROOMS
                        </span>
                        <span className=" flex gap-1 items-center">
                          <span className="text-[24px]">2.044.182</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              opacity="0.4"
                              d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              fill="#F0F0F0"
                            />
                            <path
                              d="M11.7256 13.9211C11.6477 13.9211 11.5828 13.9 11.5309 13.8577C11.479 13.807 11.453 13.7394 11.453 13.6549C11.453 13.5704 11.453 13.4859 11.453 13.4014C11.453 13.3169 11.453 13.2324 11.453 13.1479C11.4703 12.7845 11.5525 12.4634 11.6996 12.1845C11.8467 11.9056 12.0241 11.6521 12.2318 11.4239C12.4481 11.1958 12.6644 10.9803 12.8807 10.7775C13.097 10.5662 13.2787 10.3549 13.4258 10.1437C13.5816 9.93239 13.6768 9.70845 13.7114 9.47183C13.746 9.16761 13.6854 8.91408 13.5297 8.71127C13.3739 8.5 13.1619 8.33944 12.8937 8.22958C12.6255 8.11972 12.3486 8.06479 12.063 8.06479C11.6044 8.06479 11.2108 8.1831 10.882 8.41972C10.5618 8.64789 10.3498 9.03662 10.246 9.58592C10.22 9.68732 10.1768 9.75916 10.1162 9.80141C10.0556 9.84366 9.9864 9.86479 9.90853 9.86479H9.28554C9.20766 9.86479 9.13844 9.83944 9.07787 9.78873C9.02596 9.73803 9 9.67042 9 9.58592C9.00865 9.23944 9.08653 8.90986 9.23362 8.59718C9.38072 8.28451 9.58838 8.00986 9.85661 7.77324C10.1335 7.53662 10.458 7.3507 10.83 7.21549C11.2108 7.07183 11.6347 7 12.102 7C12.6298 7 13.0797 7.07183 13.4518 7.21549C13.8325 7.3507 14.1354 7.53662 14.3603 7.77324C14.5939 8.00141 14.7627 8.25493 14.8665 8.5338C14.9703 8.81268 15.0136 9.09155 14.9963 9.37042C14.9703 9.70845 14.8838 10.0127 14.7367 10.2831C14.5896 10.5451 14.4122 10.7901 14.2046 11.0183C13.9969 11.238 13.7849 11.4577 13.5686 11.6775C13.3609 11.8887 13.1792 12.1127 13.0235 12.3493C12.8764 12.5775 12.7942 12.8268 12.7769 13.0972C12.7682 13.1901 12.7596 13.2831 12.7509 13.3761C12.7509 13.4606 12.7509 13.5451 12.7509 13.6296C12.7336 13.7225 12.699 13.7944 12.6471 13.8451C12.5952 13.8958 12.5216 13.9211 12.4265 13.9211H11.7256ZM11.6218 16C11.5352 16 11.4617 15.9746 11.4011 15.9239C11.3492 15.8648 11.3232 15.793 11.3232 15.7085V14.9352C11.3232 14.8507 11.3492 14.7831 11.4011 14.7324C11.4617 14.6732 11.5352 14.6437 11.6218 14.6437H12.4654C12.5606 14.6437 12.6341 14.6732 12.686 14.7324C12.7466 14.7831 12.7769 14.8507 12.7769 14.9352V15.7085C12.7769 15.793 12.7466 15.8648 12.686 15.9239C12.6341 15.9746 12.5606 16 12.4654 16H11.6218Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col text-[#B3B3B3]">
                      <h3 className="pb-2 text-[24px] font-medium text-white">
                        Shrooms
                      </h3>
                      <span className="pb-4 text-[14px] font-light leading-[18px]">
                        We add 50% of our mint revenues to <br /> the liquidity
                        pool for future airdrops to <br /> Mushboomer holders.
                        Shrooms <br />
                        increase the airdrop amount.
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="-ml-8 -my-8">
                      <img className="" src={boostedFrame} alt="" />
                    </div>
                    <div className="flex flex-col text-[#B3B3B3]">
                      <h3 className="pb-2 text-[24px] font-medium text-white">
                        Boosted 1.5X
                      </h3>
                      <span className="pb-4 text-[14px] font-light leading-[18px]">
                        Unlisted Mushboomers are passively <br /> staked and
                        generate Shrooms <br /> everyday. The system
                        automatically <br />
                        pairs ETH & SOL Mushboomers if you <br /> are holding
                        both the shroom <br /> generation rate is increased by
                        150% <br /> for paired NFTs.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[39px] ">
                  <div className="flex flex-col gap-4 ">
                    <div className=" rounded-lg  h-[128px] w-[256px] flex items-center justify-center">
                      <img src={viewStake} alt="" />
                    </div>
                    <div className="flex flex-col text-[#B3B3B3]">
                      <h3 className="pb-2 text-[24px] font-medium text-white">
                        Staking
                      </h3>
                      <span className="pb-4 text-[14px] font-light leading-[18px] text-nowrap">
                        Unlisted Mushboomers are passively staked <br /> and
                        generate Shrooms everyday. If you have <br /> both
                        <a
                          className="pl-1 underline cursor-pointer"
                          href="https://blur.io/collection/mushboomers"
                        >
                          Ethereum
                        </a>{" "}
                        and{" "}
                        <a
                          className="underline cursor-pointer"
                          href="https://www.tensor.trade/trade/mushboomers"
                        >
                          Solana
                        </a>{" "}
                        Mushboomers <br /> make sure you connect both wallets
                        because <br /> they boost each other!
                      </span>
                      <span className=" text-[14px] font-medium flex flex-col gap-2">
                        <span className="text-white">
                          You can use both networks
                        </span>
                        <span className="text-white flex gap-4 items-center">
                          <span className="flex gap-2 items-center">
                            <img className="h-3" src={solana} alt="" />
                            <span className="text-[13px] leading-normal">
                              Solana NFTs
                            </span>
                          </span>
                          <span className="w-[1px] h-full bg-[#666666]"></span>
                          <span className="flex gap-2 items-center">
                            <img className="h-4" src={ethActive} alt="" />
                            <span className="text-[13px] leading-normal">
                              Ethereum NFTs
                            </span>
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                  {/* <div className="  flex flex-col items-start justify-start gap-2">
                    <div className="pb-2 text-[24px] font-medium text-white  leading-5">
                      Inventory
                    </div>
                    <span className="pb-4 text-[14px] font-light leading-[18px] text-[#B3B3B3]">
                      You can view NFTs linked to a <br /> Solana or Ethereum
                      Wallet.
                    </span>
                  </div> */}
                </div>
              </div>
              <div className="h-max-content w-[1px] bg-[#4C4C4C]"></div>
              <div className="w-full flex items-start justify-start  z-10">
                <div className="flex flex-col items-start gap-2">
                  <div className=" w-full flex flex-col  items-center justify-center">
                    <img src={mbLogo} alt="" />
                    <img src={stakingImage} alt="" />
                  </div>
                  <h3 className="pb-2 text-[24px] font-medium text-white">
                    Connect Wallet
                  </h3>
                  <span className="pb-4 text-[14px] font-light leading-[18px] text-[#B3B3B3]">
                    You can use your Ethereum or Solana <br /> wallet to connect
                    to Mushboomers <br /> Staking.{" "}
                    <span className="text-white">
                      You can link both wallets if <br /> you want.
                    </span>
                  </span>
                  <Sign type={"col"} />
                </div>
              </div>
            </div>
          </div>
          <div
            className=" absolute bottom-0"
            style={{
              background:
                "linear-gradient(90deg, #FB1FFF -4.88%, #FF1F47 117.66%)",
              filter: "blur(128px)",
              height: "84px",
              width: "100%",
            }}
          ></div>
          <div
            className=" absolute bottom-0 right-0 z-0"
            // style={{
            //   background:
            //     "linear-gradient(90deg, #FB1FFF -4.88%, #FF1F47 117.66%)",
            //   filter: "blur(128px)",
            //   height: "84px",
            //   width: "100%",
            // }}
          >
            <img src={shroomBg} alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
