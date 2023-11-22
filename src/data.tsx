import { IoHomeSharp } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GoHistory } from "react-icons/go";
import { MdVideoSettings } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { IconType } from 'react-icons';
import { IoMdTrendingUp } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdMusicNote } from "react-icons/md";
import { PiGameControllerLight } from "react-icons/pi";
import { IoNewspaper } from "react-icons/io5";
import { GiChampions } from "react-icons/gi";
import { FaBookReader } from "react-icons/fa";
import { MdOutlinePodcasts } from "react-icons/md";



export const sidebarOptions: { label: string; icon: IconType }[] = [
  { label: 'Home', icon: IoHomeSharp },
  { label: 'Shorts', icon: SiYoutubeshorts },
  { label: 'Subscriptions', icon: MdOutlineSubscriptions },
];

export const sidebarOptionsYou:{label: string, icon: IconType}[] = [
  { label: 'Your channel', icon: CgProfile },
  { label: 'History', icon: GoHistory },
  { label: 'Your Videos', icon: MdVideoSettings },
  { label: 'Watch Later', icon: FaRegClock },
  { label: 'Liked Videos', icon: AiOutlineLike },
]
export const resSidebarOptions:{label: string, icon: IconType}[] = [
  { label: 'Trending', icon: IoMdTrendingUp },
  { label: 'Shopping', icon: MdOutlineShoppingBag },
  { label: 'Music', icon: MdMusicNote },
  { label: 'Gaming', icon: PiGameControllerLight },
  { label: 'News', icon: IoNewspaper },
  { label: 'Sports', icon: GiChampions },
  { label: 'Learning', icon: FaBookReader },
  { label: 'Podcasts', icon: MdOutlinePodcasts },
]

export const shortSidebarOptions: { label: string; icon: IconType }[] = [
  { label: 'Home', icon: IoHomeSharp },
  { label: 'Shorts', icon: SiYoutubeshorts },
  { label: 'Subscriptions', icon: MdOutlineSubscriptions },
  { label: 'You', icon: CgProfile },
];

export type OptionType = {
  label: string;
  value: string;
};

export const categories:OptionType[] = [
    { label: 'All', value: 'all' },
    { label: 'Trending', value: 'trending' },
    { label: 'JavaScript', value: 'javascript' },
    { label: 'Sports', value: 'sports' },
    { label: 'Movies', value: 'movies' },
    { label: 'Music', value: 'music' },
    { label: 'Gaming', value: 'gaming' },
    { label: 'Technology', value: 'technology' },
    { label: 'News', value: 'news' },
    { label: 'Education', value: 'education' },
    { label: 'Cooking', value: 'cooking' },
    { label: 'Travel', value: 'travel' },
    { label: 'Comedy', value: 'comedy' },
    { label: 'Science', value: 'science' },
    { label: 'Fashion', value: 'fashion' },
    { label: 'Fitness', value: 'fitness' },
    { label: 'Beauty', value: 'beauty' },
    { label: 'Cars', value: 'cars' },
    { label: 'Pets', value: 'pets' },
  ];
  
