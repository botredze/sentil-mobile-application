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
                        <Text style={styles.titleText}>ID паспорта</Text><Text style={styles.requredText}>*</Text>
                    </View>
                    <View>
                        <TextInput
                            placeholder={'Введите ID'}
                           placeholderTextColor = {iconColors}
                        style={[styles.input, {color: iconColors}]}
                            keyboardType={'default'}
                        />
                        <Text style={styles.podskaText}>Пример: AN1234567,ID1234567</Text>
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <View style={styles.inputTextContainer}>
                        <Text style={styles.titleText}>ИНН</Text><Text style={styles.requredText}>*</Text>
                    </View>
                    <View>
                        <TextInput
                            placeholder={'Введите ИНН'}
                           placeholderTextColor = {iconColors}
                        style={[styles.input, {color: iconColors}]}
                            keyboardType={'default'}
                        />
                        <Text style={styles.podskaText}>Персональный номер, состоящий из 14 цифр</Text>
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <View style={styles.inputTextContainer}>
                        <Text style={styles.titleText}>Орган выдавший паспорт</Text><Text
                        style={styles.requredText}>*</Text>
                    </View>
                    <View>
                        <TextInput
                            placeholder={'Введите данные органа'}
                           placeholderTextColor = {iconColors}
                        style={[styles.input, {color: iconColors}]}
                            keyboardType={'default'}
                        />
                        <Text style={styles.podskaText}>Пример: MKK 123456</Text>
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <View style={styles.inputTextContainer}>
                        <Text style={styles.titleText}>Дата выдачи</Text><Text style={styles.requredText}>*</Text>
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