import React from "react";

const HeaderPiece = ({ text, quantity, bg }) => {
  return (
    <div
      style={{
        borderRadius: bg ? "6px" : "",
        background: bg ? "#1C1C1C" : "",
      }}
      className="flex flex-col p-2 items-start"
    >
      <div
        style={{
          color: "rgba(163, 163, 163, 0.67)",
          fontFamily: "Rubik",
          fontSize: "13px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "normal",
          letterSpacing: "0.26px",
          textTransform: "uppercase",
        }}
        className=""
      >
        {text}
      </div>
      <div
        style={{
          color: "#FFF",
          textAlign: "center",
          fontFamily: "Rubik",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "normal",
        }}
      >
        {quantity}
      </div>
    </div>
  );
};

export default HeaderPiece;
