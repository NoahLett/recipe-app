'use client'

import React, { useState } from 'react';
import { FaRegTrashCan } from "react-icons/fa6";
import { IoAddCircleOutline } from "react-icons/io5";
import { useSession } from 'next-auth/react';

const RecipeForm = () => {

  const { data: session } = useSession();

  const initialFormData = {
    recipeName: '',
    ingredients: [''],
    steps: [''],
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e, index, type) => {
    const { value } = e.target;
    const updatedData = { ...formData };

    if (type === 'ingredients') {
      updatedData.ingredients[index] = value;
    } else if (type === 'steps') {
      updatedData.steps[index] = value;
    } else {
      updatedData.recipeName = value;
    }

    setFormData(updatedData);
  };

  const handleAddInput = (type) => {
    const updatedData = { ...formData };

    if (type === 'ingredients') {
      updatedData.ingredients.push('');
    } else if (type === 'steps') {
      updatedData.steps.push('');
    }

    setFormData(updatedData);
  };

  const handleRemoveInput = (index, type) => {
    const updatedData = { ...formData };

    if (type === 'ingredients') {
      updatedData.ingredients.splice(index, 1);
    } else if (type === 'steps') {
      updatedData.steps.splice(index, 1);
    }

    setFormData(updatedData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(session);
    console.log(session?.user);
    let authorName = session?.user?.name;
    let id = session?.user?.id;
    let recipeName = formData.recipeName;
    let ingredients = formData.ingredients;
    let steps = formData.steps;

    try {
        fetch('/api/add-post', { 
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ authorName, id, recipeName, ingredients, steps })
        })  
    } catch (error) {
        console.error(error)
    }
  };

  return (
    <div className='min-w-[300px] max-w-screen-sm mx-auto p-2 pt-4'>
      <form className='shadow-md rounded-md bg-white p-4' onSubmit={handleSubmit}>
        <div className='mb-5'>
            <div className='mt-[2.5rem] mb-2'>
              <input
                type="text"
                value={formData.recipeName}
                onChange={(e) => handleInputChange(e, null, 'name')}
                className='border-b-2 border-slate-400 w-full text-3xl font-bold px-1 outline-none	'
                placeholder='Recipe Name'
              />
            </div>
          </div>
        <div className='flex flex-col'>
          <label className='text-lg font-medium mt-5'>Ingredients</label>
          {formData.ingredients.map((ingredient, index) => (
            <div className='my-2 flex' key={index}>
              <input
                type="text"
                value={ingredient}
                onChange={(e) => handleInputChange(e, index, 'ingredients')}
                className='border-b-2 border-slate-400 w-full text-lg px-1 outline-none	'
                placeholder='E.g. 2 Lbs Chicken Breast'
              />
              {index > 0 && (
                <button 
                  type="button" 
                  onClick={() => handleRemoveInput(index, 'ingredients')}
                  className='ml-2 hover:text-red-400 transition-all duration-150'
                  >
                  <FaRegTrashCan className='text-xl' />
                </button>
              )}
            </div>
          ))}
          <button 
            type="button" 
            onClick={() => handleAddInput('ingredients')}
            className='self-center'>
            <IoAddCircleOutline className='text-2xl hover:text-green-400 transition-all duration-150' />
          </button>
        </div>

        <div className='flex flex-col'>
          <label className='text-lg font-medium'>Steps</label>
          {formData.steps.map((step, index) => (
            <div className='flex my-2 content-start' key={index}>
              <span className='text-lg me-2'>{index + 1}.</span>
              <input
                type="text"
                value={step}
                onChange={(e) => handleInputChange(e, index, 'steps')}
                className='border-b-2 border-slate-400 w-full text-lg px-1 outline-none'
                placeholder='E.g. Pre-heat your oven to 400&deg; F'
              />
              {index > 0 && (
                <button
                 type="button" 
                 onClick={() => handleRemoveInput(index, 'steps')}
                 className='ml-2 hover:text-red-400 transition-all duration-150'>
                  <FaRegTrashCan className='text-xl' />
                </button>
              )}
            </div>
          ))}
          <button 
            type="button" 
            onClick={() => handleAddInput('steps')}
            className='pb-2 self-center'>
            <IoAddCircleOutline className='text-2xl hover:text-green-400 transition-all duration-150' />
          </button>
        </div>
        
        <div className='flex justify-end'>
          <button 
            type="submit"
            className='bg-sky-300 p-2 rounded shadow-md text-xl lg:text-xl hover:bg-sky-400 ml-1 transition-all duration-150'>
              Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecipeForm;
