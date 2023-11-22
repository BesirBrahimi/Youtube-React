import React, { useState } from "react";
import Header from "../Header/Header";
import VideoDetailsId from "./VideoDetailsId";
import VideosDetails from "./VideosDetails";
import OptionList from "../Home/OptionList";

const HomeVideo = () => {
  return (
    <div className="xl:flex p-5 w-[96%] mx-auto">
      <div className="w-[96%] xl:w-[65%] ">
        <VideoDetailsId />
      </div>
      <div className="p-1.5 w:[90%] xl:w-[30%]">
        <OptionList />
        <VideosDetails />
      </div>
    </div>
  );
};

export default HomeVideo;
