import {StyleSheet} from "react-native";
import {COLORS, FONT_COLORS} from "../../constants/colors";

export const stylesDark = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.mainBackgroundDark,
        padding: 15
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

    infoText: {
        color: FONT_COLORS.Dark
    }
})