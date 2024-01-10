'use client'

import { useDispatch, useSelector } from 'react-redux';
import { removeIngredient } from '../store/slice';

const ShoppingListRemoveButton = ({ ingredients }) => {
    const dispatch = useDispatch();
    const shoppingList = useSelector((state) => state.shoppingList);

    const handleRemoveItem = () => {
        const ingredientsToRemove = Array.isArray(ingredients) ? ingredients : [ingredients];
        ingredientsToRemove.forEach((ingredientName) => {
            console.log(ingredientName);
            dispatch(removeIngredient( ingredientName ));
        });
    };

    return (
        <button onClick={handleRemoveItem}>Remove</button>
    );
};

export default ShoppingListRemoveButton;