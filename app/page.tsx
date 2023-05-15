'use client';

import Image from 'next/image';
import JobPost from './JobPost';
import { data } from '@/public/data';
import { use, useEffect, useState } from 'react';
import FilterBand from './FilterBand';
import _ from "lodash";

export default function Home() {
  const [jobPosts, setJobPosts] = useState(data);
  const [filters, setFilters] = useState<string[]>([]);

  const filterJobs = (filters: string[]) => {
    let filterLanguages = _.filter(jobPosts, {'languages': filters})
    let filterTools = _.filter(jobPosts, {'tools': filters})
    return _.union(filterLanguages, filterTools);
  }


  useEffect(() => {
  const filtered = filterJobs(filters);
  setJobPosts(filtered); 
  console.log("Running")
}, [filters])
 
  function handleClearFilter (): void
  {
    setFilters([]);
    setJobPosts(data);
  }

  function handleRemoveFilter (filterName: string): void {
    setFilters((current) => current.filter(f => f !== filterName));
    setJobPosts(data);

  }

  return (
    <main className='flex min-h-screen w-screen flex-col items-center justify-between xs:px-4 py-12 bg-cyan-200 relative'>
      <div className='w-full flex flex-col justify-center sm:items-center px-5'>
        <div className='relative -top-20 w-full flex justify-center'>
        <FilterBand filters={filters} handleRemoveFilter={handleRemoveFilter} handleClearFilter={handleClearFilter}/>
        </div>
        {jobPosts.length > 0 ? (
          jobPosts.map((job) => <JobPost job={job} key={job.id} setFilters={setFilters} />)
        ) : (
          <>No Jobs Available</>
        )}
      </div>
    </main>
  );
}
