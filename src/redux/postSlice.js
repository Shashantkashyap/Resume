import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    post : ""
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers : {
        selectPost(state,action){
            state.post = action.payload
        }
    }
});

export const {selectPost} = postSlice.actions;
export default postSlice.reducer