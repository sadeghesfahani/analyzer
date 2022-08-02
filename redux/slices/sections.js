import {
    createSlice
} from "@reduxjs/toolkit";

const sectionsSlice = createSlice({
    name: "sections",
    initialState: {
        sections:{
            column: {},
            floorBeams: {},
            ceiligBeams: {},
        }
    },
    reducers: {
        setSections: (state, action) => {
            state.sections = action.payload;
        },
        addPropertyAndMaterial: (state, action) => {
            switch (action.payload.section) {
                case 'column':
                    state.sections.column = action.payload.propertyAndMaterial
                    break
                case 'floor beams':
                    state.sections.floorBeams = action.payload.propertyAndMaterial
                    break
                case 'ceilig beams':
                    state.sections.ceiligBeams = action.payload.propertyAndMaterial
                    break
            }
        }
    }
})

export const {
    addPropertyAndMaterial,
    setSections
} = sectionsSlice.actions;

export default sectionsSlice.reducer;