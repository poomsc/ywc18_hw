import React from "react";
import Item from "./item";

const ItemList = ({ data }) => {
  return (
    <div className="container p-5 mx-auto">
      <div className="flex flex-wrap -m-4">
        {data &&
          data["merchants"].map((val) => {
            return <Item data={val} />;
          })}
      </div>
    </div>
  );
};

export default ItemList;
