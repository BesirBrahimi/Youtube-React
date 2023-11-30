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
import youtubeWhite from "../../assets/yt-white1.png";

const ResponsiveSidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    { label: string; icon: IconType } | undefined
  >();
  const { setResponsiveSidebar, responsiveSidebar, theme } = useGlobalContext();

  return (
    <div
      className={`scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:overflow-y-auto w-[240px] h-full bg-white p-2 transform ${
        responsiveSidebar ? "translate-x-0 transition-transform duration-300 ease-in-out" : "-translate-x-full transition-transform duration-300 ease-in-out delay-300"
      } ${
        theme === "dark"
          ? "dark:bg-black dark:text-white"
          : "bg-white text-black"
      }`}
    >
      <div className="flex items-center h-[40px] mb-3">
        <p
          className=" hover:bg-gray-200 dark:hover:text-black p-2 m-2 rounded-full"
          onClick={() => setResponsiveSidebar(false)}
        >
          <FaBars className="cursor-pointer w-[25px] h-[25px]" />
        </p>
        {theme === "dark" ? (
          <a href=".">
            <img
              src={youtubeWhite}
              alt="youtube-icon"
              className="object-contain w-[100px] h-[75px] cursor-pointer"
            />
          </a>
        ) : (
          <a href="/">
            <img
              src={youtubeIcon}
              alt="youtube-icon"
              className="object-contain w-[100px] h-[20px] cursor-pointer"
            />
          </a>
        )}
      </div>
      {sidebarOptions.map((option, index) => (
        <div             key={index}
        className="p-1 w-[200px]">
          <div
            className={`flex items-center py-2 px-2 justify-start cursor-pointer dark:hover:text-black rounded-md hover:bg-gray-200 ${
              selectedCategory === option
                ? "bg-gray-100 font-medium dark:text-black"
                : ""
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
            className={`w-[full] flex m-1 items-center py-2 px-3 justify-start cursor-pointer dark:hover:text-black rounded-md hover:bg-gray-200 ${
              selectedCategory === option
                ? "bg-gray-100 font-medium dark:text-black"
                : ""
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
            className={`w-[full] flex m-1 items-center py-2 px-3 justify-start cursor-pointer rounded-md dark:hover:text-black hover:bg-gray-200 ${
              selectedCategory === option
                ? "bg-gray-100 font-medium dark:text-black"
                : ""
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
