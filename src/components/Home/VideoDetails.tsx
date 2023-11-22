import React, { useState } from "react";
import { YouTubeVideo, useGlobalContext } from "../../context";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

const VideoDetails = () => {
  const { youtubeData, shortSidebar, searchInput, isLoading, selectedCategory } =
    useGlobalContext();
  const [hoveredVideo, setHoveredVideo] = useState("");

  const filteredYoutubeData = youtubeData
    ? youtubeData.filter((youtube) =>
        youtube.snippet.title?.toLowerCase().includes(searchInput.toLowerCase())
      )
    : [];

  const navigate = useNavigate();

  const handleVideoClick = (video: YouTubeVideo) => {
    navigate(`/layout/${video.id.videoId}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleHover = (videoId: string) => {
    setHoveredVideo(videoId);
  };

  const handleMouseLeave = () => {
    setHoveredVideo("");
  };

  const formatPublishedAt = (publishedAt: string) => {
    const date = new Date(publishedAt);
    return date.toLocaleDateString(); 
  };

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        
          <div
            className={`grid grid-cols-1 md:grid-cols-2 ${
              shortSidebar ? "xl:grid-cols-3" : "lg:grid-cols-3 xl:grid-cols-4"
            } lg:grid-cols-3 xl:grid-cols-4 gap-2`}
          >
            {filteredYoutubeData.map((video, index) => (
              <div key={index} className="p-2 relative">
                <div className="relative group">
                  <img
                    src={video.snippet.thumbnails.high.url}
                    alt={video.snippet.title}
                    onClick={() => handleVideoClick(video)}
                    className="sm:h-[285px] w-full md:h-[230px] object-cover rounded-xl mb-2 cursor-pointer transition-opacity duration-300 ease-in-out"
                  />
                  <iframe
                    title={video.snippet.title}
                    width="100%"
                    onClick={() => handleVideoClick(video)}
                    height="auto"
                    src={`https://www.youtube.com/embed/${
                      video.id.videoId
                    }?autoplay=${hoveredVideo === video.id.videoId ? 1 : 0}`}
                    frameBorder="0"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100"
                    onMouseEnter={() => handleHover(video.id.videoId)}
                    onMouseLeave={handleMouseLeave}
                  ></iframe>
                </div>
                <div className="flex justify-center">
                  <img
                    src={video.snippet.thumbnails.default.url}
                    alt={video.snippet.channelTitle}
                    className="w-8 h-8 rounded-full mr-2 mt-2 object-cover"
                  />
                  <div className="flex flex-col w-[90%]">
                    <h2
                      onClick={() => handleVideoClick(video)}
                      className="text-lg font-semibold mb-1 cursor-pointer"
                    >
                      {video.snippet.title}
                    </h2>
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
      )}
    </div>
  );
};

export default VideoDetails;
