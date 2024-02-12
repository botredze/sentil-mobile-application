import React from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {incrementStep, selectPdfViewed} from '../../redux/slieces/registrationSlice';
import {MaskedTextInput} from "react-native-mask-text";
import { stylesLite} from "./styles/registrationStyles";
import {selectIsDarkTheme} from "../../redux/slieces/themeSlice";
import {ICONCOlORS} from "../../constants/colors";
import {stylesDark} from "./styles/registrationStylesDark";

const Step2Screen = () => {
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
                        <Text style={styles.titleText}>Имя</Text><Text style={styles.requredText}>*</Text>
                    </View>
                    <TextInput
                        placeholder={'Введите имя'}
                        placeholderTextColor={iconColors}
                        style={[styles.input, {color: iconColors}]}
                        keyboardType={'default'}
                    />
                </View>


                <View style={styles.inputContainer}>
                    <View style={styles.inputTextContainer}>
                        <Text style={styles.titleText}>Фамилия</Text><Text style={styles.requredText}>*</Text>
                    </View>
                    <TextInput
                        placeholder={'Введите фамилию'}
                        placeholderTextColor={iconColors}
                        style={[styles.input, {color: iconColors}]}
                        keyboardType={'default'}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <View style={styles.inputTextContainer}>
                        <Text style={styles.titleText}>Отчество</Text><Text style={styles.requredText}>*</Text>
                    </View>
                    <TextInput
                        placeholder={'Введите отчество'}
                        placeholderTextColor={iconColors}
                        style={[styles.input, {color: iconColors}]}
                        keyboardType={'default'}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <View style={styles.inputTextContainer}>
                        <Text style={styles.titleText}>Введите почтовый адрес</Text><Text
                        style={styles.requredText}>*</Text>
                    </View>

                    <Text style={styles.titleText1}>(Будет использоваться в качестве логина)</Text>

                    <TextInput
                        placeholder={'Введите email'}
                        placeholderTextColor={iconColors}
                        style={[styles.input, {color: iconColors}]}
                        keyboardType={'email-address'}
                        inputMode={"email"}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <View style={styles.inputTextContainer}>
                        <Text style={styles.titleText}>Номер телефона </Text><Text style={styles.requredText}>*</Text>
                    </View>
                    <MaskedTextInput
                        defaultValue="+996 "
                        placeholder="+996 (___) ___-___"
                        style={styles.inputNumberPhone}
                        keyboardType={'numeric'}
                        mask={"+996 (999) 999-999"}
                        onChangeText={(text, rawText) => {
                            console.log(text);
                            console.log(rawText);
                        }}
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}


export default Step2Screen