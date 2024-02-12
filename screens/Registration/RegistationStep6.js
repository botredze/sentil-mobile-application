import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {incrementStep, selectPdfViewed} from '../../redux/slieces/registrationSlice';
import {Picker} from '@react-native-picker/picker';
import {stylesLite} from "./styles/registrationStyles";
import {selectIsDarkTheme} from "../../redux/slieces/themeSlice";
import {ICONCOlORS} from "../../constants/colors";
import {stylesDark} from "./styles/registrationStylesDark";

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
                        <Picker.Item label="Выберите страну" value="0"/>
                        <Picker.Item label="Кыргызстан" value="1"/>
                        <Picker.Item label="Кызыкстан" value="2"/>
                        <Picker.Item label="Узбекистан" value="3"/>
                        <Picker.Item label="Раша" value="4"/>
                    </Picker>

                    <View style={styles.inputContainer}>
                        <View style={styles.inputTextContainer}>
                            <Text style={styles.titleText}>Укажите ваш адрес</Text><Text
                            style={styles.requredText}>*</Text>
                        </View>
                        <TextInput
                            placeholder={'Введите адрес'}
                            placeholderTextColor={iconColors}
                            style={[styles.input1, {color: iconColors}]}
                            keyboardType={'default'}
                        />
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Step6Screen