'use client'

import React, { useState } from 'react';

const RecipeForm = () => {

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
    console.log('Form Data:', formData);
    let recipeName = formData.recipeName;
    let ingredients = formData.ingredients;
    let steps = formData.steps;

    try {
        fetch('/api/add-post', { 
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ recipeName, ingredients, steps })
        })  
    } catch (error) {
        console.error(error)
    }
  };

  return (
    <div className='min-w-[300px] max-w-screen-sm mx-auto p-2'>
      <form className='rounded-md bg-white p-3' onSubmit={handleSubmit}>
        <label>
          Name:
          </label><br/>
          <input
            type="text"
            value={formData.recipeName}
            onChange={(e) => handleInputChange(e, null, 'name')}
            className='border-solid border-2 border-slate-400 rounded'
          />

        <div>
          <label>Ingredients:</label>
          {formData.ingredients.map((ingredient, index) => (
            <div key={index}>
              <input
                type="text"
                value={ingredient}
                onChange={(e) => handleInputChange(e, index, 'ingredients')}
                className='border-solid border-2 border-slate-400 rounded'
              />
              {index > 0 && (
                <button type="button" onClick={() => handleRemoveInput(index, 'ingredients')}>
                  Remove
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={() => handleAddInput('ingredients')}>
            Add Ingredient
          </button>
        </div>

        <div>
          <label>Steps:</label>
          {formData.steps.map((step, index) => (
            <div key={index}>
              <input
                type="text"
                value={step}
                onChange={(e) => handleInputChange(e, index, 'steps')}
                className='border-solid border-2 border-slate-400 rounded '
              />
              {index > 0 && (
                <button
                 type="button" 
                 onClick={() => handleRemoveInput(index, 'steps')}>
                  Remove
                </button>
              )}
            </div>
          ))}
          <button 
            type="button" 
            onClick={() => handleAddInput('steps')}
            className='pb-2'>
            Add Step
          </button>
        </div>

        <button 
          type="submit"
          className='border-solid border-[1px] border-black rounded hover:bg-green-400 hover:text-white transition-all duration-150 p-1'>
            Submit
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
