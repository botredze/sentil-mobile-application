import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {incrementStep, selectPdfViewed} from '../../redux/slieces/registrationSlice';
import {Ionicons} from "@expo/vector-icons";
import * as DocumentPicker from 'expo-document-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { stylesLite} from "./styles/registrationStyles";
import {selectIsDarkTheme} from "../../redux/slieces/themeSlice";
import {ICONCOlORS} from "../../constants/colors";
import {stylesDark} from "./styles/registrationStylesDark";
import {selectLanguage, selectLanguages} from "../../redux/slieces/languageSlice";

const Step5Screen = () => {
    const isDarkTheme = useSelector(selectIsDarkTheme);
    let iconColors = isDarkTheme ? ICONCOlORS.dark : ICONCOlORS.lite
    let styles = isDarkTheme ? stylesDark : stylesLite

    const [passportFront, setPassportFront] = useState(null);
    const [passportBack, setPassportBack] = useState(null);
    const [selfieWithPassport, setSelfieWithPassport] = useState(null);
    const [temporaryDocument, setTemporaryDocument] = useState(null);


    const handlePassportFrontUpload = async () => {
        try {
            const document = await DocumentPicker.getDocumentAsync();
            if (document) {
                console.log(document);
                await AsyncStorage.setItem('passportFront', JSON.stringify(document));
                setPassportFront(document.assets[0].uri);
            } else {
                console.log('Загрузка документа отменена');
            }
        } catch (error) {
            console.error('Ошибка при сохранении ссылки на фото паспорта (передняя сторона) в AsyncStorage:', error);
        }
    };


    const handlePassportBackUpload = async () => {
        try {
            const document = await DocumentPicker.getDocumentAsync();
            if (document) {
                await AsyncStorage.setItem('passportBack',  JSON.stringify(document));
                setPassportBack(document.assets[0].uri);
            }
        } catch (error) {
            console.error('Ошибка при сохранении ссылки на фото паспорта (задняя сторона) в AsyncStorage:', error);
        }
    };
    const languages = useSelector(selectLanguages);
    const selectedLanguage = useSelector(selectLanguage);
    const language = languages[selectedLanguage]


    const handleSelfieWithPassportUpload = async () => {
        try {
            const document = await DocumentPicker.getDocumentAsync();
            if (document) {
                await AsyncStorage.setItem('selfieWithPassport',  JSON.stringify(document));
                setSelfieWithPassport(document.assets[0].uri);
            }
        } catch (error) {
            console.error('Ошибка при сохранении ссылки на селфи с паспортом в AsyncStorage:', error);
        }
    };


    return (
        <ScrollView style={styles.container}>
            <View style={styles.uploadBtnGroup}>
                <Text style={styles.buttonText}>{language.frontPasportTitle}</Text>
                <Text style={styles.buttonText}>{language.forReplaceInfoTitle}</Text>
                <TouchableOpacity style={styles.uploadButton} onPress={handlePassportFrontUpload}>
                    <Ionicons name='cloud-upload-outline' size={25} color={iconColors}/>
                    <View style={{width: '80%'}}>

                        <Text style={styles.buttonText}>{language.sendPhotoPlaceHolder}</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.imageContent}>
                    {passportFront && (
                        <Image source={{uri: passportFront}} style={{width: 150, height: 150}}/>
                    )}
                </View>


                <Text style={styles.buttonText}>{language.backPassportTitle}</Text>
                <Text style={styles.buttonText}>{language.forReplaceInfoTitle}</Text>
                <TouchableOpacity style={styles.uploadButton} onPress={handlePassportBackUpload}>
                    <Ionicons name='cloud-upload-outline' size={25} color={iconColors}/>
                    <View style={{width: '80%'}}>
                        <Text style={styles.buttonText}>{language.sendPhotoPlaceHolder}</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.imageContent}>
                    {passportBack && (
                        <Image source={{uri: passportBack}} style={{width: 150, height: 150}}/>
                    )}
                </View>

                <Text style={styles.buttonText}>{language.selfiPassportTitle}</Text>
                <Text style={styles.buttonText}>{language.forReplaceInfoTitle}</Text>

                <TouchableOpacity style={styles.uploadButton} onPress={handleSelfieWithPassportUpload}>
                    <Ionicons name='cloud-upload-outline' size={25} color={iconColors}/>
                    <View style={{width: '80%'}}>
                        <Text style={styles.buttonText}>{language.sendPhotoPlaceHolder}</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.imageContent}>
                    {selfieWithPassport && (
                        <Image source={{uri: selfieWithPassport}} style={{width: 150, height: 150}}/>
                    )}
                </View>

            </View>
        </ScrollView>
    )
}

export default Step5Screen;
