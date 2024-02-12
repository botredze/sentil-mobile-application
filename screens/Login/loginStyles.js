import {Dimensions, StyleSheet} from "react-native";
import {COLORS, FONT_COLORS} from "../../constants/colors";


export const liteStyles = StyleSheet.create({
    loginSreenParent: {
        position: "relative",
    },

    container: {
        backgroundColor: COLORS.mainBackgroundLite,
    },

    loginParentChild: {
        height: '100%',
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
        padding: 10
    },

    inputGroup: {
        display: "flex",
        alignSelf: "center",
        alignItems: "center",
        width: '90%',
        gap: 5
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

    footerLogo: {
        width: '100%',
        height: 60,
        position: 'absolute',
        bottom: 50,
        left: '50%',
        transform: [{ translateX: -Dimensions.get('window').width / 2 }],
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
    },

    inputGroupContainer: {
        display: "flex",
        gap: 15,
        marginTop: 20
    },
    titleText: {
        fontSize: 17,
        color: FONT_COLORS.Lite
    },

    loginBtn: {
        backgroundColor: '#e7d51c',
        borderRadius: 15,
        height: 45,
        width: '55%',
        alignItems: "center",
    },
    loginText: {
        fontSize: 25,
        lineHeight: 45,
        fontWeight: "bold",
        color: FONT_COLORS.Lite
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