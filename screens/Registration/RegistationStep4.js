import React from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {incrementStep, selectPdfViewed} from '../../redux/slieces/registrationSlice';
import {stylesLite} from "./styles/registrationStyles";
import {selectIsDarkTheme} from "../../redux/slieces/themeSlice";
import {ICONCOlORS} from "../../constants/colors";
import {stylesDark} from "./styles/registrationStylesDark";

const Step4Screen = () => {
    const dispatch = useDispatch();
    const pdfViewed = useSelector(selectPdfViewed);
    const isDarkTheme = useSelector(selectIsDarkTheme);
    let iconColors = isDarkTheme ? ICONCOlORS.dark : ICONCOlORS.lite
    let styles = isDarkTheme ? stylesDark : stylesLite

    const handleNext = () => {
        if (pdfViewed) {
            dispatch(incrementStep());
        } else {
            alert('Пожалуйста, заполните все поля.');
        }
    };

    return (
        <KeyboardAvoidingView behavior="padding">
            <View style={styles.container}>

                <View style={styles.inputContainer}>
                    <View style={styles.inputTextContainer}>
                        <Text style={styles.titleText}>Придумайте пароль</Text><Text style={styles.requredText}>*</Text>
                    </View>
                    <View>
                        <TextInput
                            placeholder={'Введите пароль'}
                            placeholderTextColor = {iconColors}
                        style={[styles.input, {color: iconColors}]}
                            keyboardType={'default'}
                            secureTextEntry={true}
                            password={true}
                        />
                    </View>
                </View>


                <View style={styles.inputContainer}>
                    <View style={styles.inputTextContainer}>
                        <Text style={styles.titleText}>Повторите пароль</Text><Text style={styles.requredText}>*</Text>
                    </View>
                    <View>
                        <TextInput
                            placeholder={'Повторите пароль'}
                            placeholderTextColor = {iconColors}
                        style={[styles.input, {color: iconColors}]}
                            keyboardType={'default'}
                            secureTextEntry={true}
                            password={true}
                        />
                    </View>
                </View>


            </View>
        </KeyboardAvoidingView>
    )
}

export default Step4Screen