import Image from 'next/image'
import JobPost from './JobPost'
import { data } from '@/public/data'

export default function Home() {
  return (
    <main className='flex min-h-screen w-screen flex-col items-center justify-between xs:px-4 py-12 bg-cyan-200'>
      <div className='w-full flex flex-col justify-center sm:items-center px-5'>
        {data.length !== 0 ? (
          data.map((job) => <JobPost job={job} key={job.id}/>)
        ) : (
          <>No Jobs Available</>
        )}
      </div>
    </main>
  );
}
