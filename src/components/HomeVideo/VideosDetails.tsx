import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import { useNavigate } from "react-router-dom";

const VideosDetails = () => {
  const { youtubeData } = useGlobalContext();


  const navigate = useNavigate();

  const handleVideoClick = (video: any) => {
    navigate(`/layout/${video.id.videoId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatPublishedAt = (publishedAt: string) => {
    const date = new Date(publishedAt);
    return date.toLocaleDateString(); // Adjust formatting as needed
  };

  return (
    <div
      className="flex flex-col"
    >
      {youtubeData.map((video, index) => (
        <div key={index} className="flex  md:w-[70%] xl:w-[100%] px-1 pt-2 relative">
          <div className="relative group w-[45%] mr-2">
            <img
              src={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
              onClick={() => handleVideoClick(video)}
              className="object-cover w-[200px] h-[100px] rounded-xl mb-1 cursor-pointer transition-opacity duration-300 ease-in-out"
            />
          </div>
          <div className="flex justify-center w-[55%]"> 
            <div className="flex flex-col">
              <p
                onClick={() => handleVideoClick(video)}
                className="text-1xl font-semibold cursor-pointer"
              >
             {video.snippet.title.length > 50
                ? `${video.snippet.title.slice(0, 50)}...`
                : video.snippet.title}
              </p>
              <p className="text-sm font-medium">
                {video.snippet.channelTitle}
              </p>
              <p className="text-sm text-gray-500">
                {formatPublishedAt(video.snippet.publishedAt)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideosDetails;
