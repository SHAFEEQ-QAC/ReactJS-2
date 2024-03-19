/*

to create a store configureStore() is used


*/
import AmountSlice from "./BankSlices.js"
import {configureStore} from "@reduxjs/toolkit"

const Store1 = configureStore({
    reducer:{
        bank:AmountSlice
    }
});

export default Store1

