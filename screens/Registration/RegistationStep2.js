import React from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {incrementStep, selectPdfViewed} from '../../redux/slieces/registrationSlice';
import {MaskedTextInput} from "react-native-mask-text";
import { stylesLite} from "./styles/registrationStyles";
import {selectIsDarkTheme} from "../../redux/slieces/themeSlice";
import {ICONCOlORS} from "../../constants/colors";
import {stylesDark} from "./styles/registrationStylesDark";
import {selectLanguage, selectLanguages} from "../../redux/slieces/languageSlice";

const Step2Screen = () => {
    const dispatch = useDispatch();
    const pdfViewed = useSelector(selectPdfViewed);
    const isDarkTheme = useSelector(selectIsDarkTheme);
    let iconColors = isDarkTheme ? ICONCOlORS.dark : ICONCOlORS.lite
    let styles = isDarkTheme ? stylesDark : stylesLite
    const languages = useSelector(selectLanguages);
    const selectedLanguage = useSelector(selectLanguage);
    const language = languages[selectedLanguage]

    return (
        <KeyboardAvoidingView behavior="padding">
            <View style={styles.container}>

                <View style={styles.inputContainer}>
                    <View style={styles.inputTextContainer}>
                        <Text style={styles.titleText}>{language.firstNameTitle}</Text><Text style={styles.requredText}>*</Text>
                    </View>
                    <TextInput
                        placeholder={language.firstNamePlaceHolder}
                        placeholderTextColor={iconColors}
                        style={[styles.input, {color: iconColors}]}
                        keyboardType={'default'}
                    />
                </View>


                <View style={styles.inputContainer}>
                    <View style={styles.inputTextContainer}>
                        <Text style={styles.titleText}>{language.lastNameTitle}</Text><Text style={styles.requredText}>*</Text>
                    </View>
                    <TextInput
                        placeholder={language.lastNamePlaceholder}
                        placeholderTextColor={iconColors}
                        style={[styles.input, {color: iconColors}]}
                        keyboardType={'default'}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <View style={styles.inputTextContainer}>
                        <Text style={styles.titleText}>{language.regMiddleNameTitle}</Text><Text style={styles.requredText}>*</Text>
                    </View>
                    <TextInput
                        placeholder={language.regMiddleNamePlaceholder}
                        placeholderTextColor={iconColors}
                        style={[styles.input, {color: iconColors}]}
                        keyboardType={'default'}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <View style={styles.inputTextContainer}>
                        <Text style={styles.titleText}>{language.regEmailPlaceHolder}</Text><Text
                        style={styles.requredText}>*</Text>
                    </View>

                    <Text style={styles.titleText1}>{language.regEmailTitle}</Text>

                    <TextInput
                        placeholder={language.emailPlaceHolder}
                        placeholderTextColor={iconColors}
                        style={[styles.input, {color: iconColors}]}
                        keyboardType={'email-address'}
                        inputMode={"email"}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <View style={styles.inputTextContainer}>
                        <Text style={styles.titleText}>{language.regGhoneNumberTitle}</Text><Text style={styles.requredText}>*</Text>
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
