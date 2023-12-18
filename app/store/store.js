import { configureStore } from '@reduxjs/toolkit';
import shoppingListReducer from './slice';

export const store = configureStore({
  reducer: {
    shoppingList: shoppingListReducer,
  },
});