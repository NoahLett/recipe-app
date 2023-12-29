'use client'

import React from 'react';
import { useSelector } from 'react-redux';
import ShoppingListItem from './ShoppingListItem';

const IngredientList = () => {
  const shoppingListObj = useSelector(state => state.shoppingList);

  const shoppingList = shoppingListObj.shoppingList;

  return (
    <div>
      <ul>
        {shoppingList.map((ingredient, index) => (
          <ShoppingListItem key={index} ingredient={ingredient} />
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;