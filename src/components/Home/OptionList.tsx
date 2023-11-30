import React from 'react';
import { useGlobalContext } from '../../context';

const OptionList = () => {
  const { selectedCategory, setSelectedCategory, videoCategories, theme } = useGlobalContext();

  const handleAllClick = () => {
    setSelectedCategory('All');
  };

  return (
    <div className={`overflow-x-auto w-[97.5%] ${theme === 'dark' ? 'dark:bg-[#121211] dark:text-white' : 'bg-white'}`}>
      <div className='flex whitespace-nowrap gap-3 transition-transform w-[max-content] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 overflow-y-hidden overflow-x-auto'>
        <button
          className={`py-1 px-3 rounded-lg mb-1.5 whitespace-nowrap font-medium transition-colors duration-300 ${
            selectedCategory === 'All'
              ? (theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white')
            :
              (theme === 'dark' ? 'bg-[#383838] text-white' : 'bg-gray-100 text-black')
          }`}
          onClick={handleAllClick}
        >
          All
        </button>
        {videoCategories.map((category) => (
          <button
            key={category.id}
            className={`py-1 px-3 rounded-lg mb-1.5 whitespace-nowrap font-medium transition-colors duration-300 ${
              selectedCategory === category.id
                ? (theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white')
                :  (theme === 'dark' ? 'bg-[#383838] text-white' : 'bg-gray-100 text-black')
            }`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.snippet.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OptionList;



// import React from 'react';
// import { useGlobalContext } from '../../context';

// const OptionList = () => {
//   const { selectedCategory, setSelectedCategory, videoCategories, theme } = useGlobalContext();

//   const handleAllClick = () => {
//     setSelectedCategory('All');
//   };

//   return (
//     <div className={`overflow-x-auto w-[97%] ${theme === 'dark' ? 'dark:bg-black dark:text-white' : ''}`}>
//       <div className='flex whitespace-nowrap gap-3 transition-transform w-[max-content] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 overflow-y-hidden overflow-x-auto'>
//         <button
//            className={`py-1 px-3 rounded-lg mb-1.5 whitespace-nowrap font-medium transition-colors duration-300 ${
//             selectedCategory === "All"
//               ? (theme === 'dark' ? 'hover:bg-gray-900 bg-white text-black' : 'hover:bg-gray-900 bg-black text-white')
//               : (theme === 'dark' ? 'hover:bg-gray-300 bg-gray-500' : 'hover:bg-gray-300 bg-gray-100')
//           }`}
//           onClick={handleAllClick}
//         >
//           All
//         </button>
//         {videoCategories.map((category) => (
//           <button
//             key={category.id}
//             className={`py-1 px-3 rounded-lg mb-1.5 whitespace-nowrap font-medium transition-colors duration-300 ${
//               selectedCategory === category.id
//                 ? (theme === 'dark' ? 'hover:bg-gray-900 bg-white text-black' : 'hover:bg-gray-900 bg-black text-white')
//                 : (theme === 'dark' ? 'hover:bg-gray-300 bg-gray-500' : 'hover:bg-gray-300 bg-gray-100')
//             }`}
//             onClick={() => setSelectedCategory(category.id)}
//           >
//             {category.snippet.title}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OptionList;
