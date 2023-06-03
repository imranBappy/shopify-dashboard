/* eslint-disable no-undef */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'process.env.REACT_APP_API_URL',
        prepareHeaders: (headers, state, endPoints) => {
            return headers;
        }
    })
})

export default apiSlice