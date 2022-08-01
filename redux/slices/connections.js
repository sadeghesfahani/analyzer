import { createSlice } from '@reduxjs/toolkit';

const connectionsSlice = createSlice({
    name: 'connections',
    initialState: {
        name:'connections',
        interModularConnection:[
            {name:'U1', check:false, value:""},
            {name:'U2', check:false, value:""},
            {name:'U3', check:false, value:""},
            {name:'R1', check:false, value:""},
            {name:'R2', check:false, value:""},
            {name:'R3', check:false, value:""},
        ],
        intraModularConnection:[
            {name:'U1', check:false, value:""},
            {name:'U2', check:false, value:""},
            {name:'U3', check:false, value:""},
            {name:'R1', check:false, value:""},
            {name:'R2', check:false, value:""},
            {name:'R3', check:false, value:""},
        ]
    },
    reducers: {
        setInterModularConnection: (state, action) => {
            state.interModularConnection = action.payload;
        },
        setIntraModularConnection: (state, action) => {
            state.intraModularConnection = action.payload;
        },
        editInterModularConnection: (state, action) => {
            const index = state.interModularConnection.findIndex((item) => item.name === action.payload.name);
            if(action.payload.check) state.interModularConnection[index].check = action.payload.check;
            if(action.payload.value) state.interModularConnection[index].value = action.payload.value;
        },
        editIntraModularConnection: (state, action) => {
            const index = state.intraModularConnection.findIndex((item) => item.name === action.payload.name);
            if(action.payload.check) state.intraModularConnection[index].check = action.payload.check;
            if(action.payload.value) state.intraModularConnection[index].value = action.payload.value;
        }
    }
})

export const { setInterModularConnection, setIntraModularConnection, editInterModularConnection, editIntraModularConnection } = connectionsSlice.actions;

export default connectionsSlice.reducer;