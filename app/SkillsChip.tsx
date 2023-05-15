import React, { Dispatch, SetStateAction } from 'react'

const SkillsChip = ({
  text,
  setFilters,
}: {
  text: string;
  setFilters: Dispatch<SetStateAction<string[]>>;
}) => {
  return (
    <div onClick={() => setFilters((prev) => [ ...prev, text])} className='bg-cyan-100 rounded px-2 py-1 ml-3 cursor-pointer hover:bg-cyan-500 text-cyan-500 hover:text-white'>
      <p className='text-xs font-bold '>{text}</p>
    </div>
  );
};

export default SkillsChip