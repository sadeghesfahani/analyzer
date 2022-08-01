import {
    createSlice
} from "@reduxjs/toolkit";

const sectionsSlice = createSlice({
    name: "sections",
    initialState: {
        name: 'sections',
        column: {},
        floorBeams: {},
        ceiligBeams: {},
    },
    reducers: {
        addPropertyAndMaterial: (state, action) => {
            switch (action.payload.section) {
                case 'column':
                    state.column = action.payload.propertyAndMaterial
                    break
                case 'floor beams':
                    state.floorBeams = action.payload.propertyAndMaterial
                    break
                case 'ceilig beams':
                    state.ceiligBeams = action.payload.propertyAndMaterial
                    break
            }
        }
    }
})

export const {
    addPropertyAndMaterial
} = sectionsSlice.actions;

export default sectionsSlice.reducer;