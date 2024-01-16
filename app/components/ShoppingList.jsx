'use client'

import React from 'react';
import { useSelector } from 'react-redux';
import ShoppingListItem from './ShoppingListItem';
import dynamic from 'next/dynamic';
import { FaBasketShopping } from "react-icons/fa6";


const IngredientList = () => {
  const shoppingListObj = useSelector(state => state.shoppingList.shoppingList);

  return (
    <div>
        {shoppingListObj && shoppingListObj.length > 0 ? shoppingListObj.map((ingredient, index) => (
          <ul className='bg-slate-100 rounded-md mt-5'>
            <ShoppingListItem key={index} ingredient={ingredient} />
          </ul>
        )):
        <div className='flex flex-col items-center mt-16'>
          <h3 className='text-2xl font-medium text-center'>Ghost town vibes <span className='text-4xl'>👻</span></h3>
          <FaBasketShopping className='text-7xl text-slate-100 mt-5'></FaBasketShopping>
        </div>
        }
    </div>
  );
};

export default IngredientList;