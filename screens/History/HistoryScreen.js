import {View, Text, TouchableOpacity} from "react-native";
import { stylesLite} from "./historyStyles";
import {Ionicons, AntDesign} from "@expo/vector-icons";
import {DateTimePickerModal} from "react-native-modal-datetime-picker";
import {useEffect, useState} from "react";
import {startOfDay, endOfDay} from 'date-fns';
import moment from "moment";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {selectIsDarkTheme} from "../../redux/slieces/themeSlice";
import {stylesDark} from "./historyStylesDark";
import {ICONCOlORS} from "../../constants/colors";

export default function HistoryScreen() {
    const navigation = useNavigation();
    const [isStartDatePickerVisible, setStartDatePickerVisible] = useState(false);
    const [isEndDatePickerVisible, setEndDatePickerVisible] = useState(false);

    const defaultStartDate = startOfDay(new Date());
    const defaultEndDate = endOfDay(new Date());

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    useEffect(() => {
        // fetchData(startDate, endDate);
    }, [startDate, endDate]);

    useEffect(() => {
        setStartDate(new Date())
        setEndDate(new Date())
    }, [])


    const isDarkTheme = useSelector(selectIsDarkTheme);
    let styles = isDarkTheme ? stylesDark : stylesLite
    let iconColors = isDarkTheme ? ICONCOlORS.dark : ICONCOlORS.lite



    const handleStartDateConfirm = (date) => {
        setStartDate(date);
        setStartDatePickerVisible(false);
        // fetchData(date, endDate);
    };

    const handleEndDateConfirm = (date) => {
        setEndDate(date);
        setEndDatePickerVisible(false);
        //  fetchData(startDate, date);
    };

    const formatDate = (date) => {
        return moment(date).format("DD.MM.YYYY");
    };

    const formatDateView = (date) => {
        return moment(date).format("DD.MM.YYYY HH:SS");
    };

    const renderDateInputs = () => {
        return (
            <View style={styles.dateInputsContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.labelText}>От:</Text>
                    <TouchableOpacity
                        style={styles.dateInput}
                        onPress={() => setStartDatePickerVisible(true)}
                    >
                        <Text style={styles.dateText}>{formatDate(startDate)}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.labelText}>До:</Text>
                    <TouchableOpacity
                        style={styles.dateInput}
                        onPress={() => setEndDatePickerVisible(true)}
                    >
                        <Text style={styles.dateText}>{formatDate(endDate)}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='arrow-back' size={30} color= {iconColors} />
                </TouchableOpacity>

                {/*<TouchableOpacity style={{display: "flex", flexDirection: 'row', gap: 10}}>*/}
                {/*    <Text style={{lineHeight: 29, fontSize: 18}}>Выйти</Text>*/}
                {/*    <Ionicons name='power' size={30} color='red'/>*/}
                {/*</TouchableOpacity>*/}

            </View>

            <View style={styles.title}><Text style={styles.profileText}>История</Text></View>

            <View style={{alignSelf: 'center', display: 'flex', width: '95%'}}>
                {renderDateInputs()}
                <DateTimePickerModal
                    isVisible={isStartDatePickerVisible}
                    mode="date"
                    onConfirm={handleStartDateConfirm}
                    onCancel={() => setStartDatePickerVisible(false)}
                />
                <DateTimePickerModal
                    isVisible={isEndDatePickerVisible}
                    mode="date"
                    onConfirm={handleEndDateConfirm}
                    onCancel={() => setEndDatePickerVisible(false)}
                />
            </View>

            <View style={styles.historyContainer}>
                <View style={styles.history}>
                    <View style={styles.themeView}>
                        <View style= {styles.titleView}>
                        <AntDesign name="arrowup" size={20} color="green"/>
                        <Text style={styles.historyTitleText}>Покупка</Text>
                        </View>
                        <Text style={styles.dateText}>{formatDateView(startDate)}</Text>
                    </View>
                    <View style={styles.moreInfoTitleView}>
                        <View style={{width: '65%'}}><Text style={styles.infoText}>Покупка "ОАО КБ Кыргызстан" на сумму 10000 сом</Text></View>
                        <View style={styles.operationStatus}><Text style={styles.statusText}>Успешно</Text></View>
                    </View>
                </View>

                <View style={styles.line}></View>

                <View style={styles.history}>
                    <View style={styles.themeView}>
                        <View style= {styles.titleView}>
                            <AntDesign name="arrowdown" size={20} color="red"/>
                            <Text style={styles.historyTitleText}>Продажа</Text>
                        </View>
                        <Text style={styles.dateText}>{formatDateView(startDate)}</Text>

                    </View>

                    <View style={styles.moreInfoTitleView}>
                        <View style={{width: '65%'}}><Text style={styles.infoText}>Продажа "ОАО Яндекс" на сумму 2400 сом</Text></View>
                        <View style={styles.operationStatusReject}><Text
                            style={styles.statusText}>Отказано</Text></View>
                    </View>
                </View>
                <View style={styles.line}></View>
            </View>
        </View>
    )

}
