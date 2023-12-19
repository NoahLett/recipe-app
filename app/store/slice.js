import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shoppingList: [], 
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
        // Increment quantity if name and measurement match
        state.shoppingList[existingIngredientIndex].quantity += ingredient.quantity;
      } else {
        // Add the ingredient if it doesn't exist
        state.shoppingList.push(ingredient);
      }
    },
    removeIngredient: (state, action) => {
      const { ingredientName } = action.payload;
      // Filter out the ingredient by name
      state.shoppingList = state.shoppingList.filter(
        (item) => item.name !== ingredientName
      );
    },
    clearShoppingList: (state) => {
      state.shoppingList = []; // Clear the entire shopping list
    },
  },
});

export const { addIngredient, removeIngredient, clearShoppingList } =
  shoppingListSlice.actions;

export default shoppingListSlice.reducer;
