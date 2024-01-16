'use client'

import React from 'react';
import ShoppingListRemoveButton from './ShoppingListRemoveButton';
import { useDispatch, useSelector } from 'react-redux';
import { toggleItemCheckbox } from '../store/checkboxSlice';

const ShoppingListItem = ({ ingredient }) => {
  const dispatch = useDispatch();
  const isChecked = useSelector((state) => state.checkbox.checkedItems.includes(ingredient.name));

  const handleCheckboxChange = () => {
    dispatch(toggleItemCheckbox(ingredient.name));
  };

  return (
    <li className="flex justify-between items-center p-2 border-b border-gray-300">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="mr-2"
      />
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
