import {StyleSheet} from "react-native";
import {BUTTONCOLORS, COLORS, FONT_COLORS} from "../../constants/colors";

export const stylesLite = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.mainBackgroundLite,
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



    sortBtn: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: BUTTONCOLORS.activeState,
        borderRadius: 12,
        width: '31%',
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        gap: 5
    },

    sortBtnObl: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: BUTTONCOLORS.activeState,
        borderRadius: 12,
        width: '33%',
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        gap: 5
    },

    countText: {
        color: FONT_COLORS.Dark
    },
    buttonText: {
        color: FONT_COLORS.Dark
    },

    nav: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
    },

    reestrMainContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        alignSelf: "center",
        width: '95%',
        backgroundColor: '#fff',
        borderRadius: 12,
        gap: 20
    },

    reestrContent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignSelf: "center",
        height: 80,
        width:'100%',
        padding: 15,
        gap: 10,
    },

    image: {
        height: 50,
        width: 50
    },

    nameTextTitle: {

    },

    infoText: {

    },

    summInfoText: {
    },
    summView: {
        backgroundColor: COLORS.summContainerDark,
        height: 20,
        width: 80,
        borderRadius: 10,
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        //padding: 10,
        flexDirection: "row",
        gap: 5,
    },


    infoContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center"
    },

    summViewInfo: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 10,
        justifyContent: 'space-between'

    }

})