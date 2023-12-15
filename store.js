import { configureStore } from '@reduxjs/toolkit';
import shoppingListReducer from './reducers/shoppingListReducer'; // Create this reducer

const store = configureStore({
  reducer: {
    shoppingList: shoppingListReducer,
    // Add other reducers if needed
  },
});

export default store;
