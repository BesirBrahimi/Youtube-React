import React from "react";
import Header from "../../components/Header/Header";
import { useGlobalContext } from "../../context";
import ResponsiveSidebar from "../../components/Sidebar/ResponsiveSidebar";
import HomeVideo from "../../components/HomeVideo/HomeVideo";

const LayoutVideo = () => {
  const { responsiveSidebar } = useGlobalContext();


  return (
    <div className="sm:w-[100%] md:w-[98%] mx-auto">
      <div className="sticky top-0 z-50 bg-white">
        <Header />
      </div>
      <HomeVideo />
         <div
            className={`${responsiveSidebar && "bg-[#000000b3] z-50 fixed top-0 left-0 w-full h-full"}`}
          >
            <ResponsiveSidebar />
          </div>
    </div>
  );
};

export default LayoutVideo;
