'use client'

import React from 'react';
import { useSelector } from 'react-redux';
import ShoppingListItem from './ShoppingListItem';
import dynamic from 'next/dynamic';

const IngredientList = () => {
  const shoppingListObj = useSelector(state => state.shoppingList.shoppingList);

  return (
    <div>
      <ul>
        {shoppingListObj && shoppingListObj.length > 0 ? shoppingListObj.map((ingredient, index) => (
          <ShoppingListItem key={index} ingredient={ingredient} />
        )):
          <span>No Ingredients</span>
        }
      </ul>
    </div>
  );
};

export default IngredientList;