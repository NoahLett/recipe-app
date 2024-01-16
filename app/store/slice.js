import { getShoppingList, saveShoppingList } from '@/constant/LocalStorageItems';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shoppingList: getShoppingList() || [], 
};

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  reducers: {
    addIngredient: (state, action) => {
      const { ingredient } = action.payload;
      const existingIngredientIndex = state.shoppingList.findIndex(
        (item) => item.name === ingredient.name && item.measurement === ingredient.measurement
      );
      if (existingIngredientIndex !== -1) {
        // Convert quantities to numbers before addition
        const existingQuantity = parseFloat(state.shoppingList[existingIngredientIndex].quantity);
        const newQuantity = parseFloat(ingredient.quantity);
        // Increment quantity if name and measurement match
        state.shoppingList[existingIngredientIndex].quantity = (existingQuantity + newQuantity).toString();
      } else {
        // Add the ingredient if it doesn't exist
        state.shoppingList.push(ingredient);
      }
      saveShoppingList(state.shoppingList);
    },
    removeIngredient: (state, action) => {
      console.log('action payload:', action.payload);
      const ingredientName = action.payload;
      console.log("ingredientName:", ingredientName);
      // Filter out the ingredient by name
      state.shoppingList = state.shoppingList.filter(
        (item) => item.name !== ingredientName
      );
      saveShoppingList(state.shoppingList);
    },
    clearShoppingList: (state) => {
      state.shoppingList = [];
      saveShoppingList(state.shoppingList);
    },
  },
});

export const { addIngredient, removeIngredient, clearShoppingList } =
  shoppingListSlice.actions;

export default shoppingListSlice.reducer;
