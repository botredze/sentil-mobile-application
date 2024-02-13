import {Platform, StyleSheet} from "react-native";
import {COLORS, FONT_COLORS} from "../../constants/colors";

export const stylesLite = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: COLORS.mainBackgroundLite,
        // backgroundColor: 'red',
        height: '100%'
    },
    scrollViewContainer: {
        height: '100%',
        backgroundColor: COLORS.mainBackgroundLite,
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
        color: FONT_COLORS.Lite
    },


    shadowProp: {
        shadowOffset: {width: -2, height: 4},
        shadowColor: COLORS.shadowLite,
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

    settingTabs: {
        alignSelf: 'center',
        marginTop: 15,
        padding: 15,
        width: '98%',
        height: 80,
        backgroundColor: COLORS.cardContainerLite,
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
        backgroundColor: COLORS.cardContainerLite,
        borderRadius: 15
    },

    themeContainer: {
        //backgroundColor: 'red',
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        gap: 10,
        padding: 15,
        justifyContent: 'space-between',
        width: '98%'
    },

    themeTitle: {
        display: "flex",
        padding: 15,
    },

    themeTitleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: FONT_COLORS.Lite
    },


    inputAddressSelector: {
        width: '100%',
        backgroundColor: COLORS.backgroundInputLite,
        color: FONT_COLORS.Lite,
        borderRadius: 15
    },

    nameText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: FONT_COLORS.Lite
    },
    settingsText: {
        fontWeight: '400',
        fontSize: 16,
        color: FONT_COLORS.Lite
    },

    textView: {
        display: "flex",
        justifyContent: "space-between",
        gap: 15
    },
    overlay: {
        flex: 1,
        backgroundColor: COLORS.modalOverlayLite,
        justifyContent: 'flex-end',
    },
    modal: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },

})
