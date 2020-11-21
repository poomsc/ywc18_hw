import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";

import HeadBar from "./../HeadBar";
import SideBar from "./../SideBar";
import ItemList from "./../ItemList";

const API = "https://panjs.com/ywc18.json";

const AppHome = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [openSideBar, setOpenSideBar] = useState(true);
  const [categories, setCategories] = useState(-1);
  const [provinces, setProvinces] = useState("กรุงเทพมหานคร");
  const [priceLevel, setPriceLevel] = useState(5);
  const [subCategories, setSubCategories] = useState("");
  const [wordSearch, setWordSearch] = useState("");
  const [searchType, setSearchType] = useState(-1);

  useEffect(async () => {
    setLoading(true);
    try {
      fetch(API)
        .then((response) => response.json())
        .then((data) => setData(data));
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }, []);

  return loading ? (
    <div className="flex justify-center items-center min-h-screen text-white">
      <ReactLoading
        type={"spinningBubbles"}
        color={"#6EDCFF"}
        height={"8%"}
        width={"8%"}
      />
    </div>
  ) : (
    <div>
      <HeadBar setWordSearch={setWordSearch} openSideBar={openSideBar} setOpenSideBar={setOpenSideBar}/>
      <div className="w-full max-w-screen-xl mx-auto px-6">
        <div class="lg:flex">
          <SideBar
            data={data}
            openSideBar={openSideBar}
            categories={categories}
            setOpenSideBar={setOpenSideBar}
            setCategories={setCategories}
            setProvinces={setProvinces}
            setPriceLevel={setPriceLevel}
            setSubCategories={setSubCategories}
          />
          <div className=" min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5">
            <ItemList
              data={data}
              categories={categories}
              provinces={provinces}
              priceLevel={priceLevel}
              subCategories={subCategories}
              wordSearch={wordSearch}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHome;
