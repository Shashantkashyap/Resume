import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedTemplate: null,
};

const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    selectTemplate(state, action) {
      state.selectedTemplate = action.payload;
    },
  },
});

export const { selectTemplate } = templateSlice.actions;

export default templateSlice.reducer;
