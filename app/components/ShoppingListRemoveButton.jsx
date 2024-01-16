'use client'

import { useDispatch } from 'react-redux';
import { removeIngredient } from '../store/slice';
import { FaRegTrashCan } from "react-icons/fa6";

const ShoppingListRemoveButton = ({ ingredients }) => {
    const dispatch = useDispatch();

    const handleRemoveItem = () => {
        const ingredientsToRemove = Array.isArray(ingredients) ? ingredients : [ingredients];
        ingredientsToRemove.forEach((ingredientName) => {
            console.log(ingredientName);
            dispatch(removeIngredient( ingredientName ));
        });
    };

    return (
        <button className='ml-4 text-slate-500' onClick={handleRemoveItem}><FaRegTrashCan></FaRegTrashCan></button>
    );
};

export default ShoppingListRemoveButton;