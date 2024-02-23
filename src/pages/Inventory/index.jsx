import React from "react";
import Header from "./Header";
import Card from "./Card";
import InventorySection from "./InventorySection";

const Inventory = () => {
  return (
    <div className="flex flex-col w-full h-full gap-12 ">
      <div className="flex w-full items-center justify-between">
        <Header />
      </div>
      <div className="w-full h-full flex whitespace-nowrap border">
        <InventorySection />
      </div>
    </div>
  );
};

export default Inventory;
