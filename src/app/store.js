import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/api/apiSlice";



const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        
    },
    // eslint-disable-next-line no-undef
    // devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})

export default store;