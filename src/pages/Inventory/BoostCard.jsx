import React, { useState } from "react";
import sampleMush from "../../images/sampleMush.png";
import solanaWhite from "../../images/icons/solanaWhite.png";
import ethActive from "../../images/icons/ethActive.png";
import InfoModal from "../../components/modals/InfoModal";

const BoostCard = ({
  // tokenId,
  // status,
  // image,
  // shrooms,
  // unlistedTime,
  type,
  eth,
  sol,
}) => {
  const [openInfoModal, setOpenInfoModal] = useState(false);

  return (
    <>
      <InfoModal open={openInfoModal} setOpen={setOpenInfoModal} type={type} />

      <div
        onClick={() => {
          setOpenInfoModal(!openInfoModal);
        }}
        style={{ width: "164px" }}
        className="flex flex-col gap-[6px] cursor-pointer "
      >
        <div className="relative border rounded-lg border-[#628186]">
          {type === "ETH" ? (
            <>
              <div
                className="rounded-full absolute bottom-8 left-2 "
                // style={{
                //   border: "1px solid #FFF",
                //   background:
                //     "linear-gradient(93deg, #14ECAB 0%, #C03CF4 53.86%, #DB5CFF 99.62%)",
                //   boxShadow: "0px 4px 16px 0px rgba(75, 181, 195, 0.48)",
                // }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="23"
                    height="23"
                    rx="11.5"
                    fill="#323232"
                    stroke="white"
                  />
                  <path
                    d="M11.8748 10.584L8 12.3155L11.8748 14.5647L15.7481 12.3155L11.8748 10.584Z"
                    fill="#DADADA"
                  />
                  <path
                    d="M8 12.3168L11.8748 14.5661V6L8 12.3168Z"
                    fill="#939393"
                  />
                  <path
                    d="M11.875 6V14.5661L15.7483 12.3168L11.875 6Z"
                    fill="#DADADA"
                  />
                  <path
                    d="M8 13.0364L11.8748 18.3999V15.2856L8 13.0364Z"
                    fill="#939393"
                  />
                  <path
                    d="M11.875 15.2856V18.3999L15.7513 13.0364L11.875 15.2856Z"
                    fill="#DADADA"
                  />
                </svg>
              </div>
              <div
                style={{
                  background: "#364D51",
                  boxShadow: "0px 4px 32px 0px #000",
                }}
                className="h-6 w-full  absolute  bottom-0 rounded-b-lg text-[13px] font-semibold flex items-center justify-center"
              >
                {"1.5X TO BOOST"}
              </div>
            </>
          ) : type === "SOL" ? (
            <>
              <div
                className="rounded-full w-6 absolute bottom-8 left-2  p-1"
                style={{
                  border: "1px solid #FFF",
                  background:
                    "linear-gradient(93deg, #14ECAB 0%, #C03CF4 53.86%, #DB5CFF 99.62%)",
                  boxShadow: "0px 4px 16px 0px rgba(75, 181, 195, 0.48)",
                }}
              >
                <img src={solanaWhite} alt="" />
              </div>
              <div
                style={{
                  background: "#364D51",
                  boxShadow: "0px 4px 32px 0px #000",
                }}
                className="h-6 w-full  absolute  bottom-0 rounded-b-lg text-[13px] font-semibold flex items-center justify-center "
              >
                {"1.5X TO BOOST"}
              </div>
            </>
          ) : (
            ""
          )}

          <div className="bg-[#364D51] text-white flex items-center justify-center w-full h-6 rounded-t-lg text-[13px] font-semibold uppercase ">
            BUY
            {/* OR UNLIST {type === "ETH" ? "ETH" : "SOL"} MB */}
          </div>
          {/* <img className="rounded-b-lg" src={image} alt="" /> */}
          <div className="bg-[#1A2C2F]  w-full h-[164px]  flex flex-col justify-start items-center rounded-b-lg">
            <span className=" font-semibold  w-full flex justify-center   pt-10 ">
              <span className="w-[45px] h-[45px] border flex justify-center items-center bg-[#51757B]  border-[#83AEB5] rounded-[4px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="26"
                  viewBox="0 0 22 26"
                  fill="none"
                >
                  <g filter="url(#filter0_d_275_352)">
                    <path
                      d="M9.16 21.36C8.86667 21.36 8.62667 21.2667 8.44 21.08C8.25333 20.8933 8.16 20.6533 8.16 20.36V13.04H1.04C0.746667 13.04 0.493333 12.9467 0.28 12.76C0.0933333 12.5733 0 12.3333 0 12.04V9.12C0 8.82667 0.0933333 8.58667 0.28 8.4C0.493333 8.21333 0.746667 8.12 1.04 8.12H8.16V0.999999C8.16 0.706666 8.25333 0.466667 8.44 0.280001C8.62667 0.0933337 8.86667 0 9.16 0H12.44C12.7067 0 12.9333 0.0933337 13.12 0.280001C13.3333 0.466667 13.44 0.706666 13.44 0.999999V8.12H20.52C20.8133 8.12 21.0533 8.21333 21.24 8.4C21.4267 8.58667 21.52 8.82667 21.52 9.12V12.04C21.52 12.3333 21.4267 12.5733 21.24 12.76C21.0533 12.9467 20.8133 13.04 20.52 13.04H13.44V20.36C13.44 20.6533 13.3333 20.8933 13.12 21.08C12.9333 21.2667 12.7067 21.36 12.44 21.36H9.16Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_275_352"
                      x="0"
                      y="0"
                      width="21.5195"
                      height="25.3601"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.205662 0 0 0 0 0.313741 0 0 0 0 0.331755 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_275_352"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_275_352"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoostCard;
