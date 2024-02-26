import React from "react";
import Card from "./Card";
import BoostCard from "./BoostCard";

const TwinCard = ({ twinInfo }) => {
  return (
    <div
      style={{
        border:
          twinInfo?.eth && twinInfo?.sol
            ? "2px solid #36E9E5"
            : "2px solid #7C7C7C",
        background:
          twinInfo?.eth && twinInfo?.sol
            ? "linear-gradient(142deg, rgba(54, 233, 229, 0.08) -3.32%, rgba(222, 67, 210, 0.08) 103.39%)"
            : "",
      }}
      className={`flex gap-2  rounded-lg p-1`}
    >
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
  );
};

export default TwinCard;
