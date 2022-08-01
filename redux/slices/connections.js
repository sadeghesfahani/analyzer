import { createSlice } from '@reduxjs/toolkit';

const connectionsSlice = createSlice({
    name: 'connections',
    initialState: {
       connections:{
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
       }
    },
    reducers: {
        setConnections: (state, action) => {
            state.connections = action.payload;
        },
        editInterModularConnection: (state, action) => {
            const index = state.connections.interModularConnection.findIndex((item) => item.name === action.payload.name);
            if(action.payload.check !== undefined) state.connections.interModularConnection[index].check = action.payload.check;
            if(action.payload.value !== undefined) state.connections.interModularConnection[index].value = action.payload.value;
        },
        editIntraModularConnection: (state, action) => {
            const index = state.connections.intraModularConnection.findIndex((item) => item.name === action.payload.name);
            if(action.payload.check !== undefined) state.connections.intraModularConnection[index].check = action.payload.check;
            if(action.payload.value !== undefined) state.connections.intraModularConnection[index].value = action.payload.value;
        }
    }
})

export const { setConnections, editInterModularConnection, editIntraModularConnection } = connectionsSlice.actions;

export default connectionsSlice.reducer;