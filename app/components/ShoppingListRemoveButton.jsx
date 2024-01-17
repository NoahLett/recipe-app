'use client'

import { useDispatch, useSelector } from 'react-redux';
import { removeIngredient } from '../store/slice';
import { FaRegTrashCan } from "react-icons/fa6";
import { toggleItemCheckbox } from '../store/checkboxSlice';

const ShoppingListRemoveButton = ({ ingredients }) => {
    const dispatch = useDispatch();
    const checkedItems = useSelector((state) => state.checkbox.checkedItems);

    const handleRemoveItem = () => {
        const ingredientsToRemove = Array.isArray(ingredients) ? ingredients : [ingredients];
        ingredientsToRemove.forEach((ingredientName) => {
            const isIngredientChecked = checkedItems.includes(ingredientName);
            dispatch(removeIngredient( ingredientName ));
            if (isIngredientChecked) {
                dispatch(toggleItemCheckbox(ingredientName));
            }
        });
    };

    return (
        <button className='ml-4 text-slate-500' onClick={handleRemoveItem}><FaRegTrashCan></FaRegTrashCan></button>
    );
};

export default ShoppingListRemoveButton;