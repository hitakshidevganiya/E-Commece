import { configureStore } from "@reduxjs/toolkit"
import authReducer from './Slice/auth.slice'
import alertReducer from './Slice/Alert.slice'
import { categoryApi } from "./Api/category.api"

export const configStore = () => {
    const store = configureStore({
        reducer: {
            auth: authReducer,
            alert: alertReducer,
            [categoryApi.reducerPath]: categoryApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(categoryApi.middleware),
    });

    return store;
}