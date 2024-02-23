import React from "react";
import Card from "./Card";

const InventorySection = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="flex gap-12 flex-wrap w-full h-full">
      {list.map((item, index) => {
        return <Card key={index} tokenId={365} status={"LISTED"} />;
      })}
    </div>
  );
};

export default InventorySection;
