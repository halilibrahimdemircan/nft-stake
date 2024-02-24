import React from "react";
import HeaderPiece from "./HeaderPiece";
import UserInfo from "../../components/UserInfo";
import { useAppContext } from "../../context/AppContext";

const Header = () => {
  const { state } = useAppContext();

  return (
    <div
      style={{ width: "1058px", maxWidth: "1058px" }}
      className=" flex justify-between items-center font-rubik"
    >
      <div className="flex gap-12 ">
        <HeaderPiece text={"OWNED"} quantity={state?.nfts?.length} />
        <div className="border border-[#252525]"></div>
        <HeaderPiece
          text={"STAKED"}
          quantity={state?.nfts?.filter((nft) => nft.stake)?.length}
        />
        <div className="border border-[#252525]"></div>

        <HeaderPiece
          text={"EARNED SHROOMS"}
          quantity={state?.totalShrooms}
          bg={true}
        />
      </div>
      <div>
        <UserInfo />
      </div>
    </div>
  );
};

export default Header;
