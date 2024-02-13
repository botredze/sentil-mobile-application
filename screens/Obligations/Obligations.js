import {TouchableOpacity, View, Text, Image, Platform} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {selectIsDarkTheme} from "../../redux/slieces/themeSlice";
import {ICONCOlORS} from "../../constants/colors";
import {stylesDark} from "./obligationsStylesDark";
import {stylesLite} from "./obligationsStyles";

export default function Obligations() {

    const isDarkTheme = useSelector(selectIsDarkTheme);

    let styles = isDarkTheme ? stylesDark : stylesLite
    let shadowProp = Platform.OS === 'ios' ? styles.shadowProp : styles.elevation
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

            <View style={styles.title}><Text style={styles.profileText}>Мой портфель </Text></View>

            {/*<View style={styles.sortButtonGroup}>*/}

            {/*    <TouchableOpacity style={styles.sortBtn}>*/}
            {/*        <Text style={styles.buttonText}>Акции</Text><Text style={styles.countText}>[10]</Text>*/}
            {/*    </TouchableOpacity>*/}

            {/*    <TouchableOpacity style={styles.sortBtn}>*/}
            {/*        <Text style={styles.buttonText}>Фонды</Text>*/}
            {/*        <Text style={styles.countText}>[10]</Text>*/}
            {/*    </TouchableOpacity>*/}

            {/*    <TouchableOpacity style={styles.sortBtnObl}>*/}
            {/*        <Text style={styles.buttonText}>Облигации</Text>*/}
            {/*        <Text style={styles.countText}>[10]</Text>*/}
            {/*    </TouchableOpacity>*/}
            {/*</View>*/}

            <View style={{display: 'flex', gap: 15}}>
                <View style={[styles.reestrMainContainer, shadowProp]}>
                    <TouchableOpacity style={[styles.reestrContent, shadowProp]}>
                        <Image
                            source={require('../../assets/yandex.png')}
                            style={styles.image}
                        />
                        <View style={{width: "83%"}}>
                            <Text style={styles.nameTextTitle}>ОАО КБ Кыргызстан</Text>
                            <View style={styles.summViewInfo}>
                                <View style={styles.infoContainer}>
                                    <Text style={styles.summInfoText}>122</Text>
                                    <Text style={styles.infoText}>штук по</Text>
                                    <Text style={styles.summInfoText}>200</Text>
                                    <Text style={styles.infoText}>сом</Text>
                                </View>

                                <View style={styles.summView}>
                                    <Text style={styles.summInfoTextCard}>2400</Text>
                                    <Text style={styles.infoTextCard}>сом</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={[styles.reestrMainContainer, shadowProp]}>
                    <TouchableOpacity style={[styles.reestrContent, shadowProp]}>
                        <Image
                            source={require('../../assets/yandex.png')}
                            style={styles.image}
                        />
                        <View style={{width: "83%"}}>
                            <Text style={styles.nameTextTitle}>ОАО КБ Кыргызстан</Text>
                            <View style={styles.summViewInfo}>
                                <View style={styles.infoContainer}>
                                    <Text style={styles.summInfoText}>122</Text>
                                    <Text style={styles.infoText}>штук по</Text>
                                    <Text style={styles.summInfoText}>200</Text>
                                    <Text style={styles.infoText}>сом</Text>
                                </View>

                                <View style={styles.summView}>
                                    <Text style={styles.summInfoTextCard}>2400</Text>
                                    <Text style={styles.infoTextCard}>сом</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[styles.reestrMainContainer, shadowProp]}>
                    <TouchableOpacity style={[styles.reestrContent, shadowProp]}>
                        <Image
                            source={require('../../assets/yandex.png')}
                            style={styles.image}
                        />
                        <View style={{width: "83%"}}>
                            <Text style={styles.nameTextTitle}>ОАО КБ Кыргызстан</Text>
                            <View style={styles.summViewInfo}>
                                <View style={styles.infoContainer}>
                                    <Text style={styles.summInfoText}>122</Text>
                                    <Text style={styles.infoText}>штук по</Text>
                                    <Text style={styles.summInfoText}>200</Text>
                                    <Text style={styles.infoText}>сом</Text>
                                </View>

                                <View style={styles.summView}>
                                    <Text style={styles.summInfoTextCard}>2400</Text>
                                    <Text style={styles.infoTextCard}>сом</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}