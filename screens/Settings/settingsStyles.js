import {StyleSheet} from "react-native";
import {COLORS, FONT_COLORS} from "../../constants/colors";

export const stylesLite = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.mainBackgroundLite,
    },

    nav: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,

    },
    profileView: {
        width: '90%',
        height: 200,
        alignSelf: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: 'flex-start',
        borderRadius: 30,
        padding: 15,
        gap: 30,
        marginBottom: 20
    },

    logoutText: {
        lineHeight: 29,
        fontSize: 18,
        color: FONT_COLORS.Lite
    },

    shadowProp: {
        shadowOffset: {width: -2, height: 4},
        shadowColor: COLORS.shadowLite,
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

    profilePhoto: {
        width: 100,
        height: 100,
    },

    profilePhotoView: {
        padding: 20,
        width: 100,
        height: 100,
        display: "flex",
        borderRadius: 15,
        position: "absolute",
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


    nameTextMain: {
        fontWeight: 'bold',
        fontSize: 25,
        color: FONT_COLORS.Lite

    },
    settingsTextMain: {
        fontWeight: '400',
        fontSize: 18,
        color: FONT_COLORS.Lite
    },

    textView: {
    display: "flex",
    justifyContent: "space-between",
    gap: 15
    },

    settingTabs: {
        alignSelf: 'center',
        marginTop: 15,
        padding: 15,
        width: '90%',
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
        backgroundColor: COLORS.iconbackGroundColorLite,
        borderRadius: 15
    },
})