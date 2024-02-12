import {StyleSheet} from "react-native";
import {COLORS, FONT_COLORS} from "../../constants/colors";

export const stylesDark = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.mainBackgroundDark,
        flexGrow: 1,
        justifyContent: 'flex-end'
    },

    messageContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 10,
    },
    myMessage: {
        justifyContent: 'flex-end',
    },
    msgText: {
        color: FONT_COLORS.Dark
    },
    messageBubble: {
        backgroundColor: COLORS.borderColorDark,
        borderRadius: 10,
        padding: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.mainBackgroundDark,
        borderTopWidth: 1,
        borderColor: COLORS.borderColorDark,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        marginRight: 10,
        backgroundColor: COLORS.backgroundInputDark,
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
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


    sendButton: {

    }


})