import {createSlice} from "@reduxjs/toolkit";


export const depositSlice = createSlice({
    name: 'deposit',
    initialState: {
        step: 1
    },
    reducers: {
        incrementStep: (state, action) => {
            state.step = action.payload
        },

    }
});


export const {incrementStep, resetRegistration} = depositSlice.actions

export const selectTransactionStep = (state) => state.deposit.step;


export default depositSlice.reducer

