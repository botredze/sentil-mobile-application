import {StyleSheet} from "react-native";
import {BUTTONCOLORS, COLORS, FONT_COLORS} from "../../constants/colors";

export const investStyleDark = StyleSheet.create({
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
    tableContainer: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
        backgroundColor: COLORS.mainBackgroundDark,
        alignSelf: 'center',
        width: '95%',
        borderRadius: 15,
        display: "flex",
        flexDirection: "column",
        marginTop: 5,
        padding: 10
    },

    populerColumn: {
        flex: 1,
        paddingHorizontal: 10,
        width: "60%",
        display: 'flex',
        gap: 15
    },
    populerItem: {
        paddingVertical: 10,
        height: 130,
        width: '100%',
        backgroundColor: COLORS.cardContainerDark,
        borderRadius: 20,
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-between"

    },

    populerBox: {
        alignSelf: "center",
        width: '95%',
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: 15,
    },
    popularTitleText: {
        fontSize: 15,
        fontWeight: '500',
        color: FONT_COLORS.Dark

    },
    prosentTextDown: {
        fontSize: 15,
        fontWeight: '500',
        color: FONT_COLORS.up
    },
    prosentTextUp: {
        fontSize: 15,
        fontWeight: '500',
        color: FONT_COLORS.down
    },

    ablicationSumm: {
        backgroundColor: COLORS.summContainerDark,
        alignItems: "center",
        borderRadius: 10,
        width: '60%'
    },

    summText: {
        color: FONT_COLORS.Lite
    },

    backgroundImage: {
        width: 90,
        height: 90,
        marginRight: 10,
        position: 'absolute',
        bottom: 0,
        right: 0,
    },

    sommText: {
        fontSize: 25,
        fontWeight: '400',
        color: FONT_COLORS.summText
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

    sortBtn: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: BUTTONCOLORS.activeState,
        borderRadius: 12,
        width: '31%',
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        gap: 5
    },
    sortBtnObl: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: BUTTONCOLORS.activeState,
        borderRadius: 12,
        width: '33%',
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        gap: 5
    },

    countText: {
        color: FONT_COLORS.Dark
    },
    buttonText: {
        color: FONT_COLORS.Dark
    },
})