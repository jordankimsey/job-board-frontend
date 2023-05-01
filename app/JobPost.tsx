import React from 'react';
import Image from 'next/image';
import SkillsChip from './SkillsChip';
import Chip from './Chip';

type JobPost = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

const JobPost = ({job}: {job: JobPost}) => {
  return (
    <div
      className={`bg-white w-3/4 mb-5 p-5 shadow-xl rounded-md max-w-4xl ${
        job.featured && 'border-l-4 border-cyan-500'
      }`}
    >
      <div className='flex justify-between'>
        <div className='flex items-center'>
          {/* image */}
          <div className='h-12 w-12 relative'>
            <Image src={job.logo} fill alt='company logo' />
          </div>
          <div className='flex flex-col pl-3'>
            {/* company w/tags new/featured */}
            <div className='flex items-center'>
              <h4 className='text-xs text-cyan-500 font-bold mr-2'>
                {job.company}
              </h4>
              {/*  chip */}
              {job.new && (
                <Chip isNew={job.new} isFeatured={false} text={'NEW!'} />
              )}
              {job.featured && (
                <Chip
                  isFeatured={job.featured}
                  isNew={false}
                  text={'FEATURED'}
                />
              )}
            </div>
            {/* title */}
            <div className='py-1'>
              <h3 className='text-black font-bold text-sm cursor-pointer hover:text-cyan-500'>{job.position}</h3>
            </div>
            <div className='flex items-center justify-between'>
              {/* posting date */}
              <div>
                <p className='text-xs text-cyan-700 font-medium'>
                  {job.postedAt}
                </p>
              </div>
              <p className='text-xs text-cyan-700'>&#x2022;</p>
              {/* full-time / parttime */}
              <div className=''>
                <p className='text-xs text-cyan-700 font-medium'>
                  {job.contract}
                </p>
              </div>
              <p className='text-xs text-cyan-700'>&#x2022;</p>
              {/* location */}
              <div>
                <p className='text-xs text-cyan-700 font-medium'>
                  {job.location}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* skills tags */}
        <div className='flex flex-wrap items-center'>
          {job.languages.map((skill, index) => (
            <SkillsChip text={skill} key={index} />
          ))}
          {job.tools.map((tool, index) => (
            <SkillsChip text={tool} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobPost;
