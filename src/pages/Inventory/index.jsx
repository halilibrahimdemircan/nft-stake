import React, { useEffect } from "react";
import Header from "./Header";
import Card from "./Card";
import InventorySection from "./InventorySection";
import { useAppContext } from "../../context/AppContext";
import ChangeNetwork from "../../components/ChangeNetwork";
import { getStakeNfts } from "../../apiCalls/getStakeNfts";
import StakeSection from "./StakeSection";

const Inventory = () => {
  const { state, dispatch } = useAppContext();

  useEffect(async () => {
    let nfts = [];

    if (state?.activeNetwork === "ETH") {
      nfts = await getStakeNfts("ETH", state?.ethToken, state?.ethAddress);
      if (nfts?.eth?.success) {
        dispatch({ type: "SETNFTS", payload: nfts?.eth?.mushboomers });
        dispatch({
          type: "SETTOTALSHROOMS",
          payload: nfts?.eth?.total_shrooms,
        });
      }
    } else {
      nfts = await getStakeNfts("SOL", state?.solToken, state?.solAddress);
      dispatch({ type: "SETNFTS", payload: nfts?.sol?.mushboomers });
      dispatch({ type: "SETTOTALSHROOMS", payload: nfts?.sol?.total_shrooms });
    }
  }, [state?.activeNetwork]);

  return (
    <div className="flex flex-col w-full h-full gap-8 items-center">
      <div className="flex flex-col w-full items-center   bg-[#1A1A1A52] pt-7 ">
        <Header />
        <div
          className="w-full h-[2px] mt-7"
          style={{
            borderRadius: "256px",
            background:
              state.activeNetwork === "SOL"
                ? "linear-gradient(93deg, #14ECAB 0%, #C03CF4 53.86%, #DB5CFF 99.62%)"
                : "linear-gradient(93deg, #494949 0%, #515151 53.86%, #1F1F1F 99.62%)",
            boxShadow: "0px 4px 16px 0px rgba(75, 181, 195, 0.48)",
          }}
        ></div>
      </div>
      <div>
        <ChangeNetwork />
      </div>
      <div
        style={{ maxWidth: "1058px" }}
        className="w-full h-full flex flex-col whitespace-nowrap  px-8"
      >
        <StakeSection />
        <InventorySection />
      </div>
    </div>
  );
};

export default Inventory;
