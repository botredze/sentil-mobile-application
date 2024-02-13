import {
    ScrollView,
    Switch,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {selectIsDarkTheme, toggleTheme} from "../../redux/slieces/themeSlice";
import {ICONCOlORS} from "../../constants/colors";
import {stylesDark} from "./preferenceStyleDark";
import {stylesLite} from "./preferenceStyles";
import {Picker} from "@react-native-picker/picker";
import {isEnabled} from "react-native/Libraries/Performance/Systrace";
import {changeLanguage, selectLanguage, selectLanguages} from "../../redux/slieces/languageSlice";

export default function PreferenceScreen() {
    const dispatch = useDispatch()
    const [selectedValue, setSelectedValue] = useState('');
    //const [isEnabled, setIsEnabled] = useState(false);
    const [loginPinCode, setLoginPinCode] = useState(false)
    const [sendEmail, setSendEmail] = useState(false)
    const isDarkTheme = useSelector(selectIsDarkTheme);
    let iconColors = isDarkTheme ? ICONCOlORS.dark : ICONCOlORS.lite
    let styles = isDarkTheme ? stylesDark : stylesLite


    const [pinModalVisible, setPinModalVisible] = useState(false);

    const toggleSwitcThem = () => dispatch(toggleTheme(!isDarkTheme));

    const toggleSwitchEmail =  () => setSendEmail(previousState => !previousState)
    const toggleSwitchPinCodeEnabled= ()=> setLoginPinCode(previousState => !previousState)


    //   const showPasswordModal = () => setPasswordModalVisible(true);
    // const hidePasswordModal = () => setPasswordModalVisible(false);

    const showPinModal = () => setPinModalVisible(true);
    const hidePinModal = () => setPinModalVisible(false);

    const navigation = useNavigation();
    const languages = useSelector(selectLanguages);
    const selectedLanguage = useSelector(selectLanguage);
    const language = languages[selectedLanguage]

    const changeLanguageHandler = (newLanguage) => {
        dispatch(changeLanguage(newLanguage));
        setSelectedValue(newLanguage)
    };
    console.log(selectedValue)

    return (
        <ScrollView style={styles.scrollViewContainer}>
            <View style={styles.container}>
                <View style={styles.nav}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name='arrow-back' size={30} color={iconColors}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.title}><Text style={styles.profileText}>{language.settingTitle}</Text></View>

                <View style={styles.themeTitle}><Text style={styles.themeTitleText}>{language.selectTheme}</Text></View>
                <View style={styles.themeContainer}>
                    <Text style={styles.settingsText}>{language.useDarkTheme}</Text>
                    <Switch
                        trackColor={{false: '#767577', true: '#81b0ff'}}
                        thumbColor={isDarkTheme ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitcThem}
                        value={isDarkTheme}
                        style={{ transform:[{ scaleX: .9 }, { scaleY: .9}] }}
                    />

                </View>


                <View style={styles.themeTitle}><Text style={styles.themeTitleText}>{language.selectSystemLanguage}</Text></View>

                <View style={styles.themeContainer}>

                    <Picker
                        selectedValue={selectedValue}
                        style={styles.inputAddressSelector}
                        onValueChange={changeLanguageHandler}
                        mode={'dropdown'}
                        dropdownIconColor={iconColors}
                    >
                        <Picker.Item label="Выберите язык" value="0"/>
                        <Picker.Item label="Кыргызский" value="kg"/>
                        <Picker.Item label="Русский" value="ru"/>
                        <Picker.Item label="Английский" value="en"/>
                    </Picker>
                </View>

                <View style={styles.themeTitle}><Text style={styles.themeTitleText}>{language.notificationEmail}</Text></View>
                <View style={styles.themeContainer}>

                    <Text style={styles.settingsText}>{language.iWantNotificationOnEmail}</Text>

                    <Switch
                        trackColor={{false: '#767577', true: '#81b0ff'}}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitchEmail}
                        value={sendEmail}
                        style={{ transform:[{ scaleX: .9 }, { scaleY: .9},] }}
                    />

                </View>


                {/*<View style={styles.themeTitle}><Text style={styles.themeTitleText}>Входить используя PIN</Text></View>*/}
                {/*<View style={styles.themeContainer}>*/}

                {/*    <Switch*/}
                {/*        trackColor={{false: '#767577', true: '#81b0ff'}}*/}
                {/*        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}*/}
                {/*        ios_backgroundColor="#3e3e3e"*/}
                {/*        onValueChange={toggleSwitchPinCodeEnabled}*/}
                {/*        value={loginPinCode}*/}
                {/*        style={{ transform:[{ scaleX: .9 }, { scaleY: .9}] }}*/}
                {/*    />*/}

                {/*    <Text style={styles.settingsText}>Входить приложение используя PIN код</Text>*/}
                {/*</View>*/}

            </View>
        </ScrollView>
    )
}
