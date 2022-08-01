import { createSlice } from "@reduxjs/toolkit";

const structuresPropertySlice = createSlice({
    name: "structuresProperty",
    initialState: {
        heightOfStorey: "",
        lengthOfSpan: ""
    },
    reducers:{
        setHeightOfStorey: (state, action) => {
            state.heightOfStorey = action.payload;
        },
        setLengthOfSpan: (state, action) => {
            state.lengthOfSpan = action.payload;
        }
    }
})

export const { setHeightOfStorey, setLengthOfSpan } = structuresPropertySlice.actions;

export default structuresPropertySlice.reducer;