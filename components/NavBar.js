import {Text, TouchableOpacity, View} from "react-native";
import {styles, stylesLite} from "../screens/Home/homePageStyles";
import {Feather, SimpleLineIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {selectIsDarkTheme} from "../redux/slieces/themeSlice";
import {stylesDark} from "../screens/Home/homePageStyleDark";
import {ICONCOlORS} from "../constants/colors";


export default function NavBar() {
    const navigation = useNavigation();
    const goToSettings = () => {
        navigation.navigate('Settings')
    };

    const isDarkTheme = useSelector(selectIsDarkTheme);

    let styles = isDarkTheme ? stylesDark : stylesLite
    let iconColors = isDarkTheme ? ICONCOlORS.dark : ICONCOlORS.lite

    return (

        <View style={styles.navBar}>
            <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 16}}>
                <TouchableOpacity style={styles.iconContainerLogout}>
                    <SimpleLineIcons name="user" size={35} color={iconColors}/>
                </TouchableOpacity>
                <Text style={styles.fioTitle}> Алиев Баатыр</Text>
            </View>
            <TouchableOpacity style={styles.iconContainerLogout}
                              onPress={goToSettings}
            >
                <Feather name="settings" size={35} color={iconColors}/>
            </TouchableOpacity>
        </View>

    )
}