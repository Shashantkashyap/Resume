import { createSlice } from '@reduxjs/toolkit';


const initialState = [];

const workExperienceSlice = createSlice({
  name: 'workExperience',
  initialState,
  reducers: {
    addExperience(state, action) {
      state.push(action.payload);
    },
    deleteExperience(state, action) {
      return state.filter((experience, index) => index !== action.payload);
    },
    updateExperience(state, action) {
      const { index, updatedExperience } = action.payload;
      state[index] = updatedExperience;
    },
  },
});

export const { addExperience, deleteExperience, updateExperience } = workExperienceSlice.actions;

export default workExperienceSlice.reducer;
