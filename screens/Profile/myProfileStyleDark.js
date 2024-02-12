import {Platform, StyleSheet} from "react-native";
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

    inputGroup: {
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        alignItems: "center",
        gap: 10,
        width: '90%',
    },

    inputTextGroup: {
        width: '100%',
        display: "flex",
        padding: 5,
        gap: 7,
    },

    inputText: {
        padding: 5,
        fontSize: 15,
        color: FONT_COLORS.Dark
    },

    input: {
        height: 60,
        borderWidth: 1,
        borderColor: COLORS.borderColorDark,
        padding: 15,
        fontSize: 15,
        borderRadius: 15,
        backgroundColor: COLORS.backgroundInputDark,
        width: '100%',
        ...Platform.select({
            ios: {
                borderBottomWidth: 1,
            },
            android: {},
        }),
    },

    codeNumberPhone: {
        height: 60,
        borderWidth: 1,
        borderColor: COLORS.borderColorDark,
        padding: 15,
        fontSize: 15,
        borderRadius: 15,
        backgroundColor: COLORS.backgroundInputDark,
        width: '25%',
        ...Platform.select({
            ios: {
                borderBottomWidth: 1,
            },
            android: {},
        }),
    },
    numberPhone: {
        height: 60,
        borderWidth: 1,
        borderColor: COLORS.borderColorDark,
        backgroundColor: COLORS.backgroundInputDark,
        padding: 15,
        fontSize: 15,
        borderRadius: 15,
        width: '75%',
        ...Platform.select({
            ios: {
                borderBottomWidth: 1,
            },
            android: {},
        }),
    },

    numberContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 5
    },

    updateButton: {
        width: '60%',
        backgroundColor: BUTTONCOLORS.primary,
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
        color: '#fff',
        fontWeight: 'bold',
        lineHeight: 55
    }


})