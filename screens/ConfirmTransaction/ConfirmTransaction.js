import {Image, Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {BUTTONCOLORS, COLORS, FONT_COLORS, ICONCOlORS} from "../../constants/colors";
import {Ionicons} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {selectIsDarkTheme} from "../../redux/slieces/themeSlice";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {incrementStep} from "../../redux/slieces/depositSilce";
import {stylesDark} from "./confirmTransactionStyleDark";
import {stylesLite} from "./confirmTransactionStyle";


const ConfirmTransaction = () => {
    const [modalVisible, setModalVisible] = useState(false); // Состояние для отслеживания видимости модального окна

    const handleConfirm = () => {
        setModalVisible(true);
    };

    const isDarkTheme = useSelector(selectIsDarkTheme);
    const styles = isDarkTheme ? stylesDark : stylesLite
    let iconColors = isDarkTheme ? ICONCOlORS.dark : ICONCOlORS.lite
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const cancelDeposit = () => {
        dispatch(incrementStep(1))
        navigation.navigate('HomeTabs')
    };

    const confirmTransactionFinal = () => {
        setModalVisible(false)
        dispatch(incrementStep(1))
        navigation.navigate('HomeTabs')
    };
    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='arrow-back' size={30} color={iconColors}/>
                </TouchableOpacity>

                <Text style={styles.stepText}> 2/2</Text>
                <TouchableOpacity style={styles.cancelBtn}
                                  onPress={cancelDeposit}>
                    <Text style={styles.cancelBtnText}>Отменить</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.title}><Text style={styles.profileText}>Подтверждение транзакции</Text></View>



            <View style={styles.depositView}>
                <Text style={styles.summDepositText}>Сумма пополнения</Text>

                <Text style={styles.summDeposit}>60 000 сом </Text>
            </View>
            <View style={styles.chekView}>
                <View style={styles.chekDataView}>
                    <Text style={styles.dataName}>Номер карты</Text>
                    <Text style={styles.dataValue}>4169 5853 0000 0000</Text>
                </View>
                <View style={styles.chekDataView}>
                    <Text style={styles.dataName}>Имя владельца карты</Text>
                    <Text style={styles.dataValue}>Алиев Баатыр</Text>
                </View>
                <View style={styles.chekDataView}>
                    <Text style={styles.dataName}>Сумма пополнения</Text>
                    <Text style={styles.dataValue}>60 000 сом</Text>
                </View>
                <View style={styles.chekDataView}>
                    <Text style={styles.dataName}>Сумма комиссии</Text>
                    <Text style={styles.dataValue}>270 сом</Text>
                </View>
                <View style={styles.chekDataView}>
                    <Text style={styles.dataName}>Номер карты</Text>
                    <Text style={styles.dataValue}>59 730 сом</Text>
                </View>
            </View>


            <View style={styles.continueBtnView}>
                <TouchableOpacity style={styles.nextButton} onPress={handleConfirm}>
                    <Text style={styles.nextButtonText}>Подтвердить</Text>
                </TouchableOpacity>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false); // Закрываем модальное окно при запросе на закрытие
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.darkOverlay} />
                    <View style={styles.modalView}>

                        <Image source={require('../../assets/check.png')} style={styles.successImage}/>
                        <Text style={styles.modalText}>Успешная транзакция!</Text>

                        <TouchableOpacity
                            style={{ ...styles.openButton, }}
                            onPress={confirmTransactionFinal}
                        >
                            <Text style={styles.textStyle}>Готово</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}


export default ConfirmTransaction