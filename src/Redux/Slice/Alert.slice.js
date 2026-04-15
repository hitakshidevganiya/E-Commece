import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    text: '',
    variant: ''
}

export const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        setAlert: (state, action) => {
            state.text = action.payload.text
            state.variant = action.payload.variant
        },
        resetAlert: (state, action) => {
            state.text = ''
            state.variant = ''
        }
    }
})

export const { setAlert, resetAlert } = alertSlice.actions;

export default alertSlice.reducer;