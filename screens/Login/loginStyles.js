import {Dimensions, StyleSheet} from "react-native";
import {BUTTONCOLORS, CARD_CONTAINER_COLORS, COLORS, FONT_COLORS} from "../../constants/colors";


export const liteStyles = StyleSheet.create({
    loginSreenParent: {
        position: "relative",
        flex: 1,
        backgroundColor: COLORS.mainBackgroundLite,
    },

    container: {
        backgroundColor: COLORS.mainBackgroundLite,
    },

    loginParentChild: {
        //height: '100%',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red'
    },
    image: {
        width: '100%',
        height: '100%'
    },

    logoContainer: {
        marginTop: 130,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        //backgroundColor:'red',
        width: 300,
        height: 120
    },

    input: {
        backgroundColor: COLORS.backgroundInputLite,
        width: '80%',
        height: 50,
        borderRadius: 15,
        borderColor: COLORS.borderColorLite,
        padding: 15,
        fontSize: 16
    },

    inputGroup: {
        display: "flex",
        alignSelf: "center",
        alignItems: "center",
        width: '100%',
        gap: 7,
        //backgroundColor: 'red'
    },

    loginButtonContainer: {
        marginTop: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        width: '100%'
    },


    dopButtonGroup: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center",
     //   backgroundColor: 'red',
        gap: 15,
        marginTop: 20
    },

    // footerLogo: {
    //     width: '100%',
    //     height: 60,
    //     position: 'absolute',
    //     bottom: 20,
    //     // left: '50%',
    //     // transform: [{ translateX: -Dimensions.get('window').width / 2 }],
    //     alignSelf: "center",
    //     alignItems: "center",
    //     gap: 5,
    // },
    footerLogo: {
        width: '100%',
        height: 60,
        marginBottom: 0, // Применяем отрицательный отступ
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        bottom: -150,
       // backgroundColor: 'red'
    },

    inputGroupContainer: {
        display: "flex",
        gap: 15,
        marginTop: 20,
        width: '100%',
    },
    titleText: {
        fontSize: 17,
        color: FONT_COLORS.Lite
    },

    loginBtn: {
        backgroundColor: CARD_CONTAINER_COLORS.balanceContanerColor,
        borderRadius: 15,
        height: 45,
        width: '65%',
        alignItems: "center",
    },
    loginText: {
        fontSize: 25,
        lineHeight: 45,
        fontWeight: "bold",
        color: FONT_COLORS.Dark
    },

    forgotBtn: {

    },

    forgotText: {
        fontSize: 16,
        color: FONT_COLORS.Lite
    },


    footerText: {
        fontSize: 15,
        color: FONT_COLORS.Lite
    },


    footerCompanyText: {
        fontSize: 15,
        fontWeight: "bold",
        color: FONT_COLORS.Lite
    },


})