import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { BsCameraReels } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { FaSnapchatGhost, FaArrowLeft } from "react-icons/fa";
import youtubeIcon from "../../assets/logo-yt.png";
import { useGlobalContext } from "../../context";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const {
    openShortSidebar,
    setResponsiveSidebar,
    searchInput,
    setSearchInput,
    resSidebar,
    setResSidebar,
    responsiveSidebar,
  } = useGlobalContext();

  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 468) {
        setOpenSearch(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex items-center justify-between w-full h-[60px] py-2 px-2">
      <div
        className={`${
          openSearch ? "hidden" : "flex"
        } items-center h-[40px] w-[30%]`}
      >
        {!location.pathname.includes("/layout/") && (
          <p
            className=" hover:bg-gray-200 p-2 rounded-full sm:hidden xl:flex"
            onClick={openShortSidebar}
          >
            <FaBars className="cursor-pointer w-[25px] h-[25px]" />
          </p>
        )}
        {!location.pathname.includes("/layout/") && (
          <p
            className=" hover:bg-gray-200 p-2 rounded-full xl:hidden"
            onClick={() => setResponsiveSidebar((prev) => !prev)}
          >
            <FaBars className="cursor-pointer w-[25px] h-[25px]" />
          </p>
        )} 
        {location.pathname.includes("/layout/") && (
          <p
            className="hover:bg-gray-200 p-2 rounded-full"
            onClick={() => setResponsiveSidebar((prev) => !prev)}
          >
            <FaBars className="cursor-pointer w-[25px] h-[25px]" />
          </p>
        )}

        <a href="/">
          <img
            src={youtubeIcon}
            alt="youtube-icon"
            className="sm:w-[110px] sm:h-[20px] object-contain cursor-pointer ml-4"
          />
        </a>
      </div>
      <div className="sm:hidden md:flex w-[45%] justify-between items-center p-2 mx-auto ml-4">
        <div className="flex justify-between items-center p-2 border-2 border-r-0 rounded-l-full mx-auto w-[100%] sm:hidden md:flex">
          <input
            type="text"
            value={searchInput}
            className="focus:border-none focus:outline-none focus:ring-0 w-full"
            placeholder="Search..."
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <div className=" bg-gray-100 hover:bg-gray-200 cursor-pointer p-2 border-l-2 border-2 rounded-r-full flex items-center mr-1 justify-between sm:hidden md:flex">
          <IoSearch
            style={{ color: "#5c5959" }}
            className="w-[45px] h-[24px]"
          />
        </div>
        <div className="md:bg-gray-100 hover:bg-gray-200 rounded-full p-2 cursor-pointer">
          <FaMicrophone className="w-6 h-6 rounded-full" />
        </div>
      </div>
      {openSearch && (
        <div className="w-[90%] flex items-center ">
          <FaArrowLeft
            onClick={() => setOpenSearch(false)}
            className="w-[30px] cursor-pointer text-3xl p-1 rounded-full mr-2 bg-gray-100 hover:bg-gray-200  "
          />
          <div className="flex justify-between items-center p-2 border-2 border-r-0 rounded-l-full sm:w-[80%] ">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="focus:border-none focus:outline-none focus:ring-0 sm:w-[300px]"
              placeholder="Search..."
            />
          </div>
          <div className="md:flex bg-gray-100 hover:bg-gray-200 cursor-pointer p-2 border-l-2 border-2 rounded-r-full flex items-center justify-between">
            <IoSearch
              style={{ color: "#5c5959" }}
              className="w-[30px] h-[24px]"
            />
          </div>
        </div>
      )}

      {!openSearch && (
        <div
          onClick={() => setOpenSearch(true)}
          className="ml-20 md:ml-8 md:hidden p-2 hover:bg-gray-200 rounded-full"
        >
          <IoSearch className="w-6 h-6 md:w-8 md:h-8 rounded-full cursor-pointer" />
        </div>
      )}
      <div className="md:hidden hover:bg-gray-200 rounded-full p-2 cursor-pointer">
        <FaMicrophone className="w-6 h-6 rounded-full" />
      </div>
      {!openSearch && (
        <div className="sm:w-[120px] flex items-center p-1 justify-between md:w-[12%] sm:justify-center ">
          <p className="rounded-full py-1 hover:bg-gray-200 cursor-pointer">
            <BsCameraReels className="w-[20px] h-[30px] mx-6 sm:mx-2" />
          </p>
          <p className="rounded-full py-1 hover:bg-gray-200 cursor-pointer">
            <FaSnapchatGhost className="w-[20px] h-[30px] mx-6 sm:mx-2" />
          </p>
          <p className="cursor-pointer">
            <MdAccountCircle className="w-[30px] h-[35px] mx-4 sm:mx-1 " />
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
