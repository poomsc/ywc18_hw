import React from "react";
import logo from "./../../assests/logo.png";

const HeadBar = () => {
  return (
    <nav className="flex flex-wrap bg-white p-3 fixed w-full z-50 h-16">
      <div class="flex justify-items-center">
        <div class="flex">
          <img
            class="h-10 object-cover rounded-lg rounded-r-none pb-5/6"
            src={logo}
            alt="logo"
          />
        </div>
        <div class="flex box">
          <div class="box-wrapper">
            <div class=" bg-white rounded flex items-center w-96 p-3 shadow-sm border border-gray-200">
              <button class="outline-none focus:outline-none">
                <svg
                  class=" w-5 text-gray-600 h-5 cursor-pointer"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
              <input
                type="search"
                name=""
                placeholder="search for images"
                x-model="q"
                class="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
              />
              <div class="select">
                <select
                  name=""
                  id=""
                  x-model="image_type"
                  class="text-sm outline-none focus:outline-none bg-transparent"
                >
                  <option value="ทั้งหมด" selected>
                    ทั้งหมด
                  </option>
                  <option value="พื้นที่ใกล้ฉัน">พื้นที่ใกล้ฉัน</option>
                  <option value="ชื่อร้านค้า">ชื่อร้านค้า</option>
                  <option value="ประเภทร้านค้า">ประเภทร้านค้า</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex items-center flex-shrink-0 text-white mr-6 w-1">
      </div>
      
      </div> */}
    </nav>
  );
};

export default HeadBar;