import { configureStore } from "@reduxjs/toolkit"
import authReducer from './Slice/auth.slice'
import alertReducer from './Slice/Alert.slice'
import { categoryApi } from "./Api/category.api"
import { productApi } from "./Api/product.api"

export const configStore = () => {
    const store = configureStore({
        reducer: {
            auth: authReducer,
            alert: alertReducer,
            [categoryApi.reducerPath]: categoryApi.reducer,
            [productApi.reducerPath]: productApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                categoryApi.middleware,
                productApi.middleware,

            ),
    });

    return store;
}