import React from "react";

const Provinces = ({ data: { provinces }, setProvinces }) => {
  return (
    <div class="col-span-6 sm:col-span-3 pb-4">
      <label
        for="provinces"
        class="block text-base font-semibold text-gray-900"
      >
        จังหวัด / ใกล้ฉัน
      </label>
      <select
        id="provinces"
        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        onChange={(e) => {
          setProvinces(e.target.value);
          console.log(e.target.value);
        }}
      >
        {provinces.map((value) => {
          return <option value={value}>{value}</option>;
        })}
      </select>
    </div>
  );
};

export default Provinces;
