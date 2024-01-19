'use client'

import React from 'react';
import ShoppingListRemoveButton from './ShoppingListRemoveButton';
import { useDispatch, useSelector } from 'react-redux';
import { toggleItemCheckbox } from '../store/checkboxSlice';
import CustomCheckbox from './CustomCheckbox';

const ShoppingListItem = ({ ingredient }) => {
  const dispatch = useDispatch();
  const isChecked = useSelector((state) => state.checkbox.checkedItems.includes(ingredient.name));

  const handleCheckboxChange = () => {
    dispatch(toggleItemCheckbox(ingredient.name));
  };

  return (
    <li className="flex flex-nowrap p-2 border-b border-gray-300">
      <div className='flex-1'>
        <CustomCheckbox checked={isChecked} onChange={handleCheckboxChange} />
        <div>{ingredient.name}</div>
      </div>
      <div className='flex-1'>
        <span className="text-gray-600 whitespace-nowrap items-start">{ingredient.quantity}</span>
        {ingredient.measurement !== null && ingredient.measurement !== 'null' && (
          <span className="ml-3 items-start">{ingredient.measurement}</span>
        )}
      </div>
      <ShoppingListRemoveButton ingredients={ingredient.name} />
    </li>
  );
};

export default ShoppingListItem;
