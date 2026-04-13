import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../url/url";


export const authApi = createApi({
    reducerPath: "authApi", 
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    endpoints: (builder) => ({

        register: builder.mutation({
            query: (data) => ({
                url: "user/registerUser",
                method: "POST",
                body: data
            })
        }),
        verify: builder.mutation({
            query: (data) => ({
                url: "user/verifyuser",
                method: "POST",
                body: data
            })
        })
        
    })
})

export const { useRegisterMutation } = authApi;