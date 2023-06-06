import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    customares: [],
    page: 0
}
const PAR_PAGE = 10;
const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        costomarePagination(state, action) {
            if (action.payload.page * PAR_PAGE + 10 < action.payload?.customares?.length) {
                const data = action.payload?.customares?.slice(action.payload.page * PAR_PAGE, action.payload.page * PAR_PAGE + 10);
                state.customares = data;
                state.page = action.payload.page;
            }
        }
    },
});

export const { costomarePagination } = paginationSlice.actions;
export default paginationSlice.reducer;