import { createSlice } from '@reduxjs/toolkit';

const connectionsSlice = createSlice({
    name: 'connections',
    initialState: {
       connections:{
        interModularConnection:[
            {name:'U1', value:""},
            {name:'U2', value:""},
            {name:'U3', value:""},
            {name:'R1', value:""},
            {name:'R2', value:""},
            {name:'R3', value:""},
        ],
        intraModularConnection:[
            {name:'U1', value:""},
            {name:'U2', value:""},
            {name:'U3', value:""},
            {name:'R1', value:""},
            {name:'R2', value:""},
            {name:'R3', value:""},
        ]
       }
    },
    reducers: {
        setConnections: (state, action) => {
            state.connections = action.payload;
        },
        editInterModularConnection: (state, action) => {
            const index = state.connections.interModularConnection.findIndex((item) => item.name === action.payload.name);
            state.connections.interModularConnection[index].value = action.payload.value;
        },
        editIntraModularConnection: (state, action) => {
            const index = state.connections.intraModularConnection.findIndex((item) => item.name === action.payload.name);
            state.connections.intraModularConnection[index].value = action.payload.value;
        }
    }
})

export const { setConnections, editInterModularConnection, editIntraModularConnection } = connectionsSlice.actions;

export default connectionsSlice.reducer;