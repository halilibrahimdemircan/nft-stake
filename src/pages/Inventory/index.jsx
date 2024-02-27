import React, { useEffect } from "react";
import Header from "./Header";
import Card from "./Card";
import InventorySection from "./InventorySection";
import { useAppContext } from "../../context/AppContext";
// import ChangeNetwork from "../../components/ChangeNetwork";
import { getStakeNfts } from "../../apiCalls/getStakeNfts";
import StakeSection from "./StakeSection";
import InfoModal from "../../components/modals/InfoModal";

const Inventory = () => {
  const { state, dispatch } = useAppContext();

  useEffect(async () => {
    if (state?.ethToken && state?.solToken) {
      // TODO linkleme endpointini çalıştır
    }

    let nfts;

    nfts = await getStakeNfts(
      state?.ethToken,
      state?.ethAddress,
      state?.solToken,
      state?.solAddress
    );

    dispatch({ type: "SETNFTS", payload: nfts });
  }, [state?.ethToken, state?.solToken]);

  return (
    <div className="flex flex-col w-full h-full gap-8 items-center">
      <div className="flex flex-col w-full items-center justify-center   bg-[#1A1A1A52] h-[115px] ">
        <Header />
        <div
          className="w-full h-[2px] "
          style={{
            borderRadius: "256px",
            background:
              "linear-gradient(93deg, #14ECAB 0%, #C03CF4 53.86%, #DB5CFF 99.62%)",
            boxShadow: "0px 4px 16px 0px rgba(75, 181, 195, 0.48)",
          }}
        ></div>
      </div>
      {/* <div>
        <ChangeNetwork />
      </div> */}
      <div
        style={{ maxWidth: "1272px" }}
        className="w-full h-full flex flex-col whitespace-nowrap  px-8"
      >
        <StakeSection />
        <InventorySection />
      </div>
    </div>
  );
};

export default Inventory;
