import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../url/url";
import { axiosBaseQuery } from "../../utils/axiosBasequery";
import { setAlert } from "../Slice/Alert.slice";


export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: axiosBaseQuery(),
    endpoints: (builder) => ({
        getAllUser: builder.query({
            query: () => 'user/getAllUser',
            method: "GET"
        }),
        register: builder.mutation({
            query: (data) => ({
                url: "user/registerUser",
                method: "POST",
                data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;

                    dispatch(setAlert({
                        text: data.message || "Register Successful 🎉",
                        variant: "success"
                    }));

                } catch (err) {
                    dispatch(setAlert({
                        text: err?.error?.data?.message || "Register Failed ❌",
                        variant: "error"
                    }));
                }
            }
        }),
        verify: builder.mutation({
            query: (data) => ({
                url: "user/verifyUser",
                method: "POST",
                data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;

                    dispatch(setAlert({
                        text: data.message || "OTP Verified ✅",
                        variant: "success"
                    }));

                } catch (err) {
                    dispatch(setAlert({
                        text: err?.error?.data?.message || "Invalid OTP ❌",
                        variant: "error"
                    }));
                }
            }
        }),
        login: builder.mutation({
            query: (data) => ({
                url: "user/loginUser",
                method: "POST",
                data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;

                    dispatch(setAlert({
                        text: data.message || "Login Successful ✅",
                        variant: "success"
                    }));

                } catch (err) {
                    dispatch(setAlert({
                        text: err?.error?.data?.message || "Login Failed ❌",
                        variant: "error"
                    }));
                }
            }
        }),
        logout: builder.mutation({
            query: () => ({
                url: "user/logOutUser",
                method: "POST"
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;

                    dispatch(setAlert({
                        text: data.message || "Login Successful ✅",
                        variant: "success"
                    }));

                } catch (err) {
                    dispatch(setAlert({
                        text: err?.error?.data?.message || "Login Failed ❌",
                        variant: "error"
                    }));
                }
            }
        }),
        forgotPass: builder.mutation({
            query: (data) => ({
                url: "user/forgotPass",
                method: "POST",
                data
            })
        }),
        resetPass: builder.mutation({
            query: (data) => ({
                url: "user/resetPass",
                method: "POST",
                data
            })
        })

    })
})

export const { useGetAllUserQuery, useRegisterMutation, useVerifyMutation, useLoginMutation, useLogoutMutation, useForgotPassMutation, useResetPassMutation } = authApi;