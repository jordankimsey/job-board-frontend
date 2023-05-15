import React, { Dispatch, SetStateAction } from 'react'
import FilterChip from './FilterChip';

const FilterBand = ({
  filters,
  handleClearFilter,
  handleRemoveFilter,
}: {
  filters: string[];
  handleClearFilter: () => void;
  handleRemoveFilter: (filterName: string) => void;
}) => {
  return (
    <>
      {filters.length > 0 && (
        <div className='bg-white w-full max-h-20 px-4 flex items-center xs:w-10/12 sm:w-3/4 shadow-xl rounded-md max-w-4xl'>
          <div className='flex flex-wrap flex-grow py-2'>
            {filters.map((filter, index) => (
              <FilterChip text={filter} key={index} handleRemoveFilter={handleRemoveFilter} />
            ))}
          </div>
          <div className=''>
            <button
              className='font-semibold text-cyan-500 hover:border-b-2'
              onClick={() => handleClearFilter()}
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterBand