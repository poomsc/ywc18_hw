import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import PriceRange from "./PriceRange";
import Provinces from "./Provinces";
import SubCategories from "./SubCategories";

const Container = ({ children, openSideBar }) => {
  return (
    <div
      className={`${
        openSideBar ? "" : "hidden"
      } z-30 fixed inset-0 pt-16 h-full bg-white z-90 w-full border-b lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5 shadow-lg overflow-y-scroll`}
    >
      <div class="h-full scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:top-20 bg-white lg:bg-transparent">
        {children}
      </div>
    </div>
  );
};

const SideBar = ({
  data,
  openSideBar,
  setOpenSideBar,
  setCategories,
  setProvinces,
  setPriceLevel,
  setSubCategories,
  categories,
}) => {
  return (
    <Container openSideBar={openSideBar}>
      <div class="flex flex-col px-5">
        {data && (
          <>
            <Categories data={data} setCategories={setCategories} />
            <Provinces data={data} setProvinces={setProvinces} />
            <PriceRange data={data} setPriceLevel={setPriceLevel}/>
            {/* {console.log(data["categories"])}
            {console.log(categories)} */}
            {categories > -1 && (<SubCategories data={data["categories"][categories]} setSubCategories={setSubCategories}/>)}
          </>
        )}
      </div>
    </Container>
  );
};

export default SideBar;
