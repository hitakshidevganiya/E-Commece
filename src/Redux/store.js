import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./Api/auth.api";

export const configStore = configureStore({
    reducer: {
        [authApi.reducerPath] : authApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(authApi.middleware)
})