import { configureStore } from "@reduxjs/toolkit"
import authReducer from './Slice/auth.slice'
import alertReducer from './Slice/Alert.slice'

export const configStore = () => {
    const store = configureStore({
        reducer: {
            auth: authReducer,
            alert: alertReducer
        },
       
    })

    return store;
}