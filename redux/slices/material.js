import { createSlice } from "@reduxjs/toolkit";

const materialSlice = createSlice({
    name:'material',
    initialState: {
        materials: []
    },
    reducers: {
        addMaterial: (state, action) => {
            state.materials.push(action.payload);
        },
        removeMaterial: (state, action) => {
            state.materials = state.materials.filter(material => material.id !== action.payload)
        },
        updateMaterial: (state, action) => {
            state.materials = state.materials.map(material => material.id === action.payload.id ? action.payload : material)
        }
    }
})

export const { addMaterial, removeMaterial, updateMaterial } = materialSlice.actions;

export default materialSlice.reducer;