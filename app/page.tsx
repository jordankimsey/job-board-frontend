import Image from 'next/image'
import JobPost from './JobPost'
import { data } from '@/public/data'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-12 bg-cyan-200'>
      <div className='w-full flex flex-col justify-center items-center'>
        {data.length !== 0 ? (
          data.map((job) => <JobPost job={job} key={job.id}/>)
        ) : (
          <>No Jobs Available</>
        )}
      </div>
    </main>
  );
}
