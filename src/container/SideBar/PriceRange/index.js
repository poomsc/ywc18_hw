import React from "react";

const PriceRange = ({ data: { priceRange }, setPriceLevel }) => {
  return (
    <div class="col-span-6 sm:col-span-3 pb-4">
      <label
        for="provinces"
        class="block text-base font-semibold text-gray-900"
      >
        ราคา
      </label>
      <select
        id="provinces"
        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        onChange={(e) => {
          setPriceLevel(parseInt(e.target.value) + 1);
          console.log(parseInt(e.target.value) + 1);
        }}
      >
        {priceRange.map((value, index) => {
          return <option value={index}>{value}</option>;
        })}
         <option value={5}>ไม่กำหนด</option>
      </select>
    </div>
  );
};

export default PriceRange;
