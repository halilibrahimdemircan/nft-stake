import React from "react";
import HeaderPiece from "./HeaderPiece";
import UserInfo from "../../components/UserInfo";

const Header = () => {
  return (
    <div
      style={{ width: "1058px", maxWidth: "1058px" }}
      className=" flex justify-between items-center"
    >
      <div className="flex gap-12 ">
        <HeaderPiece text={"OWNED"} quantity={16} />
        <div className="border border-[#252525]"></div>
        <HeaderPiece text={"STAKED"} quantity={5} />
        <div className="border border-[#252525]"></div>

        <HeaderPiece text={"EARNED SHROOMS"} quantity={2044182} bg={true} />
      </div>
      <div>
        <UserInfo />
      </div>
    </div>
  );
};

export default Header;
