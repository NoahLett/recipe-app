'use client'

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Search from './Search';
import Link from 'next/link';

const Hero = () => {

  const imageUrl = '/food-background.jpeg';

  const backgroundDiv = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
  }

  const { data: session } = useSession();

    return (
      <div className='w-full bg-cover bg-center md:min-h-[30rem] py-2 md:py-5 flex flex-col md:justify-around relative' style={backgroundDiv}>
      <div className='max-w-[55%] md:max-w-[55%] flex'>
        <div className='flex flex-col justify-center ml-[2rem] md:ml-[5rem] mt-5'>
          <p className='text-md md:text-2xl lg:text-3xl text-white font-medium my-1'>EXQUISITE RECIPES</p>
          <h1 className='text-3xl md:text-6xl lg:text-7xl font-semibold'>{session?.user?.name ? `Hey there, ${session?.user?.name}!` : 'Save Time. Eat Food.'}</h1>
          <p className='text-sm md:text-xl lg:text-2xl text-white font-medium my-2'>All Our Favs. One Place.</p>
        </div>
      </div>
      <div className='flex flex-col items-center justify-end mt-3 md:mt-10'>
        <Search />
        <Link className='hover:text-slate-300 transition-all duration-150 my-3 font-medium text-md md:text-lg underline text-white' href='/view-all'>View All</Link>
      </div>
    </div>
    )
  }

export default Hero