import {
    createSlice
} from "@reduxjs/toolkit"

const propertiesSlice = createSlice({
    name: 'properties',
    initialState: {
        properties: [],
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