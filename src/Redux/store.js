import { configureStore } from "@reduxjs/toolkit"
import authReducer from './Slice/auth.slice'
import alertReducer from './Slice/Alert.slice'
import { productApi } from "./Api/product.api"
import { categoryApi } from "./Api/category.api"
import { cartApi } from "./Api/cart.api"
import { orderApi } from "./Api/order.api"

export const configStore = () => {
    const store = configureStore({
        reducer: {
            auth: authReducer,
            alert: alertReducer,
            [categoryApi.reducerPath]: categoryApi.reducer,
            [productApi.reducerPath]: productApi.reducer,
            [cartApi.reducerPath]: cartApi.reducer,
            [orderApi.reducerPath]: orderApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(categoryApi.middleware)
                .concat(productApi.middleware)
                .concat(cartApi.middleware)
                .concat(orderApi.middleware)
    });

    return store;
}