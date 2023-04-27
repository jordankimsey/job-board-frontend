import React from 'react';
import Image from 'next/image';
import SkillsChip from './SkillsChip';
import Chip from './Chip';

const JobPost = () => {
  const isFeatured = true;
  return (
    <div
      className={`bg-white w-3/4 mb-5 p-5 ${
        isFeatured && 'border-l-4 border-cyan-500'
      }`}
    >
      <div className='flex justify-between'>
        <div className='flex items-center'>
          {/* image */}
          <div className='h-12 w-12 relative'>
            <Image src={'/images/photosnap.svg'} fill alt='company logo' />
          </div>
          <div className='flex flex-col pl-3'>
            {/* company w/tags new/featured */}
            <div className='flex items-center'>
              <h4 className='text-xs text-cyan-500 font-bold mr-2'>
                Photosnap
              </h4>
              {/*  chip */}
              <Chip isNew={true} />
              <Chip isNew={false} />
            </div>
            {/* title */}
            <div className='py-1'>
              <h3 className='text-black font-bold text-sm'>
                Senior Frontend Developer
              </h3>
            </div>
            <div className='flex items-center justify-between'>
              {/* posting date */}
              <div>
                <p className='text-xs text-cyan-700 font-medium'>1d ago</p>
              </div>
              <p className='text-xs text-cyan-700'>&#x2022;</p>
              {/* full-time / parttime */}
              <div className=''>
                <p className='text-xs text-cyan-700 font-medium'>Full Time</p>
              </div>
              <p className='text-xs text-cyan-700'>&#x2022;</p>
              {/* location */}
              <div>
                <p className='text-xs text-cyan-700 font-medium'>USA only</p>
              </div>
            </div>
          </div>
        </div>
        {/* skills tags */}
        <div className='flex flex-wrap items-center'>
          <SkillsChip text={'Frontend'} />
          <SkillsChip text={'Backend'} />
        </div>
      </div>
    </div>
  );
};

export default JobPost;
