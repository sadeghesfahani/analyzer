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
            if(action.payload.name === 'Design for ultimate limit state'){
                state.analyze[index].check = action.payload.check
                if(action.payload.check){
                    const index2 = state.analyze.findIndex((item) => item.name === 'Design for serviceability');
                    state.analyze[index2].check = false;
                }
            }else if(action.payload.name === 'Design for serviceability'){
                state.analyze[index].check = action.payload.check
                if(action.payload.check){
                    const index2 = state.analyze.findIndex((item) => item.name === 'Design for ultimate limit state');
                    state.analyze[index2].check = false;
                }
            }else{
                state.analyze[index].check = action.payload.check
            }
        }
    }
})

export const { setAnalyze, toggleAnalyze } = analyzeSlice.actions;
export default analyzeSlice.reducer;