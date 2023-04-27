import React from 'react';

const Chip = ({ isNew }: { isNew: boolean }) => {
  return (
    <div
      className={`rounded-xl px-2 py-1 ml-3 ${
        isNew ? 'bg-cyan-500' : 'bg-cyan-900'
      }`}
    >
      <p className='text-white text-xs font-semibold'>
        {isNew ? 'NEW!' : 'FEATURED'}
      </p>
    </div>
  );
};

export default Chip;
