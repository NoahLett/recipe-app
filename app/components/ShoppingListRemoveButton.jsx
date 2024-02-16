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
        <button className='absolute right-2 top-[30%] text-slate-500 text-xl' onClick={handleRemoveItem}><FaRegTrashCan></FaRegTrashCan></button>
    );
};

export default ShoppingListRemoveButton;