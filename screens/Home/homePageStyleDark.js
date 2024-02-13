import {StyleSheet} from "react-native";
import {BUTTONCOLORS, CARD_CONTAINER_COLORS, COLORS, FONT_COLORS} from "../../constants/colors";

export const stylesDark = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.mainBackgroundDark,
    },

    navBar: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: COLORS.mainBackgroundDark,
        height: 50,
        alignItems: "flex-start",
        justifyContent: 'space-between',
        padding: 8
    },

    fioTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 30,
        color: FONT_COLORS.Dark
    },

    iconContainerLogout: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
    },


    pageTitleContainer: {
        width: '90%',
        //  paddingTop: 10,
        display: "flex",
        //backgroundColor: 'blue',
        alignItems: 'flex-start',
        justifyContent: 'start',
    },

    pageTitleText: {
        fontSize: 25,
        fontWeight: '800',
        // color: 'red',
        color: CARD_CONTAINER_COLORS.fondColors
    },
    moneyIcon: {
        width: 25,
        height: 25
    },

    accountSumm: {
        fontSize: 40,
        fontWeight: '900',
        color: CARD_CONTAINER_COLORS.fondColors
    },

    accountSummContainer: {
        width: '90%',
        paddingTop: 10,
        display: "flex",
        alignItems: 'flex-start',
        justifyContent: 'start',
        //backgroundColor: 'red',
    },
    buttonGroupContainer: {
        //backgroundColor: 'blue',
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        //backgroundColor: 'red'
    },


    replenishBtn: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: CARD_CONTAINER_COLORS.primaryColor,
        padding: 10,
        width: 150,
        height: 40,
        borderRadius: 12,
        bottom: 0
    },
    takeOffBtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
        backgroundColor: CARD_CONTAINER_COLORS.defaultBtnColor,
        alignItems: "center",
        padding: 10,
        width: 150,
        height: 40,
        borderRadius: 12,
        bottom: 0
    },

    investBtn: {
        backgroundColor: CARD_CONTAINER_COLORS.balanceContanerColor,
        width: '100%',
        alignItems: 'center',
        padding: 10,
        borderRadius: 15,
        height: 60,
    },

    investBtnContainer: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        padding: 10
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

    replenishBtnText: {
        fontSize: 17,
        fontWeight: '800',
        color: CARD_CONTAINER_COLORS.fondColors
    },

    takeOffBtnText: {
        fontSize: 17,
        fontWeight: '800',
        color: CARD_CONTAINER_COLORS.fondColors
    },

    investBtnText: {
        fontSize: 26,
        fontWeight: '600',
        lineHeight: 35,
        color: FONT_COLORS.Dark
    },
    balanceContainer: {
        alignSelf: 'center',
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
        backgroundColor: CARD_CONTAINER_COLORS.balanceContanerColor,
        width: '95%',
        height: 215,
        borderRadius: 30,
       // padding: 20,
        marginTop: 20,
        position: 'relative'
    },
    cardBackGroudImage: {
        //backgroundColor: 'red',
        width: '96%',
        height: 215,
        alignSelf: "center",
        borderRadius: 30,
        position: "absolute",
        zIndex: 2,
    },

    balanceContainerInner: {
        paddingTop: 18,
        paddingLeft: 15,
        paddingRight: 15,
        position: "absolute",
        zIndex: 5,
        width: '100%',
        height: 215,
        borderRadius: 30,
        //  backgroundColor: 'red',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        //alignItems: 'center'
    },
    populer: {
        backgroundColor: COLORS.backgroundCardDark,
        alignSelf: 'center',
        width: '95%',
        borderRadius: 20,
        display: "flex",
        flexDirection: "column",
        marginTop: 10,
        height: 560

    },
    populerTitleText: {
        fontSize: 25,
        fontWeight: '800',
        color: FONT_COLORS.Dark
    },
    populerTitle: {
        marginTop: 10,
        alignSelf: "center",
        width: '100%',
        display: "flex",
        padding: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        color: FONT_COLORS.Dark
    },
    populerColumn: {
        // flex: 1,
        paddingHorizontal: 10,
        width: "100%",
        display: 'flex',
        justifyContent:"space-between",
        flexWrap:"wrap",
        gap: 15,
       // backgroundColor:"green"
    },

    populerBox: {
        width: '100%',
        display: "flex",
        flexWrap:"wrap",
        gap: 15,
        padding: 10,
    },

    populerItem: {
        paddingVertical: 10,
        height: 150,
        width: '47%',
        backgroundColor: COLORS.cardContainerDark,
        borderRadius: 20,
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-between"
    },

    popularTitleText: {
        fontSize: 15,
        fontWeight: '500',
        color: FONT_COLORS.Dark
    },
    prosentTextDown: {
        fontSize: 15,
        fontWeight: '500',
        color: FONT_COLORS.down
    },
    prosentTextUp: {
        fontSize: 15,
        fontWeight: '500',
        color: FONT_COLORS.up
    },

    ablicationSumm: {
        backgroundColor: COLORS.summContainerDark,
        alignItems: "center",
        borderRadius: 10,
        width: '60%'
    },
    summText: {
        color: FONT_COLORS.Lite
    },

    backgroundImage: {
        width: 100,
        height: 100,
        // marginRight: 10,
        position: 'absolute',
        bottom: 0,
        right: 0,
    },

    sommText: {
        fontSize: 25,
        fontWeight: '400',
        color: CARD_CONTAINER_COLORS.fondColors,
        paddingTop: 7
    }


})