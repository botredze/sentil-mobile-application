import {Platform, StyleSheet} from "react-native";
import {BUTTONCOLORS, COLORS, FONT_COLORS} from "../../constants/colors";

export const stylesLite = StyleSheet.create({
    container: {
        padding: 15,
        flex: 1,
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
        shadowOpacity: 0.4,
        shadowRadius: 4,
    },


    elevation: {
        elevation: 10,
        shadowColor: COLORS.shadowLite,
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

    nameText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: FONT_COLORS.Lite
    },
    settingsText: {
        fontWeight: '400',
        fontSize: 14,
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
        //backgroundColor: 'red',
        height: '100%',
        justifyContent: 'flex-end',
    },
    modal: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        width: '50%'
    },

    changePassword: {
        gap: 15,
        padding: 15,
        justifyContent: 'flex-end',
        //   backgroundColor: COLORS.modalBackGroundLite,
    },

    inner: {
        backgroundColor: COLORS.mainBackgroundLite,
        // backgroundColor:"blue",
        gap: 15,
        padding: 15,
        display: "flex",
        justifyContent: 'flex-start',
        flex: 1
    },
    inputGroup: {
        display: "flex",
        alignSelf: "flex-start",
        alignItems: "flex-start",
        justifyContent: 'center',
        width: '98%',
        gap: 10
    },

    changePasswordMainTitleText: {
        fontSize: 21,
        color: FONT_COLORS.Lite,
        fontWeight: '600'
    },

    changePasswordInfoText: {
        fontSize: 15,
        color: FONT_COLORS.Lite
    },

    input: {
        width: '100%',
        height: 55,
        borderRadius: 10,
        borderColor: COLORS.borderColorLite,
        borderWidth: 1,
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: COLORS.backgroundInputLite,
        fontSize: 16
    },


    updateButton: {
        width: '60%',
        backgroundColor: BUTTONCOLORS.confirmBtn,
        height: 60,
        alignItems: "center",
        borderRadius: 15
    },
    updateButtonView: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: "center",
        width: '95%',
        marginTop: 30,
    },

    updateButtonText: {
        alignItems: "center",
        fontSize: 20,
        color: FONT_COLORS.Lite,
        fontWeight: 'bold',
        lineHeight: 55
    }
})