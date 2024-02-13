import {StyleSheet} from "react-native";
import {CARD_CONTAINER_COLORS, COLORS, FONT_COLORS} from "../../constants/colors";

export const stylesLite = StyleSheet.create({
    container: {
        flex: 1,
       // backgroundColor: COLORS.mainBackgroundLite,
        flexGrow: 1,
        justifyContent: 'flex-end',
        padding: 5,
        marginBottom: 70
    },

    messageContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 10,
    },
    myMessage: {
        justifyContent: 'flex-end',
    },
    messageBubble: {
        backgroundColor: CARD_CONTAINER_COLORS.balanceContanerColorLite,
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
       // backgroundColor: COLORS.mainBackgroundLite,
       //  backgroundColor: 'blue',
        borderTopWidth: 1,
        borderColor: COLORS.borderColorLite,
        paddingVertical: 5,
        paddingHorizontal: 10,
        position:"absolute",
        bottom:5,
        left:0
    },
    input: {
        flex: 1,
        marginRight: 10,
        backgroundColor: COLORS.backgroundInputLite,
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },

    chatMessage:{
         backgroundColor: COLORS.mainBackgroundLite,
        height:"100%",
        position:"relative",
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
        color: FONT_COLORS.Lite
    },


    sendButton: {

    }


})
