'use client'

import { useDispatch, useSelector } from 'react-redux';
import { addIngredient } from '../store/slice';
import { useState, useEffect } from 'react';
import { FaCartPlus, FaCheck } from "react-icons/fa";

const ShoppingListAddButton = ({ ingredients }) => {
  const dispatch = useDispatch();
  const shoppingList = useSelector((state) => state.shoppingList);

  const [isAdded, setIsAdded] = useState(false);

  const handleAddToShoppingList = () => {
    ingredients.forEach((ingredient) => {
      dispatch(addIngredient({ ingredient }));
    });
    setIsAdded(true);
  };

  useEffect(() => {
    console.log('Current Shopping List:', shoppingList);
  }, [shoppingList]);

  return (
    <button onClick={handleAddToShoppingList}>
      {isAdded ? (
        <FaCheck className="text-2xl text-green-500 transition-all duration-300" />
      ) : (
        <FaCartPlus className='text-2xl text-slate-800 hover:text-green-500 transition-all duration-300'/>
      )} 
      </button>
  );
};

export default ShoppingListAddButton;
