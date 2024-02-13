import {Platform, Text, TouchableOpacity, View} from "react-native";
import {stylesLite} from "./birgaStakanStyles";
import {AntDesign, Ionicons} from "@expo/vector-icons";
import { LineChart } from 'react-native-chart-kit';
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {selectIsDarkTheme} from "../../redux/slieces/themeSlice";
import {FONT_COLORS, CHARTCOLORS, ICONCOlORS, chartColorsGlobal} from "../../constants/colors";
import {stylesDark} from "./birgaStakanStylesDark";
import {selectLanguage, selectLanguages} from "../../redux/slieces/languageSlice";

export default function BirgStakan() {
    const navigation = useNavigation();
    const isDarkTheme = useSelector(selectIsDarkTheme);
    let iconColors = isDarkTheme ? ICONCOlORS.dark : ICONCOlORS.lite
    let styles = isDarkTheme ? stylesDark : stylesLite
    let shadowProp = Platform.OS === 'ios' ? styles.shadowProp : styles.elevation
    let chartColors = isDarkTheme ? CHARTCOLORS.dark : CHARTCOLORS.lite
    const languages = useSelector(selectLanguages);
    const selectedLanguage = useSelector(selectLanguage);
    const language = languages[selectedLanguage]

    let chartLineColors = isDarkTheme ? chartColorsGlobal.dark : chartColorsGlobal.lite
    const data = {
        labels: ['2024-02-03', '2024-02-06', '2024-02-04 '],
        datasets: [
            {
                data: [50, 45, 35,],
                strokeWidth: 4
            },
        ],
    };


    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='arrow-back' size={30} color={iconColors}/>
                </TouchableOpacity>
            </View>

            <View style={styles.title}><Text style={styles.profileText}>ОАО КБ Кыргызстан</Text></View>


            <View style={styles.title}>
                <Text style={styles.titleText}>{language.finViewTitle}</Text>
            </View>

            <View style={[styles.finView, shadowProp]}>
                <View style={styles.tableRow}>
                    <View style={{width: '40%'}}>
                        <Text style={styles.tableHeader}>{language.dateTimeTableTitle}</Text>
                    </View>
                    <Text style={styles.tableHeader}>{language.countTableTitle}</Text>
                    <Text style={styles.tableHeader}>{language.priceTableTitle}</Text>
                    <Text style={styles.tableHeader}>{language.copasityTableTitle}</Text>
                </View>
                <View style={styles.tableRow}>
                    <View style={{width: '40%'}}>
                        <Text style={styles.tableCell}>2024-02-06 10:30</Text>
                    </View>
                    <Text style={styles.tableCell}>10</Text>
                    <Text style={styles.tableCell}>$50</Text>
                    <Text style={styles.tableCell}>500</Text>
                </View>
                <View style={styles.tableRow}>
                    <View style={{width: '40%'}}>
                        <Text style={styles.tableCell}>2024-02-06 11:00</Text>
                    </View>
                    <Text style={styles.tableCell}>15</Text>
                    <Text style={styles.tableCell}>$45</Text>
                    <Text style={styles.tableCell}>675</Text>
                </View>

                <View style={styles.tableRow}>
                    <View style={{width: '40%'}}>
                        <Text style={styles.tableCell}>2024-02-04 15:00</Text>
                    </View>
                    <Text style={styles.tableCell}>14</Text>
                    <Text style={styles.tableCell}>$35</Text>
                    <Text style={styles.tableCell}>854</Text>
                </View>

            </View>


            <View style={styles.grafixGroup}>
                <LineChart
                    data={data}
                    width={370}
                    height={170}
                    yAxisSuffix=" сом"
                    chartConfig={{
                        backgroundColor: chartColors,
                        backgroundGradientFrom: chartColors,
                        backgroundGradientTo: chartColors,
                        decimalPlaces: 0,
                        color: (opacity = 1) => `rgba(${chartLineColors} ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(${chartLineColors} ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                        propsForDots: {
                            r: '6',
                            strokeWidth: '2',
                            stroke: '#ffa726',
                        },
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                    }}
                />
            </View>


            <View style={styles.buySellButtonGroup}>
                <TouchableOpacity style={[styles.buyBtn, shadowProp]}>
                    <AntDesign name='arrowup' size={20} color='black'/>
                    <Text style={styles.replenishBtnText}>{language.buyBtn}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.sellOffBtn, shadowProp]}>
                    <AntDesign name='arrowdown' size={20} color='black'/>
                    <Text style={styles.takeOffBtnText}>{language.sellBtn}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
