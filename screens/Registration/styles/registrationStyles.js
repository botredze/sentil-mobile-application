import {Dimensions, StyleSheet} from "react-native";
import {BUTTONCOLORS, COLORS, FONT_COLORS} from "../../../constants/colors";

export const stylesLite = StyleSheet.create({
    container: {
        height: '97%',
    },

    containerMain: {
        width: '100%',
        backgroundColor:  COLORS.mainBackgroundLite,
        display: "flex",
        alignSelf: "center",
        padding: 30,
        gap: 10
    },

    titleText: {
        fontSize: 17,
        color: FONT_COLORS.Lite,
    },

    sendCodeSMS: {
        fontSize: 17,
        color: FONT_COLORS.Lite,
        marginTop:20
    },


    dateInputsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        width: '100%',
        //  backgroundColor: COLORS.backgroundInputLite
    },
    inputContainer2: {
        display: "flex",
        justifyContent: "flex-start",
        width: '100%',
        height: 80,
        marginTop: 15,
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 15,
        //backgroundColor: COLORS.backgroundInputLite
    },

    input: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        borderColor: COLORS.borderColorLite,
        borderWidth: 1,
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: COLORS.backgroundInputLite
    },

    inputChekNumber: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        borderColor: COLORS.borderColorLite,
        borderWidth: 1,
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        textAlign: 'center',
        backgroundColor: COLORS.backgroundInputLite,
        marginTop: 20
    },

    inputNumberPhone: {
        width: '95%',
        height: 50,
        borderRadius: 10,
        borderColor: COLORS.borderColorLite,
        borderWidth: 1,
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: COLORS.backgroundInputLite

    },
    requredText: {
        fontSize: 25,
        color: 'red'
    },
    inputTextContainer: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "flex-start",
        paddingTop: 20,
        gap: 5,
    },

    btnGroup: {
        width: '100%',
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        left: '60%',
        transform: [{translateX: -Dimensions.get('window').width / 2}],
        bottom: 20,
        position: "absolute",
        //backgroundColor: 'blue'
    },

    loginParentChild: {
        height: '98%',
    },

    loginSreenParent: {
        // backgroundColor:"red"
    },

    inputDate: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        borderColor: COLORS.borderColorLite,
        borderWidth: 1,
        backgroundColor: COLORS.backgroundInputLite,
        padding: 15,
        alignItems: "center"
    },

    nextButton: {
        width: '50%',
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        position: 'fixed',
        borderRadius: 15,
        backgroundColor: BUTTONCOLORS.primary,
    },

    imageContent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: "center"
    },

    input1: {
        width: '100%',
        height: 90,
        borderRadius: 10,
        borderColor: COLORS.borderColorLite,
        borderWidth: 1,
        backgroundColor: COLORS.backgroundInputLite,
        padding: 15
    },


    inputAddressSelector: {
        width: '100%',
        backgroundColor: COLORS.backgroundInputLite,
        color: FONT_COLORS.Lite,
        borderRadius: 15
    },
    uploadBtnGroup: {
        display: "flex",
        justifyContent: "center",
        gap: 15
    },

    dateText: {
        fontSize: 16,
        color: FONT_COLORS.Lite
    },
    buttonText: {
        fontSize: 16,
        color: FONT_COLORS.Lite
    },
    uploadButton: {
        height: 50,
        width: '80%',
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "space-between",
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#989797',
        padding: 15,
        display: "flex",
        flexDirection: 'row',
        gap: 10,
    },

    nextBtnText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: "bold"
    },

    stepText: {
        fontSize: 18,
        color: FONT_COLORS.Lite
    },

    mainTitle: {
        fontSize: 25, fontWeight: 'bold',
        color: FONT_COLORS.Lite
    },
    renderedContent: {
        marginTop: 30,
    },

    podskaText: {
        marginTop: 5,
        fontSize: 15,
        color: FONT_COLORS.Lite
    },
    title: {
        fontWeight: "bold",
        fontSize: 15,
        color: FONT_COLORS.Lite
    },

    titleText1: {
        fontSize: 17,
        marginBottom: 12,
        color: FONT_COLORS.Lite
    },
    inputContainer: {
        display: "flex",
        justifyContent: "flex-start",
        width: '100%',

    },

    inputContainerFinalText: {
        textAlign:'left',
        display: "flex",
        width: '95%',
        gap: 20,

        // backgroundColor:"blue",
        // top: "15%",
        // position:"absolute",
        // textAlign:"center"
    },

})