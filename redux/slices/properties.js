import {
    createSlice
} from "@reduxjs/toolkit"

const propertiesSlice = createSlice({
    name: 'properties',
    initialState: {
        properties: [{
            edi_std: "L1.125X1.125X1/8",
            b: "1.125",
            tf: "0.125",
            tw: "0.125",
            i33: "0.032",
            id:"1"
        }],
    },
    reducers: {
        setProperties: (state, action) => {
            state.properties = action.payload
        }
    }
})

export const {
    setProperties
} = propertiesSlice.actions

export default propertiesSlice.reducer