import { configureStore } from '@reduxjs/toolkit';
import personalInfoReducer from "./personalInfo.slice";
import workExperienceReducer from './workExperienceSlice';
import educationReducer from './educationSlice';
import skillReducer from './skillSlice';
import templateReducer from "./templateSlice"
import postReducer from "./postSlice"

const store = configureStore({
  reducer: {
    personalInfo: personalInfoReducer,
    workExperience: workExperienceReducer,
    education : educationReducer,
    skills:skillReducer,
    template: templateReducer,
    post: postReducer
    
  },
});

export default store;
