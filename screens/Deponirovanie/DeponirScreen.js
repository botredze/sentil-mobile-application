import {View, Text, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {selectIsDarkTheme} from "../../redux/slieces/themeSlice";
import {stylesDark} from "./deponirStylesDark";
import {stylesLite} from "./deponirStyles";
import {ICONCOlORS} from "../../constants/colors";



export default function DeponirScreen() {
    const isDarkTheme = useSelector(selectIsDarkTheme);
    
    let styles = isDarkTheme ? stylesDark : stylesLite
    let iconColors = isDarkTheme ? ICONCOlORS.dark : ICONCOlORS.lite

    const navigation = useNavigation();
    return(
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

            <View style={styles.title}><Text style={styles.profileText}>Депонировать</Text></View>


            <Text style={styles.infoText}> ИНФОРМАЦИЯ ДОПОЛНЯЕТСЯ !!</Text>
        </View>
    )

}
