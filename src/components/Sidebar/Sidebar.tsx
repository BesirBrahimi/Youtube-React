import React, { useState } from "react";
import {
  resSidebarOptions,
  shortSidebarOptions,
  sidebarOptions,
  sidebarOptionsYou,
} from "../../data";
import { FaArrowRight } from "react-icons/fa";

const Sidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState(sidebarOptions[0]);

  return (
    <div className="w-[210px] hover:overflow-y-auto">
      {sidebarOptions.map((option, index) => (
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
      <div className="border-y-2 py-2 mt-4">
        <div className="flex items-center justify-start px-2 m-2">
          <h1 className="font-bold">You</h1>
          <span className="ml-4">
            <FaArrowRight />
          </span>
        </div>
        {sidebarOptionsYou.map((option, index) => (
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

export default Sidebar;
