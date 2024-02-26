import React from "react";
import Card from "./Card";
import BoostCard from "./BoostCard";

const TwinCard = ({ twinInfo }) => {
  return (
    <div
      style={{
        border:
          twinInfo?.eth && twinInfo?.sol
            ? "1px solid #FF7FBE"
            : "1px solid #628186",
        boxShadow:
          twinInfo?.eth && twinInfo?.sol
            ? "0px 4px 32px 0px rgba(110, 0, 132, 0.64)"
            : "",
        background:
          twinInfo?.eth && twinInfo?.sol
            ? "rgba(233, 28, 143, 0.16)"
            : "#1A2C2F",
      }}
      className={`flex flex-col  rounded-lg `}
    >
      <div
        style={{
          background:
            twinInfo?.eth && twinInfo?.sol
              ? "linear-gradient(92deg, #A81AFF -0.77%, #FC1C6D 100.54%)"
              : "#364D51",
        }}
        className={`border ${
          twinInfo?.eth && twinInfo?.sol
            ? "border-[#FF7FBE]"
            : "  border-[#628186]"
        } h-[47px]    rounded-t-lg flex justify-center items-center text-[13px] font-semibold`}
      >
        {twinInfo?.eth && twinInfo?.sol ? "BOOSTED" : "NOT BOOSTED"}
      </div>
      <div className={`flex gap-2   p-3`}>
        {twinInfo?.eth ? (
          <Card
            key={twinInfo?.eth?.token_id}
            tokenId={twinInfo?.eth?.token_id}
            status={twinInfo?.eth?.listed_status?.toUpperCase()}
            image={twinInfo?.eth?.image_url}
            shrooms={twinInfo?.eth?.shrooms}
            unlistedTime={twinInfo?.eth?.unlisted_time}
            type={"ETH"}
            sol={twinInfo?.sol}
          />
        ) : (
          <BoostCard type={"ETH"} sol={twinInfo?.sol} />
        )}
        {twinInfo?.sol ? (
          <Card
            key={twinInfo?.sol?.token_id}
            tokenId={twinInfo?.sol?.token_id}
            status={twinInfo?.sol?.listed_status?.toUpperCase()}
            image={twinInfo?.sol?.image_url}
            shrooms={twinInfo?.sol?.shrooms}
            unlistedTime={twinInfo?.sol?.unlisted_time}
            type={"SOL"}
            eth={twinInfo?.eth}
          />
        ) : (
          <BoostCard type={"SOL"} eth={twinInfo?.eth} />
        )}
      </div>
    </div>
  );
};

export default TwinCard;
