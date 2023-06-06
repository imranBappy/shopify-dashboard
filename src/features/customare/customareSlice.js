import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    customares: [],
}
const customareSlice = createSlice({
    name: "customares",
    initialState,
    reducers: {
        userGetCustomare(state, action) {
            state.customares = action.payload.customares;
        }
    },
});

export const { userGetCustomare } = customareSlice.actions;
export default customareSlice.reducer;