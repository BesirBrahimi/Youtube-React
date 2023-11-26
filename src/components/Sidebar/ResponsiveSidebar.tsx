import React, { useState } from "react";
import {
  resSidebarOptions,
  sidebarOptions,
  sidebarOptionsYou,
} from "../../data";
import { FaBars } from "react-icons/fa6";
import youtubeIcon from "../../assets/logo-yt.png";
import { useGlobalContext } from "../../context";
import { FaArrowRight } from "react-icons/fa";
import { IconType } from "react-icons";

const ResponsiveSidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState<{ label: string; icon: IconType } | undefined>(); 
  const { setResponsiveSidebar, responsiveSidebar } = useGlobalContext();

  const sidebarStyle: React.CSSProperties = {
    maxHeight: responsiveSidebar ? "100%" : "0",
    opacity: responsiveSidebar ? 1 : 0,
    transition: "max-height 0.3s ease, opacity 0.3s ease",
    overflow: "hidden",
    visibility: responsiveSidebar ? "visible" : "hidden",
  };

  return (
<div
      className={`w-[240px] h-full bg-white p-2`}
      style={sidebarStyle}
    >      <div className="flex items-center h-[40px] mb-3">
        <p
          className=" hover:bg-gray-200 p-2 m-2 rounded-full"
          onClick={() => setResponsiveSidebar(false)}
        >
          <FaBars className="cursor-pointer w-[25px] h-[25px]" />
        </p>
        <a href="">
          <img
            src={youtubeIcon}
            alt="youtube-icon"
            className="object-contain w-[100px] h-[20px] cursor-pointer"
          />
        </a>
      </div>
      {sidebarOptions.map((option, index) => (
        <div className="p-1 w-[200px]">
          <div
            key={index}
            className={`flex items-center py-2 px-2 justify-start cursor-pointer rounded-md hover:bg-gray-200 ${
              selectedCategory === option ? "bg-gray-100 font-medium" : ""
            }`}
            onClick={() => setSelectedCategory(option)}
          >
            <span className="text-2xl mr-4">
              {React.createElement(option.icon)}
            </span>
            <span className="ml-2">{option.label}</span>
          </div>
        </div>
      ))}
      <div className="w-[90%] border-y-2 py-2 mt-4">
        <div className="flex items-center justify-start px-2 m-2">
          <h1 className="font-bold">You</h1>
          <span className="ml-4">
            <FaArrowRight />
          </span>
        </div>
        {sidebarOptionsYou.map((option, index) => (
          <div
            key={index}
            className={`w-[full] flex m-1 items-center py-2 px-3 justify-start cursor-pointer rounded-md hover:bg-gray-200 ${
              selectedCategory === option ? "bg-gray-100 font-medium" : ""
            }`}
            onClick={() => setSelectedCategory(option)}
          >
            <span className="text-2xl mr-4">
              {React.createElement(option.icon)}
            </span>
            <span className="ml-2">{option.label}</span>
          </div>
        ))}
      </div>
      <div className="w-[90%] border-m-2 py-2">
        <div className="flex items-center justify-start px-2 m-2">
          <h1 className="font-bold">Explore</h1>
        </div>
        {resSidebarOptions.map((option, index) => (
          <div
            key={index}
            className={`w-[full] flex m-1 items-center py-2 px-3 justify-start cursor-pointer rounded-md hover:bg-gray-200 ${
              selectedCategory === option ? "bg-gray-100 font-medium" : ""
            }`}
            onClick={() => setSelectedCategory(option)}
          >
            <span className="text-2xl mr-4">
              {React.createElement(option.icon)}
            </span>
            <span className="ml-2">{option.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveSidebar;
