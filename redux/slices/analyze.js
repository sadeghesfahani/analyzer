import { createSlice } from "@reduxjs/toolkit";

const analyzeSlice = createSlice({
    name: "analyze",
    initialState: {
        analyze: [
            {name: 'Design for ultimate limit state', check:false},
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
                if(action.payload.check){
                    state.analyze.map((a,i)=>i === index ? a.check = true : a.check = false)
                }
        }
    }
})

export const { setAnalyze, toggleAnalyze } = analyzeSlice.actions;
export default analyzeSlice.reducer;