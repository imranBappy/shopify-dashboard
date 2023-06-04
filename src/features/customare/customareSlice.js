import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    customares: [],
    page: 1,
}
const customareSlice = createSlice({
    name: "customares",
    initialState,
    reducers: {
        userGetCustomare(state, action) {
            state.customares = action.payload.customares;
        },
        useCustomareFilter(state, action) {
            const customare = state.customares?.filter((cus) => cus.status !== action.payload)
            state.customares = customare
        }
    },
});

export const { userGetCustomare, useCustomareFilter } = customareSlice.actions;
export default customareSlice.reducer;