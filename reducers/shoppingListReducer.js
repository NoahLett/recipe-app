const findIngredientIndex = (items, newIngredient) => {
    return items.findIndex(
      (ingredient) =>
        ingredient.name === newIngredient.name &&
        ingredient.measurement === newIngredient.measurement
    );
  };
  
  const shoppingListReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_SHOPPING_LIST':
        const newIngredient = action.payload;
        const existingIndex = findIngredientIndex(state.items, newIngredient);
  
        if (existingIndex !== -1) {
          const updatedItems = [...state.items];
          updatedItems[existingIndex].quantity += newIngredient.quantity;
  
          return {
            ...state,
            items: updatedItems,
          };
        } else {
          return {
            ...state,
            items: [...state.items, newIngredient],
          };
        }
      default:
        return state;
    }
  };
  