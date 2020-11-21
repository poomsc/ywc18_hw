import React from "react";
import Item from "./item";
import stringSimilarity from "string-similarity";

const ItemList = ({
  data,
  categories,
  provinces,
  priceLevel,
  subCategories,
  wordSearch,
}) => {
  return (
    <div className="container pt-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        {data &&
          data["merchants"].map((val) => {
            return (
              <>
              {console.log("priceLevel",val["priceLevel"],priceLevel)};
                {stringSimilarity.compareTwoStrings(
                  provinces,
                  val["addressProvinceName"]
                ) > 0.7 &&
                  val["priceLevel"] <= priceLevel && (
                    <Item data={val} wordSearch={wordSearch}/>
                  )}
              </>
            );
            // categories == ""||val["categoryName"] == categories ? (
            //   <Item data={val} />
            // ) : (
            //   <></>
            // );
          })}
      </div>
    </div>
  );
};

export default ItemList;
