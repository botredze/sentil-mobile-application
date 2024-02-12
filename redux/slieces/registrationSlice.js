import { createSlice } from '@reduxjs/toolkit';

export const registrationSlice = createSlice({
    name: 'registration',
    initialState: {
        step: 1,
        pdfViewed: false,
    },
    reducers: {
        incrementStep: (state) => {
            state.step += 1;
        },
        setPdfViewed: (state) => {
            state.pdfViewed = true;
        },
        resetRegistration: (state) => {
            state.step = 1;
            state.pdfViewed = false;
        },
    },
});

export const { incrementStep, setPdfViewed, resetRegistration } = registrationSlice.actions;

export const selectRegistrationStep = (state) => state.registration.step;
export const selectPdfViewed = (state) => state.registration.pdfViewed;

export default registrationSlice.reducer;
