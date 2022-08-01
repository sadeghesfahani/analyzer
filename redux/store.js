import { configureStore } from "@reduxjs/toolkit";

import materialReducer from "./slices/material";
import sectionsReducer from "./slices/sections";
import connectionsSlice from "./slices/connections";
import seismicResistingFramesTypeReducer from "./slices/seismicResistingFramesType";
import structuresPropertyReducer from "./slices/structuresProperty";
import analyzeReducer from "./slices/analyze";
import propertiesSlice from "./slices/properties";


export default configureStore({
    reducer:{
        material: materialReducer,
        sections: sectionsReducer,
        connections: connectionsSlice,
        seismicResistingFramesType: seismicResistingFramesTypeReducer,
        structuresProperty: structuresPropertyReducer,
        analyze: analyzeReducer,
        properties:propertiesSlice
    }   
})