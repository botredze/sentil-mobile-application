import {StyleSheet} from "react-native";
import {BUTTONCOLORS, COLORS, FONT_COLORS} from "../../constants/colors";

export const stylesDark = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: COLORS.mainBackgroundDark,
        height: '100%'
    },

    sortButtonGroup: {
        display: "flex",
        flexDirection: "row",
        gap: 15,
        padding: 10,
        alignSelf: "center",
        // backgroundColor: 'red',
        width: '95%',
        justifyContent: "space-between"
    },

    title: {
        padding: 20,
        display: "flex",
        alignSelf: 'flex-start',
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },

    profileText: {
        fontSize: 25,
        fontWeight: "bold",
        color: FONT_COLORS.Dark
    },

    dateInputsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginVertical: 10,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'blue'
    },

    labelText: {
        marginRight: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: FONT_COLORS.Dark
    },

    dateInput: {
        padding: 10,
        borderWidth: 1,
        borderColor: COLORS.borderColorDark,
        borderRadius: 15,
        width: '70%',
        backgroundColor: COLORS.backgroundInputDark,
        // color: 'red'
        alignItems: 'center',
    },
    dateText: {
        fontSize: 16,
        color: FONT_COLORS.Dark
    },

    historyContainer: {
        display: 'flex',
        justifyContent: "center",
        width: '100%',
        alignSelf: "center",
        alignItems: "center",
        gap: 5,
        marginTop: 20,
        //  backgroundColor: 'red'
    },

    history: {
        padding: 10,
        display: "flex",
        height: 80,
        gap: 10,
        // backgroundColor: 'blue',
        justifyContent: "center",
        width: '100%'
    },

    historyTitleText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: FONT_COLORS.Dark,
    },

    infoText:{
        fontSize: 15,
        fontWeight: 'normal',
        color: FONT_COLORS.Dark,
    },

    statusText: {
        fontSize: 16,
        fontWeight: "bold",
        color: FONT_COLORS.Dark,
        lineHeight: 17
    },

    line: {
        width: '95%',
        borderRadius: 10,
        height: 2,
        backgroundColor: COLORS.borderColorDark,
        marginBottom: 10
    },

    operationStatus: {
        display: "flex",
        justifyContent: "center",
        width: 85,
        height: 25,
        backgroundColor: BUTTONCOLORS.primary,
        borderRadius: 15,
        alignItems: 'center',
    },
    operationStatusReject: {
        display: "flex",
        justifyContent: "center",
        width: 90,
        height: 25,
        backgroundColor: BUTTONCOLORS.secondary,
        borderRadius: 15,
        alignItems: 'center',
    },

    moreInfoTitleView: {display: 'flex',
        flexDirection: 'row',
        paddingLeft: 30,
        justifyContent: 'space-between',
        width: '100%',
    },

    themeView: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        // backgroundColor: 'green',
        width: '100%'
    },

    titleView: {display: 'flex',  flexDirection: 'row', gap:11}
})