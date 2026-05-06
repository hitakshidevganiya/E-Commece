import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../url/url";

export const cartApi = createApi({
    reducerPath: "cartApi",
    baseQuery: fetchBaseQuery({ baseUrl:BASE_URL }),

    endpoints: (builder) => ({
        addToCart: builder.mutation({
            query: (data) => ({
                url: "cart/addCart",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Cart"],
        }),

        getCart: builder.query({
            query: () => "cart/getCart",
            providesTags: ["Cart"],
        }),

        getAllCart: builder.query({
            query: () => "cart/getAllCart",
            providesTags: ["Cart"],
        }),


        updateCart: builder.mutation({
            query: ({ id, qty }) => ({
                url: `cart/updateCart/${id}`,
                method: "PUT",
                body: { qty },
            }),
            invalidatesTags: ["Cart"],
        }),

        deleteCart: builder.mutation({
            query: (id) => ({
                url: `cart/deleteCart/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Cart"],
        }),
    }),
});

export const {
    useAddToCartMutation,
    useGetCartQuery,
    useGetAllCartQuery,
    useUpdateCartMutation,
    useDeleteCartMutation,
} = cartApi;