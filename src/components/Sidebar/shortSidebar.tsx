import React, { useState } from "react";
import { shortSidebarOptions } from "../../data";
import { IconType } from "react-icons";

const ShortSidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState<{ label: string; icon: IconType } | undefined>();
  
    return (
      <div className="my-1 w-[100px]">
        {shortSidebarOptions.map((option, index) => (
          <div
            key={index}
            className={`w-full flex flex-col mb-4 items-center py-2 px-1 justify-start cursor-pointer rounded-md hover:bg-gray-200 ${
              selectedCategory === option ? 'bg-gray-100 font-medium' : ''
            }`}
            onClick={() => setSelectedCategory(option)}
          >
            <span className="text-2xl">{React.createElement(option.icon)}</span>
            <span className="">{option.label}</span>
          </div>
        ))}
      </div>
    )
  }
  
  export default ShortSidebar;
  