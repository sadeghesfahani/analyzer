import { createSlice } from "@reduxjs/toolkit";

const structuresPropertySlice = createSlice({
    name: "structuresProperty",
    initialState: {
        structuresProperty:{
            heightOfStorey: "",
            lengthOfSpan: ""    
        }
    },
    reducers:{
        setStructuresProperty: (state, action) => {
            state.structuresProperty = action.payload;
        },
        setHeightOfStorey: (state, action) => {
            state.structuresProperty.heightOfStorey = action.payload;
        },
        setLengthOfSpan: (state, action) => {
            state.structuresProperty.lengthOfSpan = action.payload;
        }
    }
})

export const { setStructuresProperty, setHeightOfStorey, setLengthOfSpan } = structuresPropertySlice.actions;

export default structuresPropertySlice.reducer;