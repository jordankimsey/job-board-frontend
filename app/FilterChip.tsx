import React from 'react'

const FilterChip = ({
  text,
  handleRemoveFilter,
}: {
  text: string;
  handleRemoveFilter: (filterName: string) => void;
}) => {
  return (
    <div className='flex items-center bg-cyan-100 rounded overflow-hidden my-2 h-7 pl-2 py-1 ml-3 cursor-pointer text-cyan-500'>
      <p className='text-xs font-bold '>{text}</p>
      <button className='ml-2 bg-cyan-500 text-white p-2 hover:bg-cyan-900' onClick={() => handleRemoveFilter(text)}> 
        &#10006;
      </button>
    </div>
  );
};

export default FilterChip