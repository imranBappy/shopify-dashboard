import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/api/apiSlice";
import customareSlice from "../features/customare/customareSlice";



const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        customares: customareSlice
    },
    // eslint-disable-next-line no-undef
    // devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})

export default store;