import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  profileImage: null,
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
  address: '',
  city: '',
  state: '',
  postalCode: '',
  objective: '',
};

// Create a slice
const personalInfoSlice = createSlice({
  name: 'personalInfo',
  initialState,
  reducers: {
    setProfileImage(state, action) {
      state.profileImage = action.payload;
    },
    setFirstName(state, action) {
      state.firstName = action.payload;
    },
    setLastName(state, action) {
      state.lastName = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setMobile(state, action) {
      state.mobile = action.payload;
    },
    setAddress(state, action) {
      state.address = action.payload;
    },
    setCity(state, action) {
      state.city = action.payload;
    },
    setState(state, action) {
      state.state = action.payload;
    },
    setPostalCode(state, action) {
      state.postalCode = action.payload;
    },
    setObjective(state, action) {
      state.objective = action.payload;
    },
  },
});


export const {
  setProfileImage,
  setFirstName,
  setLastName,
  setEmail,
  setMobile,
  setAddress,
  setCity,
  setState,
  setPostalCode,
  setObjective,
} = personalInfoSlice.actions;

export default personalInfoSlice.reducer;
