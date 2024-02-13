import {styles, stylesLite} from "./securityStyle";
import {
    Animated,
    Image,
    KeyboardAvoidingView,
    Modal, Platform,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useRef, useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {selectIsDarkTheme} from "../../redux/slieces/themeSlice";
import {ICONCOlORS} from "../../constants/colors";
import {stylesDark} from "./securityStyleDark";
import {selectLanguage, selectLanguages} from "../../redux/slieces/languageSlice";


export default function Security() {
    const [passwordModalVisible, setPasswordModalVisible] = useState(false);
    const [pinModalVisible, setPinModalVisible] = useState(false);


    const goToSettingsPage = () => {
        navigation.navigate('Settings')
    };

    const isDarkTheme = useSelector(selectIsDarkTheme);
    let iconColors = isDarkTheme ? ICONCOlORS.dark : ICONCOlORS.lite
    let styles = isDarkTheme ? stylesDark : stylesLite
    let shadowProp = Platform.OS === 'ios' ? styles.shadowProp : styles.elevation
    const showPasswordModal = () => setPasswordModalVisible(true);
    const hidePasswordModal = () => setPasswordModalVisible(false);

    const showPinModal = () => setPinModalVisible(true);
    const hidePinModal = () => setPinModalVisible(false);

    const navigation = useNavigation();


    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: true,
        }).start();
    };

    const fadeOut = () => {
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: true,
        }).start();
    };

    const languages = useSelector(selectLanguages);
    const selectedLanguage = useSelector(selectLanguage);
    const language = languages[selectedLanguage]

    return (
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


            <View style={styles.title}><Text style={styles.profileText}>{language.resetPasswordTitle}</Text></View>

            <TouchableOpacity style={[styles.settingTabs, shadowProp]} onPress={showPasswordModal}>
                <Image source={require('../../assets/password.png')} style={styles.iconSet}/>
                <View style={styles.textView}>
                    <Text style={styles.nameText}>{language.resetPasswordBtnTitle}</Text>
                    <Text style={styles.settingsText}>{language.resetPasswordBtnInfo}</Text>
                </View>
            </TouchableOpacity>

            {/*<TouchableOpacity onPress={showPinModal}>*/}
            {/*    <View style={[styles.settingTabs, styles.shadowProp]}>*/}
            {/*        <Image source={require('../../assets/pin.png')} style={styles.iconSet} />*/}
            {/*        <View style={styles.textView}>*/}
            {/*            <Text style={styles.nameText}>PIN код</Text>*/}
            {/*            <Text style={styles.settingsText}>Сменить PIN код входа в приложение</Text>*/}
            {/*        </View>*/}
            {/*    </View>*/}
            {/*</TouchableOpacity>*/}

            <KeyboardAvoidingView>
                <Modal transparent={true} visible={passwordModalVisible} animationType="slide">
                    <TouchableWithoutFeedback onPress={hidePasswordModal}>
                        <View style={styles.overlay}>
                            {/*/!*<Animated.ScrollView*!/*/}
                            {/*    style={[*/}
                            {/*        styles.modal,*/}
                            {/*        {*/}
                            {/*            opacity: fadeAnim,*/}
                            {/*            // transform: [*/}
                            {/*            //     {*/}
                            {/*            //         translateY: new Animated.Value(300).interpolate({*/}
                            {/*            //             inputRange: [0, 1],*/}
                            {/*            //             outputRange: [300, 0],*/}
                            {/*            //         }),*/}
                            {/*            //     },*/}
                            {/*            // ],*/}
                            {/*        },*/}
                            {/*    ]}*/}
                            {/*>*/}
                            <View style={styles.inner}>
                                <View style={styles.changePassword}>
                                    <Text style={styles.changePasswordMainTitleText}>{language.resetPasswordTitle}</Text>

                                    <View style={styles.inputGroup}>
                                        <Text style={styles.changePasswordInfoText}>{language.resetPasswordOldPassInfo}</Text>

                                        <TextInput
                                            placeholderTextColor={iconColors}
                                            style={[styles.input, {color: iconColors}]}
                                            keyboardType={'default'} placeholder={language.resetPasswordPlaceHolder}
                                            secureTextEntry={true}
                                            password={true}
                                        />
                                    </View>

                                    <View style={styles.inputGroup}>
                                        <Text style={styles.changePasswordInfoText}>{language.resetPasswordNewPassInfo}</Text>

                                        <TextInput
                                            placeholderTextColor={iconColors}
                                            style={[styles.input, {color: iconColors}]}
                                            keyboardType={'default'} placeholder={language.resetPasswordPlaceHolder}
                                            secureTextEntry={true}
                                            password={true}
                                        />
                                    </View>

                                    <View style={styles.inputGroup}>
                                        <Text style={styles.changePasswordInfoText}>{language.resetPasswordrepeatnfo}</Text>

                                        <TextInput
                                            placeholderTextColor={iconColors}
                                            style={[styles.input, {color: iconColors}]}
                                            keyboardType={'default'} placeholder={language.resetPasswordPlaceHolder}
                                            secureTextEntry={true}
                                            password={true}
                                        />
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
                                {/*</Animated.ScrollView>*/}
                            </View>
                        </View>

                    </TouchableWithoutFeedback>
                </Modal>
            </KeyboardAvoidingView>
        </View>
    );
}
