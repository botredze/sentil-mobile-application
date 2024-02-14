import {StyleSheet} from "react-native";
import {CARD_CONTAINER_COLORS, COLORS, FONT_COLORS} from "../../constants/colors";

export const stylesDark = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: COLORS.mainBackgroundDark,
        flexGrow: 1,
        justifyContent: 'flex-end',
        padding: 5,
        marginBottom: 70,
        //  backgroundColor: 'red'
    },

    messageContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 10,
        //  backgroundColor: 'green'
    },
    myMessage: {
        justifyContent: 'flex-end',
    },
    messageBubble: {
        backgroundColor: CARD_CONTAINER_COLORS.balanceContanerColorDark,
        borderRadius: 10,
        padding: 10,
    },

    msgText: {
        color: FONT_COLORS.Dark,
        fontSize: 16
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.mainBackgroundDark,
        //backgroundColor: 'blue',
        borderTopWidth: 1,
        borderColor: COLORS.borderColorDark,
        paddingVertical: 5,
        paddingHorizontal: 10,
        position:"absolute",
        bottom:5,
        left:0
    },

    chatView: {
        //backgroundColor: 'yeloow',
        display: "flex",
        flex: 1,
        padding: 0,
        flexDirection: 'column'
    },

    input: {
        flex: 1,
        marginRight: 10,
        backgroundColor: COLORS.backgroundInputDark,
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },

    chatMessage:{
        backgroundColor: COLORS.mainBackgroundDark,
        height:"100%",
        position:"relative",
        //  backgroundColor: 'blue'
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
