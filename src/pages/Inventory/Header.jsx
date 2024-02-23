import React from "react";
import HeaderPiece from "./HeaderPiece";

const Header = () => {
  return (
    <div
      style={{ width: "1058px", maxWidth: "1058px" }}
      className=" flex gap-12 "
    >
      <HeaderPiece text={"OWNED"} quantity={16} />
      <div className="border border-[#252525]"></div>
      <HeaderPiece text={"STAKED"} quantity={5} />
      <div className="border border-[#252525]"></div>

      <HeaderPiece text={"EARNED SHROOMS"} quantity={2044182} bg={true} />
    </div>
  );
};

export default Header;
