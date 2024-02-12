import {Platform, StyleSheet} from "react-native";
import {COLORS, FONT_COLORS} from "../../constants/colors";

export const stylesDark = StyleSheet.create({
    container: {
        padding: 15,
        flex: 1,
        backgroundColor: COLORS.mainBackgroundDark,
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


    shadowProp: {
        shadowOffset: {width: -2, height: 4},
        shadowColor: COLORS.shadowDark,
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

    settingTabs: {
        alignSelf: 'center',
        marginTop: 15,
        padding: 15,
        width: '98%',
        height: 80,
        backgroundColor: COLORS.cardContainerDark,
        borderRadius: 25,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: 15
    },

    iconSet: {
        alignSelf: 'center',
        width: 60,
        height: 60,
        backgroundColor: COLORS.iconBackGroundColorDark,
        borderRadius: 15
    },

    nameText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: FONT_COLORS.Dark
    },
    settingsText: {
        fontWeight: '400',
        fontSize: 14,
        color: FONT_COLORS.Dark
    },

    textView: {
        display: "flex",
        justifyContent: "space-between",
        gap: 15
    },
    overlay: {
        flex: 1,
        backgroundColor: COLORS.modalOverlayDark,
        justifyContent: 'flex-end',
    },
    modal: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },

})