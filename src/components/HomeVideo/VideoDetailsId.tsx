import React, { useRef, useState } from "react";
import { useGlobalContext } from "../../context";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { RxScissors } from "react-icons/rx";
import { IoIosMore } from "react-icons/io";
import { useParams } from "react-router-dom";
import { BiSolidLike } from "react-icons/bi";
import Comments from "./Comments";
import Loading from "../Loading/Loading";


const VideoDetailsId = () => {
  const { id } = useParams();
  const { youtubeData, theme} = useGlobalContext();
  const [like, setLike] = useState<Boolean>(true);
 

  const selectedVideo = youtubeData.find((video) => video.id.videoId === id);

  if (!selectedVideo) {
    return (
      <Loading />
    );
  }

  
  const formatPublishedAt = (publishedAt: string) => {
    const date = new Date(publishedAt);
    return date.toLocaleDateString(); 
  };

  return (
    <div className="flex flex-col w-[100%] xl:w-[95%] xl:ml-8">
      <div className="w-full sm:h-[270px] md:h-[500px]">
        <iframe
          width="100%"
          className="rounded-lg"
          height="100%"
          title={selectedVideo.snippet.title}
          src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}?autoplay=1`}
        ></iframe>
      </div>
      <div className="p-2 w-[100%] mt-2 flex flex-col">
        <h2 className="text-lg font-semibold mb-1 xl:w-[80%]">
          {selectedVideo.snippet.title}
        </h2>
        <div className="flex items-center justify-between w-full">
          <div className="w-full flex flex-col sm:flex-col lg:flex-row justify-between">
            <div className="flex items-center mb-4">
              <div className="">
                <img
                  src={selectedVideo.snippet.thumbnails.default.url}
                  alt={selectedVideo.snippet.channelTitle}
                  className="w-12 h-12 rounded-full mr-2 mt-2 object-cover"
                />
              </div>

              <div className="flex flex-col w-[39%] mt-1">
                <h2 className="text-md font-medium">
                  {selectedVideo.snippet.channelTitle}
                </h2>
                <p className="text-sm text-gray-500">
                  {formatPublishedAt(selectedVideo.snippet.publishedAt)}
                </p>
              </div>
              <div className="w-[30%]">
                <button className={`w-[100px] mt-1 h-[35px] ml-1 rounded-full hover:bg-[#7f7d7d]  ${theme === "dark" ? "dark:bg-white text-black " : "bg-[#0b0b0b] text-white "}`}>
                  Subscribe
                </button>
              </div>
            </div>
            <div className="sm:w-[90%] flex lg:w-[40%] ml-4 items-center justify-between">
              <p
                onClick={() => setLike((prev) => !prev)}
                className={`flex items-center rounded-full p-2 cursor-pointer hover:bg-gray-200 ${theme === "dark" ? "dark:bg-[#383838]" : "bg-gray-100"  }`}
              >
                {like ? (
                  <AiOutlineLike className="text-2xl mr-2" />
                ) : (
                  <BiSolidLike className="text-2xl mr-2" />
                )}
                {like ? "21" : "22"}
              </p>
              <p className={`text-2xl ${theme === "dark" ? 'dark:bg-[#383838]' : 'bg-gray-100'} rounded-full p-2 cursor-pointer hover:bg-gray-200`}>
                <BiDislike />
              </p>
              <p className={`text-2xl ${theme === "dark" ? 'dark:bg-[#383838]' : 'bg-gray-100'} rounded-full p-2 cursor-pointer hover:bg-gray-200`}>

                <RiShareForwardLine />
              </p>
              <div className={`flex items-center text-2xl rounded-full p-2 cursor-pointer hover:bg-gray-200 ${theme === 'dark' ? "dark:bg-[#383838]" : "bg-gray-100" }`}>
                <RxScissors className="mr-2" />
                <h1 className="text-sm">Clip</h1>
              </div>
              <p className={`text-2xl rounded-full p-2 cursor-pointer hover:bg-gray-200 ${theme === "dark" ? "dark:bg-[#383838]" : "bg-gray-100" }`}>
                <IoIosMore />
              </p>
            </div>
          </div>
        </div>
      </div>
       <Comments />
    </div>
  );
};

export default VideoDetailsId;
