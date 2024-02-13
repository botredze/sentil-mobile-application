import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {incrementStep, selectPdfViewed} from '../../redux/slieces/registrationSlice';
import {Picker} from '@react-native-picker/picker';
import {stylesLite} from "./styles/registrationStyles";
import {selectIsDarkTheme} from "../../redux/slieces/themeSlice";
import {ICONCOlORS} from "../../constants/colors";
import {stylesDark} from "./styles/registrationStylesDark";
import {selectLanguage, selectLanguages} from "../../redux/slieces/languageSlice";

const Step6Screen = () => {
    const dispatch = useDispatch();
    const pdfViewed = useSelector(selectPdfViewed);
    const [selectedValue, setSelectedValue] = useState('');
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
    const languages = useSelector(selectLanguages);
    const selectedLanguage = useSelector(selectLanguage);
    const language = languages[selectedLanguage]
    const handleValueChange = (itemValue, itemIndex) => setSelectedValue(itemValue)

    return (
        <KeyboardAvoidingView behavior="padding">
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Picker
                        selectedValue={selectedValue}
                        style={styles.inputAddressSelector}
                        onValueChange={handleValueChange}
                        mode={'dropdown'}
                        dropdownIconColor={iconColors}
                    >
                        <Picker.Item label={language.selectCountryPlaceHolder} value="0"/>
                        <Picker.Item label="Кыргызстан" value="1"/>
                        <Picker.Item label="Казакстан" value="2"/>
                        <Picker.Item label="Узбекистан" value="3"/>
                        <Picker.Item label="Россия" value="4"/>
                    </Picker>

                    <View style={styles.inputContainer}>
                        <View style={styles.inputTextContainer}>
                            <Text style={styles.titleText}>{language.addressTitle}</Text><Text
                            style={styles.requredText}>*</Text>
                        </View>
                        <TextInput
                            placeholder={language.addressPlaceHolder}
                            placeholderTextColor={iconColors}
                            style={[styles.input, {color: iconColors}]}
                            keyboardType={'default'}
                        />
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Step6Screen
