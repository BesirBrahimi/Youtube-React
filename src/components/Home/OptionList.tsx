import React from 'react';
import { useGlobalContext } from '../../context';

  const OptionList = () => {

    const {selectedCategory, setSelectedCategory} = useGlobalContext()

  const { videoCategories} = useGlobalContext()
  return (
    <div className="overflow-x-auto w-[97%]  ">
      <div className='flex whitespace-nowrap gap-3 transition-transform w-[max-content] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 overflow-y-hidden overflow-x-auto'>
        {videoCategories.map((category) => (
          <button
            key={category.id}
            className={`py-1 px-3 rounded-lg mb-1.5 whitespace-nowrap font-medium transition-colors duration-300 ${
              selectedCategory === category.id
                ? 'bg-black text-white hover:bg-gray-900'
                : 'bg-gray-100 text-black hover:bg-gray-300'
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
