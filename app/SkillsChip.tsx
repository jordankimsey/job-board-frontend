import React from 'react'

const SkillsChip = ({text} : {text: string}) => {
  return (
    <div className='bg-cyan-100 rounded px-2 py-1 ml-3 cursor-pointer hover:bg-cyan-500 text-cyan-500 hover:text-white'>
      <p className='text-xs font-bold '>{text}</p>
    </div>
  );
}

export default SkillsChip