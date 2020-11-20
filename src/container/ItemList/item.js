import React from "react";
import { BiBookAdd } from "react-icons/bi";
import { AiFillCar } from "react-icons/ai";

const Item = ({
  data: {
    shopNameTH,
    categoryName,
    subcategoryName,
    coverImageId,
    facilities,
    priceLevel,
    isOpen,
    highlightText,
    recommendedItems,
    addressProvinceName,
    addressDistrictName,
  },
}) => {
  const a = "heloooooo";
  return (
    <div class="md:flex shadow-lg  mx-6 md:mx-auto md:my-2 my-40 max-w-lg md:max-w-2xl h-64">
      <img
        class="h-full w-full md:w-1/3  object-cover rounded-lg rounded-r-none pb-5/6"
        src={coverImageId}
        alt="bag"
      />
      <div class="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
        <div class="flex items-center">
          <h1 class="text-xl text-gray-800 font-bold mr-auto">{shopNameTH}</h1>
          {isOpen == "Y" ? (
            <button class="bg-green-600 text-white px-2 py-2 rounded-md">
              เปิดอยู่
            </button>
          ) : (
            <button class="bg-gray-600 text-white px-2 py-2 rounded-md">
              ปิด
            </button>
          )}
        </div>
        <div class="text-base text-gray-400">
          {console.log(a.repeat(20))}
          <span>{subcategoryName} | </span>
          <span class="font-semibold text-black">{"฿".repeat(priceLevel)}</span>
          <span class="font-semibold ">{"฿".repeat(4 - priceLevel)}</span>
          <span> | {addressDistrictName} </span>
          {addressProvinceName}
        </div>
        <hr />
        <div class="text-base">
          <p class="text-gray-500 mt-4">{highlightText}</p>
          <p class="mt-4">
            <span class="">รายการนะนำ: </span>
            <span class=" text-gray-500">{recommendedItems.join(", ")}</span>
          </p>
        </div>
        <div class="text-xl text-green-600 flex items-center mt-4 top-auto">
          <button class="bg-white px-2 py-2 rounded hover:underline">
            {facilities.includes("ที่จอดรถ") ? <AiFillCar /> : <></>}
          </button>
          <button class="bg-white px-2 py-2 rounded hover:underline">
            {facilities.includes("รับจองล่วงหน้า") ? <BiBookAdd /> : <></>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
