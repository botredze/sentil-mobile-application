import {Text, TouchableOpacity, View, Image, TextInput, KeyboardAvoidingView, Platform,} from "react-native";
import {styles, stylesLite} from "./profileStyles";
import {Ionicons} from "@expo/vector-icons";
import {Picker} from '@react-native-picker/picker';
import React, {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {MaskedTextInput} from "react-native-mask-text";
import {useSelector} from "react-redux";
import {selectIsDarkTheme} from "../../redux/slieces/themeSlice";
import {ICONCOlORS} from "../../constants/colors";
import {stylesDark} from "./myProfileStyleDark";
import {selectLanguage, selectLanguages} from "../../redux/slieces/languageSlice";


export default function Profile() {
    const [selectedValue, setSelectedValue] = useState('');
    const navigation = useNavigation();
    const isDarkTheme = useSelector(selectIsDarkTheme);
    let iconColors = isDarkTheme ? ICONCOlORS.dark : ICONCOlORS.lite
    let styles = isDarkTheme ? stylesDark : stylesLite
    const languages = useSelector(selectLanguages);
    const selectedLanguage = useSelector(selectLanguage);
    const language = languages[selectedLanguage]
    const goToSettingsPage = () => {
        navigation.navigate('Settings')
    };
    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.container}>
                    <View style={styles.nav}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons name='arrow-back' size={30} color={iconColors}/>
                        </TouchableOpacity>

                        {/*<TouchableOpacity style={{display: "flex", flexDirection: 'row', gap: 10}}>*/}
                        {/*    <Text style={{lineHeight: 29, fontSize: 18}}>Выйти</Text>*/}
                        {/*    <Ionicons name='power' size={30} color='red'/>*/}
                        {/*</TouchableOpacity>*/}

                    </View>


                    <View style={styles.title}><Text style={styles.profileText}>{language.myProfileUpdateTitle}</Text></View>

                    <View style={styles.inputGroup}>
                        <View style={styles.inputTextGroup}>
                            <Text style={styles.inputText}>{language.firstNameTitle}</Text>
                            <TextInput
                                placeholder={language.firstNamePlaceHolder}
                                placeholderTextColor={iconColors}
                                style={[styles.input, {color: iconColors}]}
                                keyboardType="default"
                            />
                        </View>
                        <View style={styles.inputTextGroup}>
                            <Text style={styles.inputText}>{language.lastNameTitle}</Text>
                            <TextInput
                                placeholder={language.lastNamePlaceholder}
                                placeholderTextColor={iconColors}
                                style={[styles.input, {color: iconColors}]}
                                keyboardType="default"
                            />
                        </View>
                        <View style={styles.inputTextGroup}>
                            <Text style={styles.inputText}>{language.emailTitle}</Text>
                            <TextInput
                                placeholder={language.emailPlaceHolder}
                                placeholderTextColor={iconColors} style={[styles.input, {color: iconColors}]}
                                keyboardType="default"
                            />
                        </View>

                        <View style={styles.inputTextGroup}>
                            <Text style={styles.inputText}>{language.numberPhoneTitle}</Text>
                            <View style={styles.numberContainer}>
                                {/*<Picker*/}
                                {/*    selectedValue={selectedValue}*/}
                                {/*    style={styles.codeNumberPhone}*/}
                                {/*    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}*/}
                                {/*>*/}
                                {/*    <Picker.Item label="+996" value="+996"/>*/}
                                {/*    <Picker.Item label="+7" value="+7"/>*/}
                                {/*    <Picker.Item label="+8" value="+8"/>*/}
                                {/*    <Picker.Item label="+375" value="+375"/>*/}
                                {/*</Picker>*/}

                                <MaskedTextInput
                                    defaultValue="+996 "
                                    placeholder="+996 (___) ___-___"
                                    placeholderTextColor={iconColors}
                                    style={[styles.input, {color: iconColors}]}
                                    keyboardType={'numeric'}
                                    mask={"+996 (999) 999-999"}
                                    onChangeText={(text, rawText) => {
                                        console.log(text);
                                        console.log(rawText);
                                    }}
                                />
                            </View>
                        </View>

                    </View>

                    <View style={styles.updateButtonView}>
                        <TouchableOpacity
                            style={styles.updateButton}
                            onPress={goToSettingsPage}
                        >
                            <Text style={styles.updateButtonText}>{language.updateBtn}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </KeyboardAvoidingView>
    )

}
