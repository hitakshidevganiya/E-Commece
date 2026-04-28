    import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
    import { BASE_URL } from "../../url/url";

    export const categoryApi = createApi({
        reducerPath: "categoryApi",
        baseQuery: fetchBaseQuery({
            baseUrl: BASE_URL
        }),

        endpoints: (builder) => ({
            getAllCategory: builder.query({
                query: () => "category/getAllCategory",
                providesTags: ['Category']
            }),
            addCategory: builder.mutation({
                query: (data) => ({
                    url: 'category/addCategory',
                    method: "POST",
                    body: data
                }),
                invalidatesTags: ['Category']
            }),
            updateCategory: builder.mutation({
                query: (data) => ({
                    url: `category/updateCategory/${data._id}`,
                    method: "PUT",
                    body: data
                }),
                invalidatesTags: ['Category']
            }),
            deleteCategory: builder.mutation({
                query: (_id) => ({
                    url: `category/deleteCategory/${_id}`,
                    method: 'DELETE'
                }),
                invalidatesTags: ['Category']
            })
        })
    })


    export const {
        useGetAllCategoryQuery,
        useAddCategoryMutation,
        useUpdateCategoryMutation,
        useDeleteCategoryMutation
    } = categoryApi;    