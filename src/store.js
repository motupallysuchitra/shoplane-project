import { configureStore } from "@reduxjs/toolkit";
import CardReducer from "./reducer/CardReducer";


const store=configureStore({
    reducer:{
        cart:CardReducer
    },
})

export default store;