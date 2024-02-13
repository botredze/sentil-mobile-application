import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {incrementStep, setPdfViewed, selectPdfViewed} from '../../redux/slieces/registrationSlice';
import PDFViewer from "./PdfViewer";
import {selectIsDarkTheme} from "../../redux/slieces/themeSlice";
import {ICONCOlORS} from "../../constants/colors";
import {stylesDark} from "./styles/registrationStylesDark";
import {stylesLite} from "./styles/registrationStyles";

const Step1Screen = () => {
    const dispatch = useDispatch();
    const pdfViewed = useSelector(selectPdfViewed);
    const isDarkTheme = useSelector(selectIsDarkTheme);
    let iconColors = isDarkTheme ? ICONCOlORS.dark : ICONCOlORS.lite
    let styles = isDarkTheme ? stylesDark : stylesLite

    const handleNext = () => {
        if (pdfViewed) {
            dispatch(incrementStep());
        } else {
            alert('Пожалуйста, пролистайте документ до конца.');
        }
    };

    const handlePDFViewed = () => {
        dispatch(setPdfViewed());
    };

    return (
            <View style={styles.containerPdf}>
                <PDFViewer/>
            </View>
    );
};

export default Step1Screen;
