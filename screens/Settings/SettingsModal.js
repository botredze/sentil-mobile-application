import {Text, TouchableOpacity, View, Image, Platform} from "react-native";
import {styles} from "./settingsStyles";
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {selectIsDarkTheme} from "../../redux/slieces/themeSlice";
import {ICONCOlORS} from "../../constants/colors";
import {stylesDark} from "./settingsStyleDark";
import {stylesLite} from "./settingsStyles";


export default function Settings() {

    const navigation = useNavigation();
    const isDarkTheme = useSelector(selectIsDarkTheme);
    let iconColors = isDarkTheme ? ICONCOlORS.dark : ICONCOlORS.lite
    let styles = isDarkTheme ? stylesDark : stylesLite

    const logoutHandler = () => {
        navigation.replace('login')
    };

    const goToMyProfile = () => {
        navigation.navigate('Profile')
    };

    let shadowProp = Platform.OS === 'ios' ? styles.shadowProp : styles.elevation

    const goToSecureSettings = () => {
        navigation.navigate('Security')
    };


    const goToPreference = () => {
        navigation.navigate('PreferenceScreen')
    };
    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='arrow-back' size={30} color={iconColors}/>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{display: "flex", flexDirection: 'row', gap:10}}
                    onPress={logoutHandler}
                >
                    <Text style={styles.logoutText}>Выйти</Text>
                   {/* <Ionicons name='power' size={30} color='red'/>*/}
                </TouchableOpacity>
            </View>

            

            <View style={[styles.profileView]}>
                <View>
                <Image source={require('../../assets/Profile.png')} style={styles.profilePhoto}/>
                </View>
                <View style={styles.textView}>
                    <Text style={styles.nameTextMain}>Здравствуйте Баатыр</Text>
                    <Text style={styles.settingsTextMain}>Управление профилем</Text>
                </View>
            </View>

            <TouchableOpacity
                style={[styles.settingTabs, shadowProp]}
                onPress={goToMyProfile}
            >
                <Image source={require('../../assets/user.png')} style={styles.iconSet}/>
                <View style={styles.textView}>
                    <Text style={styles.nameText}>Мой профиль</Text>
                    <Text style={styles.settingsText}>Ваш профиль и персональные данные</Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity
                style={[styles.settingTabs, shadowProp]}
                onPress={goToSecureSettings}
            >
                <Image source={require('../../assets/secyrity.png')} style={styles.iconSet}/>
                <View style={styles.textView}>
                    <Text style={styles.nameText}>Безопасность</Text>
                    <Text style={styles.settingsText}>Управление доступом к профилю</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.settingTabs, shadowProp]}
                onPress={goToPreference}
            >
                <Image source={require('../../assets/setting.png')} style={styles.iconSet}/>
                <View style={styles.textView}>
                    <Text style={styles.nameText}>Предпочтения</Text>
                    <Text style={styles.settingsText}>Настройки и конфигурация</Text>
                </View>
            </TouchableOpacity>
        </View>

    )
}