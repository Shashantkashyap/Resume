// educationSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  educationDetails: [
    {
      id: 1,
      type: "",
      university: "",
      degree: "",
      startYear: "",
      endYear: "",
    }
  ]
};

const educationSlice = createSlice({
  name: 'education',
  initialState,
  reducers: {
    addEducation(state, action) {
      state.educationDetails.push(action.payload);
    },
    deleteEducation(state, action) {
      state.educationDetails = state.educationDetails.filter(detail => detail.id !== action.payload);
    },
    updateEducation(state, action) {
      const { id, updatedEducation } = action.payload;
      const index = state.educationDetails.findIndex(detail => detail.id === id);
      state.educationDetails[index] = updatedEducation;
    },
  },
});

export const { addEducation, deleteEducation, updateEducation } = educationSlice.actions;

export default educationSlice.reducer;
