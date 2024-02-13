import {Image, KeyboardAvoidingView, Switch, Text, TextInput, TouchableOpacity, View} from "react-native";
import {liteStyles} from './loginStyles'
import {useNavigation} from "@react-navigation/native";
import React, {useState} from "react";

import {globalContainerStyles} from '../../constants/globalContainerStyles'
import {selectIsDarkTheme, toggleTheme} from "../../redux/slieces/themeSlice";
import {useDispatch, useSelector} from "react-redux";
import {darkStyles} from "./loginStylesDark";
import {ICONCOlORS} from "../../constants/colors";

export default function LoginScreen() {
    const navigation = useNavigation();
    const isDarkTheme = useSelector(selectIsDarkTheme);

    let styles = isDarkTheme ? darkStyles : liteStyles
    let iconColors = isDarkTheme ? ICONCOlORS.dark : ICONCOlORS.lite

    const handleRegistration = () => {
        navigation.navigate('Registration');
    };

    const toLogin = () => {
        navigation.replace('HomeTabs');
    };

    const dispatch = useDispatch();

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    };
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [isEnabled, setIsEnabled] = useState(false);


    return (
        <View style={styles.loginSreenParent}>
            <View style={styles.container}>
                <View style={styles.loginParentChild}>
                    <View style={styles.logoContainer}>
                        <Image
                            source={require('../../assets/logosis.png')}
                            style={styles.image}/>
                    </View>

                    {/*<Switch*/}
                    {/*    trackColor={{false: '#767577', true: '#81b0ff'}}*/}
                    {/*    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}*/}
                    {/*    ios_backgroundColor="#3e3e3e"*/}
                    {/*    onValueChange={toggleSwitch}*/}
                    {/*    value={isEnabled}*/}
                    {/*/>*/}


                    <View style={styles.inputGroupContainer}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.titleText}>Логин</Text>
                            <TextInput
                                placeholder={'Введите логин'}
                                placeholderTextColor={iconColors}
                                style={[styles.input, {color: iconColors}]}
                                keyboardType={'email-address'}
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.titleText}>Пароль</Text>
                            <TextInput
                                placeholder={'Введите пароль'}
                                secureTextEntry={true}
                                password={true}
                                placeholderTextColor={iconColors}
                                style={[styles.input, {color: iconColors}]}
                                keyboardType={'default'}
                            />
                        </View>
                    </View>

                    <View style={styles.loginButtonContainer}>

                        <TouchableOpacity
                            style={styles.loginBtn}
                            onPress={toLogin}
                        >
                            <Text style={styles.loginText}>Войти</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.dopButtonGroup}>
                        <TouchableOpacity style={styles.forgotBtn}>
                            <Text style={styles.forgotText}>Забыли пароль ?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.forgotBtn}
                            onPress={handleRegistration}
                        >
                            <Text style={styles.forgotText}>Регистрация</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.footerLogo}>
                    <Text style={styles.footerText}>Цифровые решения</Text>
                    <Text style={styles.footerCompanyText}>Business Soft</Text>
                </View>
            </View>
        </View>
    )
}
