import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosInstance } from "../../utils/axiosInstance"
import { setAlert } from "./Alert.slice";

const initialState = {
    isLoading: false,
    error: null,
    user: null
}

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (data) => {
        console.log(data);

        try {

            const response = await axiosInstance.post("user/registerUser", data);
            console.log(response);


        } catch (error) {
            console.log(error)
        }
    }
)

export const verifyUser = createAsyncThunk(
    'auth/verifyUser',
    async (data, { dispatch }) => {
        console.log(data);

        try {

            const response = await axiosInstance.post("user/verifyUser", data);
            if (response.data.success) {
                dispatch(setAlert({ text: response.data.message, variant: 'success' }));
                return response.data.data

            }
            console.log(response);

        } catch (error) {
            console.log(error);
        }

    }
)

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (data, { dispatch }) => {
        console.log(data);

        try {

            const response = await axiosInstance.post("user/loginUser", data);
            if (response.data.success) {
                return response.data
                dispatch(setAlert({ text: response.payload.message, variant: 'success' }));
            }
            console.log("response",response);

        } catch (error) {
            dispatch(setAlert({ text: error.response.data.message, variant: 'error' }));

            console.log(error);
        }
    }
)

export const logoutUser = createAsyncThunk(
    'auth/logoutUser',
    async (_id) => {
        console.log("_id", _id);

        try {

            const response = await axiosInstance.post("user/logoutUser", { _id });
            if (response.data.success) {
                return response.data._id

            }
            console.log(response);

        } catch (error) {
            console.log(error);

        }

    }
)

export const checkAuth = createAsyncThunk(
    'auth/checkAuth',
    async () => {

        try {

            const response = await axiosInstance.get("user/checkAuth");

            console.log(response);

        } catch (error) {
            console.log(error);

        }

    }
)

export const forgotPass = createAsyncThunk(
    'auth/forgotPass',
    async (data) => {
        console.log(data);

        try {

            const response = await axiosInstance.post("user/forgotPass", data);
            if (response.data.success) {
                return response.data.data

            }
            console.log(response);

        } catch (error) {
            console.log(error);

        }

    }
)

export const resetPass = createAsyncThunk(
    'auth/resetPass',
    async (data) => {
        console.log(data);

        try {

            const response = await axiosInstance.post("user/resetPass", data);
            if (response.data.success) {
                return response.data.data

            }
            console.log(response);

        } catch (error) {
            console.log(error);

        }

    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.user = action.payload
        })
        builder.addCase(verifyUser.fulfilled, (state, action) => {
            state.user = action.payload
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload
        })
        builder.addCase(logoutUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload
            state.error = null
        })
        builder.addCase(checkAuth.fulfilled, (state, action) => {
            state.user = action.payload
        })
        builder.addCase(forgotPass.fulfilled, (state, action) => {
            state.user = action.payload 
        })
        builder.addCase(resetPass.fulfilled, (state, action) => {
            state.user = action.payload
        })
    }

})

export default authSlice.reducer;