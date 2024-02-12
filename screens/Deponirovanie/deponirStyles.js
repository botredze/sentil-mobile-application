import {StyleSheet} from "react-native";
import {COLORS, FONT_COLORS} from "../../constants/colors";

export const stylesLite = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.mainBackgroundLite,
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
        color: FONT_COLORS.Lite
    },

    infoText: {
        color: FONT_COLORS.Lite
    }
})