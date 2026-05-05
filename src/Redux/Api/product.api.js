import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../url/url";

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),

    endpoints: (builder) => ({
        getAllProduct: builder.query({
            query: () => "product/getAllProduct",
            providesTags: ['Product']
        }),
        addProduct: builder.mutation({
            query: (data) => ({
                url: 'product/addProduct',
                method: "POST",
                body: data
            }),
            invalidatesTags: ['Product']
        }),
        updateProduct: builder.mutation({
            query: (data) => ({
                url: `product/updateProduct/${data.get('_id')}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ['Product']
        }),
        deleteProduct: builder.mutation({
            query: (_id) => ({
                url: `product/deleteProduct/${_id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Product']
        })
    })
})


export const {
    useGetAllProductQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation
} = productApi;    