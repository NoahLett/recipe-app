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
      // Check if the ingredient already exists in the shopping list
      const existingIngredient = state.shoppingList.find(
        (item) => item.name === ingredient.name
      );
      if (!existingIngredient) {
        state.shoppingList.push(ingredient); // Add the ingredient if it doesn't exist
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
