import {ScrollView, Text, TouchableOpacity, View, Image, Platform} from "react-native";
import {stylesLite} from "./homePageStyles";
import NavBar from "../../components/NavBar";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {selectIsDarkTheme} from "../../redux/slieces/themeSlice";
import {stylesDark} from "./homePageStyleDark";
import {ICONCOlORS} from "../../constants/colors";
import {selectLanguage, selectLanguages} from "../../redux/slieces/languageSlice";

export default function HomeScreen() {
    const navigation = useNavigation();
    const isDarkTheme = useSelector(selectIsDarkTheme);

    let styles = isDarkTheme ? stylesDark : stylesLite

    let shadowProp = Platform.OS === 'ios' ? styles.shadowProp : styles.elevation

    let iconColors = isDarkTheme ? ICONCOlORS.dark : ICONCOlORS.dark
    const goToInvestList = () => {
        navigation.navigate('Invests');
    };

    const goToBirgaStakan = () => {
        navigation.navigate('BirgStakan');
    };

    const languages = useSelector(selectLanguages);
    const selectedLanguage = useSelector(selectLanguage);
    const language = languages[selectedLanguage]

    const depositMoney = () => {
        navigation.navigate('DepositScreen')
    };

    return (<View style={styles.container}>
        <NavBar/>
        <ScrollView>
            <View style={styles.balanceContainer}>
                <Image source={require('../../assets/backGroundImage.png')} style={styles.cardBackGroudImage}/>
                <View style={styles.balanceContainerInner}>
                    <View style={styles.pageTitleContainer}>
                        <Text style={styles.pageTitleText}>{language.brokerAccount}</Text>
                    </View>

                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 10,
                        paddingTop: 10
                    }}>
                        <Text style={styles.accountSumm}>2050</Text><Text style={styles.sommText}>СОМ</Text>
                    </View>

                    <View style={styles.buttonGroupContainer}>
                        <TouchableOpacity style={styles.replenishBtn}
                        >
                            {/*<FontAwesome name='dollar' size={20} color={iconColors}/>*/}
                            <Image
                                source={require('../../assets/money-recive.png')}
                                style={styles.moneyIcon}
                            />
                            <Text style={styles.replenishBtnText}>{language.replenish}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.takeOffBtn}>
                            <Image
                                source={require('../../assets/money-send.png')}
                                style={styles.moneyIcon}
                            />
                            {/*<FontAwesome name='money' size={20} color={iconColors}/>*/}
                            <Text style={styles.takeOffBtnText}>{language.withdraw}</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>

            <View style={[styles.investBtnContainer, shadowProp]}>
                <TouchableOpacity
                    style={styles.investBtn}
                    onPress={goToInvestList}
                >
                    <Text style={styles.investBtnText}>{language.investBtn}</Text>
                </TouchableOpacity>
            </View>


            <View style={[styles.populer, shadowProp]}>
                <View style={styles.populerTitle}><Text style={styles.populerTitleText}>{language.popelerTitle}</Text></View>
                <View style={styles.populerBox}>

                    <TouchableOpacity style={[styles.populerItem, shadowProp]}
                                      onPress={goToBirgaStakan}
                    >
                        <Image
                            source={require('../../assets/yandex.png')}
                            style={styles.backgroundImage}
                        />
                        <View>
                            <Text style={styles.popularTitleText}>Яндекс</Text>
                            <Text style={styles.prosentTextUp}>0.15%</Text>
                        </View>
                        <TouchableOpacity style={styles.ablicationSumm}>
                            <Text style={styles.summText}>275.6 сом</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.populerItem, shadowProp]}>
                        {/*<imagePath*/}
                        {/*    width={100}*/}
                        {/*    height={100}*/}
                        {/*/>*/}
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
            </View>
        </ScrollView>
    </View>)
}
