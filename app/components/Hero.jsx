'use client'

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Search from './Search';
import Link from 'next/link';

const Hero = () => {

  const { data: session } = useSession();

  if (session) {
    return (
      <div className='w-full bg-white py-2 md:py-5'>
      <div className='max-w-[100%] mx-auto grid grid-cols-2'>
        <div className='flex flex-col justify-center ml-[2rem] md:ml-[7rem]'>
          <p className='text-md md:text-2xl text-[#6CA7A9] font-medium my-1'>EXQUISITE RECIPES</p>
          <h1 className='text-2xl md:text-5xl font-semibold'>Hey there, {session?.user?.name}!</h1>
          <p className='text-md md:text-xl text-slate-500 font-medium my-2'>What Shall We Cook This Week?</p>
        </div>
        <Image src={'/chef.svg'} height={300} width={500} priority={true} alt='hero image' />
      </div>
      <div className='flex flex-col items-center'>
        <Search />
        <Link className='my-3 font-medium text-lg underline' href='/view-all'>View All</Link>
      </div>
    </div>
    )
  } else {
    return (
      <div className='w-full bg-white py-2 md:py-5'>
      <div className='max-w-[100%] mx-auto grid grid-cols-2'>
        <div className='flex flex-col justify-center ml-[2rem] md:ml-[7rem]'>
          <p className='text-md md:text-2xl text-[#6CA7A9] font-medium my-1'>EXQUISITE RECIPES</p>
          <h1 className='text-2xl md:text-5xl font-semibold'>Your Custom Shopping List Is A Tap Away</h1>
          <p className='text-md md:text-xl text-slate-500 font-medium my-2'>Save Some Time. Get Browsin&apos;!</p>
        </div>
        <Image src={'/chef.svg'} height={300} width={500} priority={true} alt='hero image' />
      </div>
      <div className='flex flex-col items-center'>
        <Search />
        <Link className='my-3 font-medium text-lg underline' href='/view-all'>View All</Link>
      </div>
    </div>
    )
  }
}

export default Hero