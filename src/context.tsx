import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import axios from "axios";
import { YOUTUBE_API_URL } from "./utils/constans";
import { categories } from "./data";

interface AppContextType {
  shortSidebar: boolean;
  openShortSidebar: () => void;
  setShortSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  responsiveSidebar: boolean;
  setResponsiveSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  searchInput: string;
  setSearchInput: (searchInput: string) => void;
  youtubeData: YouTubeVideo[];
  setYoutubeData: (youtubeData: YouTubeVideo[]) => void;
  resSidebar: boolean;
  setResSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  videoCategories: VideoCategory[];
  isLoading: boolean;
  selectedCategory: string;
  setSelectedCategory: (selectedCategory: string) => void;
}

export interface VideoCategory {
  id: string;
  snippet: {
    title: string;
  };
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

interface MyContextProviderProps {
  children: ReactNode;
}

export interface YouTubeVideo {
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishTime: string;
    publishedAt: string;
    categories: string[];
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
    };
    title: string;
  };
}

export const MyContextProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

  const [shortSidebar, setShortSidebar] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [responsiveSidebar, setResponsiveSidebar] = useState<boolean>(false);
  const [videoCategories, setVideoCategories] = useState<VideoCategory[]>([]);
  const [youtubeData, setYoutubeData] = useState<YouTubeVideo[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [resSidebar, setResSidebar] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const openShortSidebar = () => {
    setShortSidebar((prev) => !prev);
  };

  const fetchDataFromYouTube = async (input: string) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${YOUTUBE_API_URL}/search`, {
        params: {
          key: API_KEY,
          maxResults: 1000,
          q: input,
          part: "snippet",
          type: "video",
        },
      });
      setYoutubeData(response.data.items);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data from YouTube API:", error);
    }
  };
  
  

  const fetchVideoCategories = async () => {
    try {
      const response = await axios.get(`${YOUTUBE_API_URL}/videoCategories`, {
        params: {
          key: API_KEY,
          part: "snippet",
          regionCode: "XK", 
        },
      });

      setVideoCategories(response.data.items);
    } catch (error) {
      console.error("Error fetching video categories from YouTube API:", error);
    }
  };

  

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1108) {
        setResponsiveSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (API_KEY) {
      const queryToFetch = searchInput || selectedCategory;
      fetchDataFromYouTube(queryToFetch);
      fetchVideoCategories();
    }
  }, [API_KEY, searchInput, selectedCategory]);
  

  return (
    <AppContext.Provider
      value={{
        openShortSidebar,
        shortSidebar,
        setShortSidebar,
        responsiveSidebar,
        setResponsiveSidebar,
        youtubeData,
        setYoutubeData,
        searchInput,
        setSearchInput,
        resSidebar,
        setResSidebar,
        videoCategories,
        isLoading,
        setSelectedCategory,
        selectedCategory
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a MyContextProvider");
  }
  return context;
};
