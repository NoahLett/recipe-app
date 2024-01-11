'use client'

import React, { useState } from 'react';

const RecipeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
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
      updatedData.name = value;
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={formData.name}
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
