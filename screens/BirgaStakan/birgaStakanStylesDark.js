import {StyleSheet} from "react-native";
import {BUTTONCOLORS, COLORS, FONT_COLORS} from "../../constants/colors";

export const stylesDark = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.mainBackgroundDark,
    },

    nav: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
    },

    title: {
        padding: 15,
        display: "flex",
        alignSelf: 'flex-start',
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },

    titleText: {
        fontSize: 20,
        color: FONT_COLORS.Dark

    },

    profileText: {
        fontSize: 25,
        fontWeight: "bold",
        color: FONT_COLORS.Dark
    },

    finView: {
        marginTop: 30,
        display: "flex",
        alignSelf: "center",
        backgroundColor: COLORS.cardDark,
        bottom: 15,
        borderRadius: 14,
        width: '95%',
        height: 150,
        padding: 15
    },

    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 5

    },

    shadowProp: {
        shadowOffset: {width: -2, height: 4},
        shadowColor: COLORS.shadowDark,
        shadowOpacity: 0.4,
        shadowRadius: 4,
    },


    elevation: {
        elevation: 10,
        shadowColor: COLORS.shadowDark,
    },

    tableHeader: {
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'center',
        color: FONT_COLORS.Dark
    },
    tableCell: {
        flex: 1,
        textAlign: 'center',
        color: FONT_COLORS.Dark
    },
    tableCellDate: {
        flex: 1,
        textAlign: 'center',
        width: '60%'
    },

    tableHeaderDate: {
        display: 'flex',
        fontWeight: 'bold',
        textAlign: 'center',
        width: '40%'
    },
    buySellButtonGroup:{
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-evenly",
        padding: 10
    },

    buyBtn:{
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: BUTTONCOLORS.primary,
        padding: 10,
        width: '40%',
        height: 40,
        borderRadius: 17,
        bottom: 0
    },
    sellOffBtn:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
        backgroundColor: BUTTONCOLORS.secondary,
        alignItems: "center",
        padding: 10,
        width: '40%',
        height: 40,
        borderRadius: 17,
        bottom: 0
    },

    grafixGroup: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "center",
        width: '98%'
    }
})