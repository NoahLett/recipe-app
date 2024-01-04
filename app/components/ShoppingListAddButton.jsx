'use client'

import { useDispatch, useSelector } from 'react-redux';
import { addIngredient } from '../store/slice';
import { useEffect } from 'react';

const ShoppingListAddButton = ({ ingredients }) => {
  const dispatch = useDispatch();
  const shoppingList = useSelector((state) => state.shoppingList);

  const handleAddToShoppingList = () => {
    ingredients.forEach((ingredient) => {
      dispatch(addIngredient({ ingredient }));
    });
  };

  useEffect(() => {
    console.log('Current Shopping List:', shoppingList);
  }, [shoppingList]);

  return (
    <button onClick={handleAddToShoppingList}>Add +</button>
  );
};

export default ShoppingListAddButton;
