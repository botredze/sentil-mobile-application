import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './slieces/registrationSlice';
import themeReducer from './slieces/themeSlice'
import depositReducer from "./slieces/depositSilce";
import  languageReducer from "./slieces/languageSlice"

const store = configureStore({
    reducer: {
        registration: registrationReducer,
        theme: themeReducer,
        deposit: depositReducer,
        language: languageReducer,
    },
});

export default store;
