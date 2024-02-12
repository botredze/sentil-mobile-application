import {Text, TouchableOpacity, View, StyleSheet, TextInput, Image} from "react-native";
import { ICONCOlORS} from "../../constants/colors";
import {Ionicons} from "@expo/vector-icons";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectIsDarkTheme} from "../../redux/slieces/themeSlice";
import {useNavigation} from "@react-navigation/native";
import {incrementStep} from "../../redux/slieces/depositSilce";
import {stylesDark} from "./styles/amountStylesDark";
import {stylesLite} from "./styles/amountSelectStyles";

const AmountSelect = () => {
    const navigation = useNavigation()
    const isDarkTheme = useSelector(selectIsDarkTheme);
    let iconColors = isDarkTheme ? ICONCOlORS.dark : ICONCOlORS.lite

    const styles = isDarkTheme ? stylesDark : stylesLite
    const dispatch = useDispatch()

    const confirmDeposit = () => {
        dispatch(incrementStep(2))
    };
    const cancelDeposit = () => {
        dispatch(incrementStep(1))
        navigation.navigate('HomeTabs')
    };


    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='arrow-back' size={30} color={iconColors}/>
                </TouchableOpacity>
                <Text style={styles.stepText}> 1/2</Text>
                <TouchableOpacity style={styles.cancelBtn}
                onPress={cancelDeposit}
                >
                    <Text style={styles.cancelBtnText}>Отменить</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.title}><Text style={styles.profileText}>Пополнить</Text></View>

            <View style={styles.amoutSelectView}>
                <Text style={styles.amountInfoText}>Введите сумму для пополнения</Text>
                <View style={styles.inputGroupView}>
                    <TextInput
                        placeholder={'Введите сумму'}
                        keyboardType={'numeric'}
                        placeholderTextColor={iconColors}
                        style={[styles.input, {color: iconColors}]}
                        placeholderStyle={{ fontSize: 40 }}
                    />
                </View>
            </View>

            <View style={styles.cardControlView}>

                <TouchableOpacity style={styles.selectCardBtn}>
                    <Text style={styles.selectCardBtnText}>Выбрать карту</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addCardBtn}>
                    <Text style={styles.addCardPlus}>+</Text>
                    <Text style={styles.addCartBtnText}> Добавить карту</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardView}>
                <Image source={require('../../assets/backGroundImage.png')} style={styles.cardBackGroudImage}/>
                <View style={styles.cardViewInner}>
                    <View style={styles.cardNameView}>
                        <Text style={styles.userCardName}>ALIEV BAATYR</Text>
                        <Text style={styles.bankName}>Optima BANK</Text>
                    </View>


                    <View style={styles.cardViewNumber}>
                        <Text style={styles.cardNumber}>****</Text>
                        <Text style={styles.cardNumber}>****</Text>
                        <Text style={styles.cardNumber}>****</Text>
                        <Text style={styles.cardNumberText}>41569</Text>
                    </View>

                    <View style={styles.securyData}>
                        <View style={styles.secureCodeView}>
                            <Text style={styles.codeTextStylesTitle}>Защитный код</Text>
                            <Text style={styles.codeTextStyles}>089</Text>
                        </View>
                        <View style={styles.expTimeView}>
                            <Text style={styles.bankName}>Exp.09/26</Text>
                            <Image style={styles.cardTypeImage} source={require('../../assets/masterCard.png')}/>
                        </View>
                    </View>
                </View>
            </View>


            <View style={styles.continueBtnView}>
                <TouchableOpacity style={styles.nextButton}
                onPress={confirmDeposit}
                >
                    <Text style={styles.nextButtonText}>Продолжить</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default AmountSelect