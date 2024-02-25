import React from "react";
import Card from "./Card";
import { useAppContext } from "../../context/AppContext";

const StakeSection = () => {
  const { state } = useAppContext();

  return (
    <div
      className="px-8 py-6 relative"
      style={{
        borderRadius: "16px",
        border: "1px solid #272727",
        background: "#1A1A1A",
        minHeight: "300px",
      }}
    >
      <div className="absolute top-0 left-[230px]  w-[512px] h-1 bg-[#BDFF00]"></div>
      <div className="pb-4">STAKED NFTS</div>
      <div className="flex gap-6 flex-wrap w-full h-full ">
        {state?.nfts?.filter((el) => el?.stake)?.length > 0 ? (
          state?.nfts
            ?.filter((el) => el?.stake)
            ?.map((item, index) => {
              return (
                <Card
                  key={index}
                  tokenId={item?.token_id}
                  status={item?.listed_status?.toUpperCase()}
                  image={item?.image_url}
                  shrooms={item?.shrooms}
                  unlistedTime={item?.unlisted_time}
                />
              );
            })
        ) : (
          <div className=" text-[#] flex justify-center items-center">
            NO NFTS STAKED
          </div>
        )}
      </div>
    </div>
  );
};

export default StakeSection;
