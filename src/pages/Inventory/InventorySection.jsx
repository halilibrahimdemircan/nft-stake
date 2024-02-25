import React from "react";
import Card from "./Card";
import { useAppContext } from "../../context/AppContext";

const StakeSection = () => {
  const { state } = useAppContext();

  return (
    <div
      className="px-8 py-6"
      // style={{
      //   borderRadius: "16px",
      //   border: "1px solid #272727",
      //   background: "#1A1A1A",
      // }}
    >
      <div className="pb-4">INVENTORY</div>
      <div className="flex gap-6 flex-wrap w-full h-full ">
        {state?.nfts?.length > 0 ? (
          state?.nfts?.map((item, index) => {
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
          <div>NO NFTS</div>
        )}
      </div>
    </div>
  );
};

export default StakeSection;
