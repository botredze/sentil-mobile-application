import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView, Dimensions} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {resetRegistration} from "../../redux/slieces/registrationSlice";
import {stylesLite} from "./styles/registrationStyles";
import {selectIsDarkTheme} from "../../redux/slieces/themeSlice";
import {ICONCOlORS} from "../../constants/colors";
import {stylesDark} from "./styles/registrationStylesDark";

const Step7Screen = () => {
    const navigation = useNavigation();
    const [showInput, setShowInput] = useState(false);
    const dispatch = useDispatch();

    const isDarkTheme = useSelector(selectIsDarkTheme);
    let iconColors = isDarkTheme ? ICONCOlORS.dark : ICONCOlORS.lite
    let styles = isDarkTheme ? stylesDark : stylesLite

    const finishRegistration = () => {
        setShowInput(true); // Показать ввод текста после нажатия кнопки "Отправить"
    };

    function signDocument() {
        navigation.navigate('login');
        dispatch(resetRegistration());
    }

    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
                <View>
                    <View style={styles.inputContainerFinalText}>
                        <Text style={styles.titleText}>Для завершения регистрации, вам необходимо подписать
                            вышеуказанный документ! Для подписания нажмите кнопку "отправить" (ниже)</Text>
                        <Text style={styles.titleText}>На ваш номер телефона будет выслано смс-сообщение, введите его в
                            текстовое поле которое появится ниже, для подтверждения вашей подписи</Text>
                    </View>
            </View>
        </KeyboardAvoidingView>
    );
};


export default Step7Screen;
