import { configureStore } from "@reduxjs/toolkit";

import materialReducer from "./slices/material";


export default configureStore({
    reducer:{
        material: materialReducer
    }   
})