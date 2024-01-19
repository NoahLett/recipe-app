'use client'

import React from 'react';
import { useSelector } from 'react-redux';
import ShoppingListItem from './ShoppingListItem';
import dynamic from 'next/dynamic';
import { ImSad } from "react-icons/im";



const IngredientList = () => {
  const shoppingListObj = useSelector(state => state.shoppingList.shoppingList);

  return (
    <div>
      {shoppingListObj && shoppingListObj.length > 0 ? (
      <ul className='bg-slate-100 rounded-md mt-5'>
        {shoppingListObj && shoppingListObj.length > 0 && shoppingListObj.map((ingredient, index) => (
            <ShoppingListItem key={index} ingredient={ingredient} />
        ))}
      </ul>
      ) : (
        <div className='flex flex-col items-center justify-center mt-20'>
          <h2 className='text-2xl font-medium'>Your cart is empty!</h2>
          <ImSad className='text-8xl mt-5' />
        </div>
      )
    }
    </div>
  );
};

export default IngredientList;