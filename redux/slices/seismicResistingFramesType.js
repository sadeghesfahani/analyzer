import { createSlice } from "@reduxjs/toolkit";

const seismicResistingFramesTypeSlice = createSlice({
    name: "seismicResistingFramesType",
    initialState: {
        seismicResistingFramesType: "",
    },
    reducers:{
        setSeismicResistingFramesType: (state, action) => {
            state.seismicResistingFramesType = action.payload;
        }
    }
})

export const { setSeismicResistingFramesType } = seismicResistingFramesTypeSlice.actions;

export default seismicResistingFramesTypeSlice.reducer;