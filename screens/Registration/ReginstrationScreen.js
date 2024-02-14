import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView, ScrollView, Keyboard, Platform
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
    selectRegistrationStep,
    incrementStep,
    resetRegistration,
    selectPdfViewed
} from '../../redux/slieces/registrationSlice';
import Step1Screen from "./RegistationStep1";
import Step2Screen from "./RegistationStep2";
import Step3Screen from "./RegistationStep3";
import Step4Screen from "./RegistationStep4";
import Step5Screen from "./RegistationStep5";
import Step6Screen from "./RegistationStep6";
import Step7Screen from "./RegistationStep7";
import {selectIsDarkTheme} from "../../redux/slieces/themeSlice";
import {ICONCOlORS} from "../../constants/colors";
import {stylesDark} from "./styles/registrationStylesDark";
import {stylesLite} from "./styles/registrationStyles";
import PDFViewer from "./PdfViewer";
import {selectLanguage, selectLanguages} from "../../redux/slieces/languageSlice";

const RegistrationScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const isDarkTheme = useSelector(selectIsDarkTheme);
    let iconColors = isDarkTheme ? ICONCOlORS.dark : ICONCOlORS.lite
    let styles = isDarkTheme ? stylesDark : stylesLite
    const  pdfViewed = useSelector(selectPdfViewed)

    const currentStep = useSelector(selectRegistrationStep);
    const [showInput, setShowInput] = useState(false);
    const [sendMessageCode, setsendMessageCode] = useState(false);
    const [showInputBtn, setShowInputBtn] = useState(false);
    const [reverseShowInput, setReverseShowInput] = useState(false);
    const [nextBtnVisible, setNextBtnVisible] = useState(true)
    const [doneRegistration, setdoneRegistration] = useState(false)
    const [keyboardShown, setKeyboardShown] = useState(false);

    const languages = useSelector(selectLanguages);
    const selectedLanguage = useSelector(selectLanguage);
    const language = languages[selectedLanguage]

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow',
            () => setKeyboardShown(true)
        );
        const keyboardDidHideListener = Keyboard.addListener(
            Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide',
            () => setKeyboardShown(false)
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);
    // const currentStep = 7
    const handleNextStep = () => {
        dispatch(incrementStep());
    };


    const finishRegistration = () => {
        setReverseShowInput(true)
        setShowInput(true)// Показать ввод текста после нажатия кнопки "Отправить"
        setShowInputBtn(true)
        setsendMessageCode(true)
    };

    function signDocument() {
        setsendMessageCode(false)
        setShowInputBtn(false)
        setdoneRegistration(true)
    }

    function finish() {
        dispatch(resetRegistration());
        navigation.navigate('login');
    }


    useEffect(() => {
        if (currentStep === 7) {
            setNextBtnVisible(false);
        } else {
            setNextBtnVisible(true);
        }
    }, [currentStep]);

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <View style={styles.loginSreenParent}>
                        <View style={styles.container}>
                            <Text style={styles.stepText}>{language.stepSitile} {currentStep}: {language.stepSitleFunctionName1}</Text>
                            <View style={{flex: 1, width: '100%', height: '100%', marginTop: 10, alignSelf: 'center'}}>
                                <PDFViewer/>
                            </View>
                        </View>
                    </View>
                );
            case 2:
                return (
                    <View style={styles.loginSreenParent}>
                        <View style={styles.container}>
                            <View style={styles.loginParentChild}>
                                <Text style={styles.stepText}>{language.stepSitile} {currentStep}: {language.stepSitleFunctionName2}</Text>
                                <ScrollView style={styles.renderedContent}>
                                    <Step2Screen/>
                                </ScrollView>

                            </View>
                        </View>
                    </View>
                );
            case 3:
                return (
                    <View style={styles.loginSreenParent}>
                        <View style={styles.container}>
                            <View style={styles.loginParentChild}>
                                <Text style={styles.stepText}>{language.stepSitile} {currentStep}: {language.stepSitleFunctionName3} </Text>
                                <ScrollView style={styles.renderedContent}>
                                    <Step3Screen/>
                                </ScrollView>

                            </View>
                        </View>
                    </View>
                );
            case 4:
                return (
                    <View style={styles.loginSreenParent}>
                        <View style={styles.container}>
                            <View style={styles.loginParentChild}>
                                <Text style={styles.stepText}>{language.stepSitile} {currentStep}: {language.stepSitleFunctionName4}</Text>
                                <ScrollView style={styles.renderedContent}>
                                    <Step4Screen/>
                                </ScrollView>

                            </View>
                        </View>
                    </View>
                );

            case 5:
                return (
                    <View style={styles.loginSreenParent}>
                        <View style={styles.container}>
                            <View style={styles.loginParentChild}>
                                <Text style={styles.stepText}>{language.stepSitile} {currentStep}: {language.stepSitleFunctionName5}</Text>
                                <ScrollView style={styles.renderedContent}>
                                    <Step5Screen/>
                                </ScrollView>

                            </View>
                        </View>
                    </View>
                );

            case 6:
                return (
                    <View style={styles.loginSreenParent}>
                        <View style={styles.container}>
                            <View style={styles.loginParentChild}>
                                <Text style={styles.stepText}>{language.stepSitile} {currentStep}: {language.stepSitleFunctionName6}</Text>
                                <ScrollView style={styles.renderedContent}>
                                    <Step6Screen/>
                                </ScrollView>

                            </View>
                        </View>
                    </View>
                );

            case 7:
                return (
                    <View style={styles.loginSreenParent}>
                        <View style={styles.container}>
                            <View style={styles.loginParentChild}>
                                <Text style={styles.stepText}>{language.stepSitile} {currentStep}: {language.stepSitleFunctionName7}</Text>
                                {!reverseShowInput && (
                                    <ScrollView style={styles.renderedContent}>
                                        <Step7Screen/>
                                    </ScrollView>
                                )}
                            </View>

                            <View style={{width: '100%', height: 100, position: 'absolute'}}>
                                {showInput && (
                                    <View style={styles.inputContainer2}>
                                        <View style={styles.inputTextContainer}>
                                            <Text style={styles.titleText}>{language.codeTitle}</Text><Text
                                            style={styles.requredText}>*</Text>
                                        </View>
                                        <TextInput
                                            placeholder={" * * * * * * "}
                                            style={[styles.inputChekNumber, {color: iconColors}]}
                                            keyboardType={'numeric'}
                                            placeholderTextColor={iconColors}
                                        />
                                        {sendMessageCode && (
                                            <View style={styles.inputContainerFinalText}>
                                                <Text style={styles.sendCodeSMS}>
                                                    {language.finalRegTitle3}
                                                </Text>
                                            </View>
                                        )}

                                        {doneRegistration && (
                                            <View style={styles.inputContainerFinalText}>
                                                <Text style={styles.sendCodeSMS}>
                                                    {language.codeSuccses}
                                                </Text>

                                                <Text style={styles.sendCodeSMS}>{language.waitTitle}</Text>
                                            </View>
                                        )}
                                    </View>
                                )}
                            </View>

                            <View style={styles.btnGroup}>
                                {!reverseShowInput && (
                                    <TouchableOpacity onPress={finishRegistration} style={styles.nextButton}>
                                        <Text style={styles.nextBtnText}>{language.sendBtnText}</Text>
                                    </TouchableOpacity>
                                )}

                                {showInputBtn && (
                                    <TouchableOpacity onPress={signDocument} style={styles.nextButton}>
                                        <Text style={styles.nextBtnText}>{language.confirmBtnText}</Text>
                                    </TouchableOpacity>
                                )}

                                {doneRegistration && (
                                    <TouchableOpacity onPress={finish} style={styles.nextButton}>
                                        <Text style={styles.nextBtnText}>{language.confirmBtnText}</Text>
                                    </TouchableOpacity>
                                )}
                            </View>
                        </View>
                    </View>

                );
            default:
                return null;
        }
    };

    return (
        <View style={styles.containerMain}>
            <Text style={styles.mainTitle}>{language.registerBtn}</Text>
            <KeyboardAvoidingView>
                {renderStepContent()}
                {!keyboardShown && nextBtnVisible && pdfViewed && (
                    <View style={styles.btnGroup}>
                        <TouchableOpacity onPress={handleNextStep} style={styles.nextButton}>
                            <Text style={styles.nextBtnText}>{language.nextBtnText}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </KeyboardAvoidingView>

        </View>
    );
};


export default RegistrationScreen;
