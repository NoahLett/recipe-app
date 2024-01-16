import { getCheckedItems, saveCheckedItems } from '@/constant/LocalStorageItems';
import { createSlice } from '@reduxjs/toolkit';

const checkboxSlice = createSlice({
  name: 'checkbox',
  initialState: {
    checkedItems: getCheckedItems() || [], 
  },
  reducers: {
    toggleItemCheckbox: (state, action) => {
      const itemName = action.payload;
      const isChecked = state.checkedItems.includes(itemName);

      if (isChecked) {
        state.checkedItems = state.checkedItems.filter((item) => item !== itemName);
      } else {
        state.checkedItems.push(itemName);
      }
      saveCheckedItems(state.checkedItems);
    },
  },
});

export const { toggleItemCheckbox } = checkboxSlice.actions;
export default checkboxSlice.reducer;
