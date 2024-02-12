import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './slieces/registrationSlice';
import themeReducer from './slieces/themeSlice'
import depositReducer from "./slieces/depositSilce";

const store = configureStore({
    reducer: {
        registration: registrationReducer,
        theme: themeReducer,
        deposit: depositReducer
    },
});

export default store;
