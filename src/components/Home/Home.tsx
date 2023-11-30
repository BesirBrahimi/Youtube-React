import React, { useState } from "react";
import OptionList from "./OptionList";
import { categories } from "../../data";
import VideoDetails from "./VideoDetails";
import { useGlobalContext } from "../../context";

const Home = () => {
  const { shortSidebar, theme} = useGlobalContext();

  return (
    <div>
      <div
        className={`fixed top-14 z-10 mt-1 pb-1 w-[94%]  ${
          shortSidebar && "w-[86%]"
        }  px-1`}
      >
        <OptionList />
      </div>
      <div className="mt-12">
        <VideoDetails />
      </div>
    </div>
  );
};

export default Home;
