'use client'

import React from 'react';
import { useSelector } from 'react-redux';
import ShoppingListItem from './ShoppingListItem';
import Image from 'next/image';



const IngredientList = () => {
  const shoppingListObj = useSelector(state => state.shoppingList.shoppingList);

  return (
    <div>
      {shoppingListObj && shoppingListObj.length > 0 ? (
      <ul className='bg-slate-100 rounded-md mt-5 mb-2'>
        {shoppingListObj && shoppingListObj.length > 0 && shoppingListObj.map((ingredient) => (
            <ShoppingListItem key={ingredient.name} ingredient={ingredient} />
        ))}
      </ul>
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