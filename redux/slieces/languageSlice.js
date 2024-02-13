import { createSlice } from '@reduxjs/toolkit';
const enData = require('../../language/english.json')
const ruData = require('../../language/russian.json')
const kgData = require('../../language/kyrgys.json')

console.log(enData,ruData, kgData)
export const languageSlice = createSlice({
    name: 'language',
    initialState: {
        selectedLanguage: 'ru', // default language
        languages: { en: enData, ru: ruData, kg: kgData }
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.selectedLanguage = action.payload;
        },
        setLanguages: (state, action) => {
            state.languages = action.payload;
        }
    },
});

export const { changeLanguage, setLanguages } = languageSlice.actions;

export const selectLanguage = (state) => state.language.selectedLanguage;
export const selectLanguages = (state) => state.language.languages;


export default languageSlice.reducer;
