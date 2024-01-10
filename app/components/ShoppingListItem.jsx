'use client'

import React from 'react';
import ShoppingListRemoveButton from './ShoppingListRemoveButton';

const ShoppingListItem = ({ ingredient }) => {
  return (
    <li className="flex justify-between items-center p-2 border-b border-gray-300">
      <span className="flex-1">{ingredient.name}</span>
      <span className="text-gray-600 whitespace-nowrap">{ingredient.quantity}</span>
      {ingredient.measurement !== null && ingredient.measurement !== 'null' && (
        <span className="ml-3 text-right">{ingredient.measurement}</span>
      )}
      <ShoppingListRemoveButton ingredients={ingredient.name} />
    </li>
  );
};

export default ShoppingListItem;
