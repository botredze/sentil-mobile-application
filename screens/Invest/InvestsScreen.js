import {Image, Platform, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {investStyleLite, styles} from "./investsStyles";
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {selectIsDarkTheme} from "../../redux/slieces/themeSlice";
import {ICONCOlORS} from "../../constants/colors";
import {investStyleDark} from "./inversStylesDark";
import {selectLanguage, selectLanguages} from "../../redux/slieces/languageSlice";

export default function InvestsScreen() {
    const navigation = useNavigation();
    const isDarkTheme = useSelector(selectIsDarkTheme);

    let styles = isDarkTheme ? investStyleDark : investStyleLite
    let shadowProp = Platform.OS === 'ios' ? styles.shadowProp : styles.elevation
    let iconColors = isDarkTheme ? ICONCOlORS.dark : ICONCOlORS.lite
    const goToBirgaStakan = () => {
        navigation.navigate('BirgStakan');
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
            </View>

            <View style={styles.title}><Text style={styles.profileText}>{language.investTitle}</Text></View>

            <View style={styles.sortButtonGroup}>

                <TouchableOpacity
                    style={[styles.sortBtn,  shadowProp]}>
                    <Text style={styles.buttonText}>{language.stockBtn}</Text><Text style={styles.countText}>[10]</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.sortBtn,  shadowProp]}>
                    <Text style={styles.buttonText}>{language.funds}</Text>
                    <Text style={styles.countText}>[10]</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.sortBtn,  shadowProp]}>
                    <Text style={styles.buttonText}>{language.bonds}</Text>
                    <Text style={styles.countText}>[10]</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.tableContainer}>
                <View style={[styles.populerBox, shadowProp]}>
                    <View style={styles.populerColumn}>

                        <TouchableOpacity
                            style={[styles.populerItem, shadowProp]}
                            onPress = {goToBirgaStakan}
                        >
                            <Image
                                source={require('../../assets/yandex.png')} // Укажите путь к вашей фотографии
                                style={styles.backgroundImage}
                            />

                            <View >
                                <Text style={styles.popularTitleText}>Яндекс</Text>
                                <Text style={styles.prosentTextUp}>0.15%</Text>
                            </View>
                            <TouchableOpacity style={styles.ablicationSumm}>
                                <Text style={styles.summText}>275.6 сом</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.populerItem, shadowProp]}>
                            <Image
                                source={require('../../assets/visa.svg')} // Укажите путь к вашей фотографии
                                style={styles.backgroundImage}
                            />
                            <View>
                                <Text style={styles.popularTitleText}>Элемент 2</Text>
                                <Text style={styles.prosentTextDown}>-0.15%</Text>
                            </View>
                            <TouchableOpacity style={styles.ablicationSumm}>
                                <Text style={styles.summText}>275.6 сом</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.populerItem, shadowProp]}>
                            <Image
                                source={require('../../assets/mastercard.svg')} // Укажите путь к вашей фотографии
                                style={styles.backgroundImage}
                            />
                            <View>
                                <Text style={styles.popularTitleText}>Элемент 5</Text>
                                <Text style={styles.prosentTextDown}>-0.15%</Text>
                            </View>
                            <TouchableOpacity style={styles.ablicationSumm}>
                                <Text style={styles.summText}>275.6 сом</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.populerItem, shadowProp]}>
                            <Image
                                source={require('../../assets/mastercard.svg')} // Укажите путь к вашей фотографии
                                style={styles.backgroundImage}
                            />
                            <View>
                                <Text style={styles.popularTitleText}>Элемент 5</Text>
                                <Text style={styles.prosentTextDown}>-0.15%</Text>
                            </View>
                            <TouchableOpacity style={styles.ablicationSumm}>
                                <Text style={styles.summText}>275.6 сом</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.populerItem, shadowProp]}>
                            <Image
                                source={require('../../assets/mastercard.svg')} // Укажите путь к вашей фотографии
                                style={styles.backgroundImage}
                            />
                            <View>
                                <Text style={styles.popularTitleText}>Элемент 5</Text>
                                <Text style={styles.prosentTextDown}>-0.15%</Text>
                            </View>
                            <TouchableOpacity style={styles.ablicationSumm}>
                                <Text style={styles.summText}>275.6 сом</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.populerItem, shadowProp]}>
                            <Image
                                source={require('../../assets/mastercard.svg')} // Укажите путь к вашей фотографии
                                style={styles.backgroundImage}
                            />
                            <View>
                                <Text style={styles.popularTitleText}>Элемент 5</Text>
                                <Text style={styles.prosentTextDown}>-0.15%</Text>
                            </View>
                            <TouchableOpacity style={styles.ablicationSumm}>
                                <Text style={styles.summText}>275.6 сом</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.populerColumn}>

                        <TouchableOpacity style={[styles.populerItem, shadowProp]}>
                            <Image
                                source={require('../../assets/yandex.png')} // Укажите путь к вашей фотографии
                                style={styles.backgroundImage}
                            />

                            <View >
                                <Text style={styles.popularTitleText}>Яндекс</Text>
                                <Text style={styles.prosentTextUp}>0.15%</Text>
                            </View>
                            <TouchableOpacity style={styles.ablicationSumm}>
                                <Text style={styles.summText}>275.6 сом</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.populerItem, shadowProp]}>
                            <Image
                                source={require('../../assets/yandex.png')} // Укажите путь к вашей фотографии
                                style={styles.backgroundImage}
                            />

                            <View >
                                <Text style={styles.popularTitleText}>Яндекс</Text>
                                <Text style={styles.prosentTextUp}>0.15%</Text>
                            </View>
                            <TouchableOpacity style={styles.ablicationSumm}>
                                <Text style={styles.summText}>275.6 сом</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.populerItem, shadowProp]}>
                            <Image
                                source={require('../../assets/yandex.png')} // Укажите путь к вашей фотографии
                                style={styles.backgroundImage}
                            />

                            <View >
                                <Text style={styles.popularTitleText}>Яндекс</Text>
                                <Text style={styles.prosentTextUp}>0.15%</Text>
                            </View>
                            <TouchableOpacity style={styles.ablicationSumm}>
                                <Text style={styles.summText}>275.6 сом</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.populerItem, shadowProp]}>

                            <Image
                                source={require('../../assets/visa.svg')} // Укажите путь к вашей фотографии
                                style={styles.backgroundImage}
                            />
                            <View>
                                <Text style={styles.popularTitleText}>Visa</Text>
                                <Text style={styles.prosentTextDown}>-0.15%</Text>
                            </View>
                            <TouchableOpacity style={styles.ablicationSumm}>
                                <Text style={styles.summText}>275.6 сом</Text>
                            </TouchableOpacity>

                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.populerItem, shadowProp]}>
                            <Image
                                source={require('../../assets/mastercard.svg')} // Укажите путь к вашей фотографии
                                style={styles.backgroundImage}
                            />
                            <View>
                                <Text style={styles.popularTitleText}>Элемент 4</Text>
                                <Text style={styles.prosentTextUp}>0.15%</Text>
                            </View>
                            <TouchableOpacity style={styles.ablicationSumm}>
                                <Text style={styles.summText}>275.6 сом</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.populerItem, shadowProp]}>
                            <Image
                                source={require('../../assets/visa.svg')} // Укажите путь к вашей фотографии
                                style={styles.backgroundImage}
                            />
                            <View>
                                <Text style={styles.popularTitleText}>Элемент 6</Text>
                                <Text style={styles.prosentTextUp}>0.15%</Text>
                            </View>
                            <TouchableOpacity style={styles.ablicationSumm}>
                                <Text style={styles.summText}>275.6 сом</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        </View>
    )
}
