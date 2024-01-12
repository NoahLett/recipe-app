'use client'

import React, { useState } from 'react';

const RecipeForm = () => {
  const [formData, setFormData] = useState({
    recipeName: '',
    ingredients: [''],
    steps: [''],
  });

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
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={formData.recipeName}
          onChange={(e) => handleInputChange(e, null, 'name')}
        />
      </label>

      <div>
        <label>Ingredients:</label>
        {formData.ingredients.map((ingredient, index) => (
          <div key={index}>
            <input
              type="text"
              value={ingredient}
              onChange={(e) => handleInputChange(e, index, 'ingredients')}
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
            />
            {index > 0 && (
              <button type="button" onClick={() => handleRemoveInput(index, 'steps')}>
                Remove
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={() => handleAddInput('steps')}>
          Add Step
        </button>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default RecipeForm;
