import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Home from "../../components/Home/Home";
import ShortSidebar from "../../components/Sidebar/shortSidebar";
import { useGlobalContext } from "../../context";
import ResponsiveSidebar from "../../components/Sidebar/ResponsiveSidebar";

const Layout = () => {
  const { shortSidebar, responsiveSidebar } = useGlobalContext();

  return (
    <div className="w-full h-full">
      <div className="sticky top-0 z-50 bg-white">
        <Header />
      </div>
      <div className="my-2">
        {shortSidebar ? (
          <div className="flex justify-around w-full">
            <div className="w-1/6 sm:hidden xl:flex fixed left-0 h-full">
              <Sidebar />
            </div>
            <div className="sm:w-5/6 lg:w-5/6 xl:ml-[15%] h-full">
              <Home />
            </div>
          </div>
        ) : (
          <div className="flex justify-around">
            <div className="w-1/12 sm:hidden xl:flex fixed left-0 h-full">
              <ShortSidebar />
            </div>
            <div className="sm:w-11/12 lg:w-11/12 xl:ml-[8%] h-full">
              <Home />
            </div>
          </div>
        )}
          <div
            className={`${responsiveSidebar && "bg-[#000000b3] z-50 fixed top-0 left-0 w-full h-full xl:hidden"}`}
          >
            <ResponsiveSidebar />
          </div>
      </div>
    </div>
  );
};

export default Layout;
