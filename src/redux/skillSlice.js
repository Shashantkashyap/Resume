
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  skills: [{ id: 1, skill: '', proficiency: '' }],
};

const skillSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    addSkill(state, action) {
      state.skills.push(action.payload);
    },
    deleteSkill(state, action) {
      state.skills = state.skills.filter(skill => skill.id !== action.payload);
    },
    updateSkill(state, action) {
      const { id, updatedSkill } = action.payload;
      const index = state.skills.findIndex(skill => skill.id === id);
      state.skills[index] = updatedSkill;
    },
  },
});

export const { addSkill, deleteSkill, updateSkill } = skillSlice.actions;

export default skillSlice.reducer;
