import {StyleSheet} from "react-native";
import {BUTTONCOLORS, COLORS, FONT_COLORS} from "../../constants/colors";

export const stylesLite = StyleSheet.create({
    container: {
        backgroundColor: COLORS.mainBackgroundLite,
    },


    stepText: {
        fontSize: 20,
        lineHeight: 32
    },

    darkOverlay: {
        ...StyleSheet.absoluteFillObject, // Занимает всю доступную область
        backgroundColor: "rgba(0,0,0,0.53)", // Черный цвет с прозрачностью 0.3
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
        backgroundColor: BUTTONCOLORS.confirmBtn,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    nextButtonText: {
        fontSize: 18,
        color: FONT_COLORS.Dark
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
        fontSize: 23,
        fontWeight: "bold",
        color: FONT_COLORS.Lite
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


    chekDataView:  {
        display: 'flex',
        //backgroundColor: 'green',
        justifyContent: "space-between",
        flexDirection: 'row',
        width: '93%'
    },

    chekView: {
        display:'flex',
        width: '97%',
        height: 200,
        marginTop: 35,
        // backgroundColor: 'red',
        alignItems: "center",
        alignSelf: "center",
        gap: 15
    },

    dataName: {
        fontSize: 16,
        color: FONT_COLORS.summText
    },

    dataValue: {
        fontSize: 16,
        color: FONT_COLORS.Lite
    },

    depositView: {
        display: "flex",
        width: '90%',
        height: 100,
        backgroundColor: COLORS.cardLite,
        borderRadius: 15,
        alignSelf: 'center',
        alignItems: "center",
        justifyContent: 'center'
    },
    summDepositText: {
        fontSize: 16,
        color: FONT_COLORS.summText
    },
    summDeposit: {
        fontWeight: '600',
        fontSize: 30,
        color: FONT_COLORS.summText
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        width: '90%',
        height: 250,
        margin: 20,
        backgroundColor: COLORS.modalBackGroundLite,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    openButton: {
        backgroundColor: BUTTONCOLORS.confirmBtn,
        borderRadius: 13,
        padding: 10,
        marginTop: 20,
        elevation: 2,
        width: 120,
        height: 50,
        display: "flex",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center"
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 25,
        fontWeight: '600',
        color: FONT_COLORS.Lite
    },

    successImage: {width: 80, height: 80},

    infoSuccessText: {
        marginTop: 5,
        fontSize: 15,
        fontWeight: '400',
        color: FONT_COLORS.summText
    }

})