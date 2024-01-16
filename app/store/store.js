import { configureStore } from '@reduxjs/toolkit';
import shoppingListReducer from './slice';
import checkboxReducer from './checkboxSlice';

export const store = configureStore({
  reducer: {
    shoppingList: shoppingListReducer,
    checkbox: checkboxReducer,
  },
});