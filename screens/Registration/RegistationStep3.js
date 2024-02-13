import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {incrementStep, selectPdfViewed} from '../../redux/slieces/registrationSlice';
import {DateTimePickerModal} from "react-native-modal-datetime-picker";
import moment from "moment/moment";
import { stylesLite} from "./styles/registrationStyles";
import {selectIsDarkTheme} from "../../redux/slieces/themeSlice";
import {ICONCOlORS} from "../../constants/colors";
import {stylesDark} from "./styles/registrationStylesDark";
import {selectLanguage, selectLanguages} from "../../redux/slieces/languageSlice";

const Step3Screen = () => {
    const dispatch = useDispatch();
    const pdfViewed = useSelector(selectPdfViewed);

    const handleNext = () => {
        if (pdfViewed) {
            dispatch(incrementStep());
        } else {
            alert('Пожалуйста, заполните все поля.');
        }
    };
    const isDarkTheme = useSelector(selectIsDarkTheme);
    let iconColors = isDarkTheme ? ICONCOlORS.dark : ICONCOlORS.lite
    let styles = isDarkTheme ? stylesDark : stylesLite

    const [isStartDatePickerVisible, setStartDatePickerVisible] = useState(false);
    const [isEndDatePickerVisible, setEndDatePickerVisible] = useState(false);

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    useEffect(() => {
        setStartDate(new Date())
        setEndDate(new Date())
    }, [])

    const formatDate = (date) => {
        return moment(date).format("DD.MM.YYYY");
    };
    const handleStartDateConfirm = (date) => {
        setStartDate(date);
        setStartDatePickerVisible(false);
    };


    const renderDateInputs = () => {
        return (
            <View style={styles.dateInputsContainer}>
                <View style={styles.inputContainer}>
                    <TouchableOpacity
                        style={styles.inputDate}
                        onPress={() => setStartDatePickerVisible(true)}
                    >
                        <Text style={styles.dateText}>{formatDate(startDate)}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    const languages = useSelector(selectLanguages);
    const selectedLanguage = useSelector(selectLanguage);
    const language = languages[selectedLanguage]

    const handleEndDateConfirm = (date) => {
        setEndDate(date);
        setStartDatePickerVisible(false);
        //  fetchData(startDate, date);
    };

    return (
        <KeyboardAvoidingView behavior="padding">
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <View style={styles.inputTextContainer}>
                        <Text style={styles.titleText}>{language.idPassportTitle}</Text><Text style={styles.requredText}>*</Text>
                    </View>
                    <View>
                        <TextInput
                            placeholder={language.idPassportPlaceHolder}
                           placeholderTextColor = {iconColors}
                        style={[styles.input, {color: iconColors}]}
                            keyboardType={'default'}
                        />
                        <Text style={styles.podskaText}>{language.exampleIdPassport}</Text>
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <View style={styles.inputTextContainer}>
                        <Text style={styles.titleText}>{language.innTitle}</Text><Text style={styles.requredText}>*</Text>
                    </View>
                    <View>
                        <TextInput
                            placeholder={language.innPlaceHolder}
                           placeholderTextColor = {iconColors}
                        style={[styles.input, {color: iconColors}]}
                            keyboardType={'default'}
                        />
                        <Text style={styles.podskaText}>{language.exampleInn}</Text>
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <View style={styles.inputTextContainer}>
                        <Text style={styles.titleText}>{language.organTitle}</Text><Text
                        style={styles.requredText}>*</Text>
                    </View>
                    <View>
                        <TextInput
                            placeholder={language.organPlaceHolder}
                           placeholderTextColor = {iconColors}
                        style={[styles.input, {color: iconColors}]}
                            keyboardType={'default'}
                        />
                        <Text style={styles.podskaText}>{language.exampleOrgan}</Text>
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <View style={styles.inputTextContainer}>
                        <Text style={styles.titleText}>{language.dateIssuseTitle}</Text><Text style={styles.requredText}>*</Text>
                    </View>
                    <View>
                        {renderDateInputs()}
                        <DateTimePickerModal
                            isVisible={isStartDatePickerVisible}
                            mode="date"
                            onConfirm={handleEndDateConfirm}
                            onCancel={() => setEndDatePickerVisible(false)}
                        />
                    </View>
                </View>

            </View>
        </KeyboardAvoidingView>
    )
}
export default Step3Screen
