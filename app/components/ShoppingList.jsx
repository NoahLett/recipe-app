'use client'

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearShoppingList } from '../store/slice';
import ShoppingListItem from './ShoppingListItem';
import Image from 'next/image';



const IngredientList = () => {
  const shoppingListObj = useSelector(state => state.shoppingList.shoppingList);
  const dispatch = useDispatch();

  const handleClearList = () => {
    dispatch(clearShoppingList());
  }

  return (
    <div>
      {shoppingListObj && shoppingListObj.length > 0 ? (
        <div>
      <ul className='bg-slate-100 rounded-md mt-5 mb-2'>
        {shoppingListObj && shoppingListObj.length > 0 && shoppingListObj.map((ingredient) => (
            <ShoppingListItem key={ingredient.name} ingredient={ingredient} />
        ))}
      </ul>
      <div className='flex justify-end'>
        <button onClick={handleClearList} className='bg-white px-4 py-2 rounded-md shadow-md my-2'>Clear List</button>
      </div>
      </div>
      ) : (
        <div className='flex flex-col items-center justify-center mt-10'>
          <h2 className='text-2xl font-medium'>Your cart is empty!</h2>
          <Image width={500} height={500} src='/shopping.svg' alt='People Shopping' priority={true} />
        </div>
      )
    }
    </div>
  );
};

export default IngredientList;