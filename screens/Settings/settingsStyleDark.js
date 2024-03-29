import {StyleSheet} from "react-native";
import {COLORS, FONT_COLORS} from "../../constants/colors";

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
        fontSize: 21,
        color: FONT_COLORS.down,
        paddingRight: 5
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
        color: FONT_COLORS.Dark
    },
    settingsText: {
        fontWeight: '400',
        fontSize: 14,
        color: FONT_COLORS.Dark
    },


    nameTextMain: {
        fontWeight: 'bold',
        fontSize: 25,
        color: FONT_COLORS.Dark

    },
    settingsTextMain: {
        fontWeight: '400',
        fontSize: 18,
        color: FONT_COLORS.Dark
    },

    textView: {
        display: "flex",
        justifyContent: "space-between",
        gap: 15
    },

    settingTabs: {
        alignSelf: 'center',
        marginTop: 15,
        padding: 10,
        width: '90%',
        height: 80,
        backgroundColor: COLORS.cardContainerDark,
        borderRadius: 15,
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
})