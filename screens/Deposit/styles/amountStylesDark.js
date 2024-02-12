import {StyleSheet} from "react-native";
import {BUTTONCOLORS, COLORS, FONT_COLORS} from "../../../constants/colors";
export const stylesDark = StyleSheet.create({
    container: {
        backgroundColor: COLORS.mainBackgroundDark,
        width: '100%',
        height: '100%'
    },

    stepText: {
        fontSize: 20,
        lineHeight: 32,
        color: FONT_COLORS.Dark
    },

    input: {
        backgroundColor: COLORS.backgroundInputDark,
        borderColor: COLORS.borderColorDark,
        height: 60,
        width: 250,
        borderRadius: 15,
        alignSelf: "center",
        textAlign: "center",
        fontSize: 17
    },

    cardBackGroudImage: {
        //backgroundColor: 'red',
        width: '98%',
        height: 215,
        alignSelf: "center",
        borderRadius: 30,
        position: "absolute",
        zIndex: 2,
    },


    amoutSelectView: {
        padding: 12,
        display: "flex",
        alignSelf: "center",
        width: '95%',
        height: 150,
        gap: 17,
        //backgroundColor: 'red',
        borderRadius: 15,
        justifyContent: 'center',
        textAlign: "center",
        alignItems: "center"
    },
    inputGroupView: {
        display: "flex",
        alignSelf: "center",
    },

    nav: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
    },

    title: {
        padding: 20,
        display: "flex",
        alignSelf: 'flex-start',
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },

    cancelBtn:  {
        display: "flex",
        flexDirection: 'row',
        gap: 10
    },

    cancelBtnText: {
        lineHeight: 29,
        fontSize: 18,
        color: '#E96D6D'
    },

    profileText: {
        fontSize: 25,
        fontWeight: "bold",
        color: FONT_COLORS.Dark
    },



    amountInfoText: {fontSize: 15, color: FONT_COLORS.Dark},
    cardControlView: {
        // backgroundColor: COLORS.mainBackgroundDark,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: '95%',
        height: 50,
        alignSelf: 'center',
        alignItems: "center",
        marginTop: 10,
        padding: 5,

    },


    addCartBtnText: {
        fontSize: 16,
        color: BUTTONCOLORS.activeState
    },

    addCardPlus: {
        fontSize: 35,
        color: BUTTONCOLORS.activeState,
    },

    selectCardBtn: {
        padding: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    addCardBtn: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,

    },
    selectCardBtnText: {
        fontSize: 16,
        color: BUTTONCOLORS.dark
    },

    cardView: {
        marginTop: 10,
        alignSelf: 'center',
        display: "flex",
        width: '95%',
        height: 240,
        backgroundColor: '#07264D',
        padding: 20,
        borderRadius: 16,
        position: "relative"
    },


    cardViewInner: {
        display: "flex",
        gap: 18,
        width: '100%',
    },
    cardNameView: {
        display: "flex",
        gap: 10,
    },
    userCardName: {
        fontSize: 23,
        color: FONT_COLORS.Dark,
        fontWeight: "600"
    },
    bankName: {
        fontSize: 18,
        color: FONT_COLORS.summText,
        fontWeight: '500'
    },
    cardViewNumber: {
        display: "flex",
        flexDirection: 'row',
        alignSelf: "center",
        width: '100%',
        justifyContent: "space-between",
        // backgroundColor: 'blue'
    },
    securyData: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    cardNumber: {
        color: FONT_COLORS.Dark,
        fontWeight: '500',
        fontSize: 35
    },
    cardNumberText: {
        color: FONT_COLORS.Dark,
        fontWeight: '500',
        fontSize: 26
    },

    codeTextStylesTitle: {
        fontSize: 18,
        fontWeight: '400',
        color: FONT_COLORS.Dark
    },
    codeTextStyles: {
        fontSize: 16,
        fontWeight: '400',
        color: FONT_COLORS.Dark
    },
    secureCodeView: {
        display: "flex",

    },
    expTimeView: {
        display: "flex",
        flexDirection: "row",
        gap: 5,

    },
    cardTypeImage: {
        // backgroundColor: 'green',
        width: 50,
        height: 30
    },

    continueBtnView: {
        marginTop: 35,
        // backgroundColor: 'red',
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: "center"
    },
    nextButton: {
        borderRadius: 15,
        width: 200,
        height: 60,
        backgroundColor: BUTTONCOLORS.activeState,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    nextButtonText: {
        fontSize: 18,
        color: FONT_COLORS.Dark
    }

})