import React from 'react';
import Accordion from '../components/Accordion';
import accordionItems from '@/lib/accordionItems';
import BackButton from '../components/BackButton';

const FaqPage = () => {
  return (
    <div className='min-h-screen pt-20 w-full px-2'>
      <BackButton />
      <h1 className='text-3xl font-semibold text-center mb-5'>Got Questions?</h1>
      <div className='bg-slate-100  max-w-3xl min-w-[75%] mx-2 rounded-md shadow-md'>
        <Accordion items={accordionItems}/>
      </div>
    </div>
  )
}

export default FaqPage