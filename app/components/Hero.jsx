'use client'

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Search from './Search';

const Hero = () => {

  const { data: session } = useSession();

  if (session) {
    return (
      <div className='w-full bg-white py-7 md:py-15'>
      <div className='max-w-[100%] mx-auto grid grid-cols-2'>
        <div className='flex flex-col justify-center ml-[2rem] md:ml-[7rem]'>
          <p className='text-md md:text-2xl text-[#6CA7A9] font-medium my-1'>EXQUISITE RECIPES</p>
          <h1 className='text-2xl md:text-5xl font-semibold'>Hey there, {session?.user?.name}!</h1>
          <p className='text-md md:text-xl text-slate-500 font-medium my-2'>What Shall We Cook This Week?</p>
        </div>
        <Image src={'/chef.svg'} height={300} width={500} priority={true} alt='hero image' />
      </div>
      <div className='flex justify-center'>
        <Search />
      </div>
    </div>
    )
  } else {
    return (
      <div className='w-full bg-white py-7 md:py-20'>
      <div className='max-w-[100%] mx-auto grid grid-cols-2'>
        <div className='flex flex-col justify-center ml-[2rem] md:ml-[7rem]'>
          <p className='text-md md:text-2xl text-[#6CA7A9] font-medium my-1'>EXQUISITE RECIPES</p>
          <h1 className='text-2xl md:text-5xl font-semibold'>Your Custom Shopping List Is A Tap Away</h1>
          <p className='text-md md:text-xl text-slate-500 font-medium my-2'>Save Some Time. Get Browsin&apos;!</p>
        </div>
        <Image src={'/chef.svg'} height={300} width={500} priority={true} alt='hero image' />
      </div>
      <div className='flex justify-center'>
        <Search />
      </div>
    </div>
    )
  }
}

export default Hero