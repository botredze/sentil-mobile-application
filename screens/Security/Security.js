import {styles, stylesLite} from "./securityStyle";
import {Animated, Image, Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {selectIsDarkTheme} from "../../redux/slieces/themeSlice";
import {ICONCOlORS} from "../../constants/colors";
import {stylesDark} from "./securityStyleDark";


export default function Security() {
    const [passwordModalVisible, setPasswordModalVisible] = useState(false);
    const [pinModalVisible, setPinModalVisible] = useState(false);

    const isDarkTheme = useSelector(selectIsDarkTheme);
    let iconColors = isDarkTheme ? ICONCOlORS.dark : ICONCOlORS.lite
    let styles = isDarkTheme ? stylesDark : stylesLite

    const showPasswordModal = () => setPasswordModalVisible(true);
    const hidePasswordModal = () => setPasswordModalVisible(false);

    const showPinModal = () => setPinModalVisible(true);
    const hidePinModal = () => setPinModalVisible(false);

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


            <View style={styles.title}><Text style={styles.profileText}> Смена пароля </Text></View>

            <TouchableOpacity onPress={showPasswordModal}>
                <View style={[styles.settingTabs, styles.shadowProp]}>
                    <Image source={require('../../assets/password.png')} style={styles.iconSet} />
                    <View style={styles.textView}>
                        <Text style={styles.nameText}>Пароль</Text>
                        <Text style={styles.settingsText}>Сменить пароль аккаунта</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={showPinModal}>
                <View style={[styles.settingTabs, styles.shadowProp]}>
                    <Image source={require('../../assets/pin.png')} style={styles.iconSet} />
                    <View style={styles.textView}>
                        <Text style={styles.nameText}>PIN код</Text>
                        <Text style={styles.settingsText}>Сменить PIN код входа в приложение</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <Modal transparent={true} visible={passwordModalVisible} animationType="slide">
                <TouchableWithoutFeedback onPress={hidePasswordModal}>
                    <View style={styles.overlay}>
                        <Animated.View
                            style={[
                                styles.modal,
                                {
                                    transform: [
                                        {
                                            translateY: new Animated.Value(300).interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [300, 0],
                                            }),
                                        },
                                    ],
                                },
                            ]}
                        >
                            <View style={{ backgroundColor: 'blue' }}>
                                <Text>;slkfsdlfjlsdjlfsjdlfjlsjdflsdjfsldnfjslvkdfjkv</Text>
                            </View>
                        </Animated.View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>


            <Modal visible={pinModalVisible} animationType="slide">
                <TouchableWithoutFeedback onPress={hidePinModal}>
                    <View style={styles.overlay}>
                        <Animated.View
                            style={[
                                styles.modal,
                                {
                                    transform: [
                                        {
                                            translateY: new Animated.Value(300).interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [300, 0],
                                            }),
                                        },
                                    ],
                                },
                            ]}
                        >
                            <Text>Модальное окно для смены PIN кода</Text>
                        </Animated.View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
}