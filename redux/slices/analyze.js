import { createSlice } from "@reduxjs/toolkit";

const analyzeSlice = createSlice({
    name: "analyze",
    initialState: {
        analyze: [
            {name: 'design for Ultimate limit state', check:false},
            {name: 'Design for serviceability', check:false},
            {name: 'Seismic performance factors', check:false},
        ]
    },
    reducers: {
        setAnalyze: (state, action) => {
            state.analyze = action.payload;
        },
        toggleAnalyze: (state, action) => {
            const index = state.analyze.findIndex((item) => item.name === action.payload.name);
            state.analyze[index].check = action.payload.check
        }
    }
})

export const { setAnalyze, toggleAnalyze } = analyzeSlice.actions;
export default analyzeSlice.reducer;