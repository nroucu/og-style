import { configureStore } from "@reduxjs/toolkit";
// import productReducer from "./ProductSlice.js"

const myStore= configureStore({
    reducer:{
        // products: productReducer
    }
})

export default myStore