import React from 'react'

const SkillsChip = ({text} : {text: string}) => {
  return (
    <div className='bg-cyan-100 rounded px-2 py-1 ml-3'>
      <p className='text-cyan-500 text-xs font-bold'>{text}</p>
    </div>
  );
}

export default SkillsChip