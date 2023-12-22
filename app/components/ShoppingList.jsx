'use client'

import React from 'react';
import { useSelector } from 'react-redux';

const IngredientList = () => {
  const shoppingListObj = useSelector(state => state.shoppingList);

  const shoppingList = shoppingListObj.shoppingList;

  return (
    <div>
      <ul>
        {shoppingList.map((ingredient, index) => (
          <li key={index}>
            <p>Name: {ingredient.name}</p>
            <p>Measurement: {ingredient.measurement}</p>
            <p>Quantity: {ingredient.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;