'use client'

import { useDispatch, useSelector } from 'react-redux';
import { addIngredient } from '../store/slice';

const ShoppingListAddButton = ({ ingredients }) => {
  const dispatch = useDispatch();
  const shoppingList = useSelector((state) => state.shoppingList);

  const handleAddToShoppingList = () => {
    ingredients.forEach((ingredient) => {
      dispatch(addIngredient({ ingredient }));
    });
    console.log('Current Shopping List:', shoppingList);
  };

  return (
    <button onClick={handleAddToShoppingList}>Add All to Shopping List</button>
  );
};

export default ShoppingListAddButton;
