import {View, Text, TouchableOpacity} from "react-native";
import {stylesLite} from "./infoStyles";
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {selectIsDarkTheme} from "../../redux/slieces/themeSlice";
import {stylesDark} from "./infoStylesDark";
import {ICONCOlORS} from "../../constants/colors";
import {selectLanguage, selectLanguages} from "../../redux/slieces/languageSlice";


export default function InfoScreen() {
    const isDarkTheme = useSelector(selectIsDarkTheme);
    const languages = useSelector(selectLanguages);
    const selectedLanguage = useSelector(selectLanguage);
    const language = languages[selectedLanguage]
    let styles = isDarkTheme ? stylesDark : stylesLite

    let iconColors = isDarkTheme ? ICONCOlORS.dark : ICONCOlORS.lite

    const navigation = useNavigation();
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


            <View style={styles.title}><Text style={styles.profileText}>{language.infoTitle}</Text></View>

            <Text style = {styles.infoText}>{language.infoTitleText}</Text>
        </View>
    )
}
