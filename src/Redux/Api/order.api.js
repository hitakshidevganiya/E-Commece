import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 import { BASE_URL } from "../../url/url";

export const orderApi = createApi({
    reducerPath: "orderApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL  
    }),

    endpoints:(builder) => ({
        getAllOrders: builder.query({
            query: () => "order/getAllOrders",
            providesTags: ["order"]
        }),
        getorder : builder.query({
            query: (id) => "order/getOrder",
            providesTags: ["order"]
        }),
        createOrder : builder.mutation({
            query: (data) => ({
                url: "order/createOrder",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["order"]
        }),
        updateOrder : builder.mutation({
            query: (data) => ({
                url: `order/updateOrder/${data._id}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ["order"]
        }),
        deleteOrder : builder.mutation({
            query: (_id) => ({
                url: `order/deleteOrder/${_id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["order"]
        })
    })
})


export const {
    useGetorderQuery,
    useGetAllOrdersQuery,
    useCreateOrderMutation,
    useUpdateOrderMutation,
    useDeleteOrderMutation
} = orderApi

