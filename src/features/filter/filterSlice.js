import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: []
}
const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        userCustomareFilter(state, action) {
            console.log(action.payload);
            if (action.payload.status === 'All') {
                state.filter = action.payload?.customares
            } else {
                state.filter = action.payload?.customares?.filter(cus => cus.status === action.payload.status);
            }
        }
    },
});

export const { userCustomareFilter } = filterSlice.actions;
export default filterSlice.reducer;