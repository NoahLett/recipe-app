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
    <li className={`relative p-2 border-b border-gray-300 pr-10 ${isChecked ? 'bg-slate-300 transition-all duration-150' : ''}`}>
      <div className='flex flex-row'>
        <div className='flex flex-row items-center basis-4/5'>
          <CustomCheckbox checked={isChecked} onChange={handleCheckboxChange} />
          <div className='text-[1.1rem] md:text-xl ml-2'>{ingredient.name}</div>
        </div>
        <div className='content-left my-auto ml-1 basis-1/5'>
          <span className="text-[1.1rem] md:text-xl whitespace-nowrap">{ingredient.quantity}</span>
          {ingredient.measurement !== null && ingredient.measurement !== 'null' && (
            <span className="text-[1.1rem] md:text-xl ml-3 items-start">{ingredient.measurement}</span>
          )}
          {isChecked && <ShoppingListRemoveButton ingredients={ingredient.name} />}
        </div>
      </div>
    </li>
  );
};

export default ShoppingListItem;
