'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { IoIosArrowBack } from 'react-icons/io';

const BackButton = () => {

  const router = useRouter();

  return <button 
           className='inline-flex hover:text-slate-600 transition-all duration-300' 
           type='button' 
           onClick={() => router.back()}>
            <IoIosArrowBack className='text-2xl' />Back
          </button>
}

export default BackButton