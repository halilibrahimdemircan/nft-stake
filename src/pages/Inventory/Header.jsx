import React from "react";
import HeaderPiece from "./HeaderPiece";
import UserInfo from "../../components/UserInfo";
import { useAppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";
import mbLogo from "../../images/mbLogo.png";
import Sign from "../../components/Sign";

const Header = () => {
  const { state } = useAppContext();

  return (
    <div className="w-full flex justify-between items-center font-rubik px-[60px]">
      <div>
        <Link to={"/"}>
          <img src={mbLogo} alt="" />
        </Link>
      </div>
      <div
        // style={{ width: "1058px", maxWidth: "1058px" }}
        className="flex gap-12   "
      >
        <HeaderPiece
          text={"OWNED"}
          quantity={
            (state?.nfts?.staked?.length || 0) +
            (state?.nfts?.unstaked?.length || 0)
          }
        />
        <div className="border border-[#252525]"></div>
        <HeaderPiece
          text={"STAKED"}
          // TODO
          quantity={state?.nfts?.staked?.length}
        />
        <div className="border border-[#252525]"></div>

        <HeaderPiece
          text={"EARNED SHROOMS"}
          quantity={state?.nfts?.total_shrooms}
          bg={true}
        />
      </div>
      <div className="">
        {/* <UserInfo /> */}
        <Sign />
      </div>
    </div>
  );
};

export default Header;
