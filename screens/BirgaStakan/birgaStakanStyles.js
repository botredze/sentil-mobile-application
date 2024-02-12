import {StyleSheet} from "react-native";

export const stylesLite = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F5F6',
    },

    nav: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
    },

    title: {
        padding: 15,
        display: "flex",
        alignSelf: 'flex-start',
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },

    titleText: {
        fontSize: 20,
    },

    profileText: {
        fontSize: 25,
        fontWeight: "bold",
    },

    finView: {
        marginTop: 30,
        display: "flex",
        alignSelf: "center",
        backgroundColor: '#Fff',
        bottom: 15,
        borderRadius: 14,
        width: '95%',
        height: 150,
        padding: 15
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 5

    },
    tableHeader: {
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    tableCell: {
        flex: 1,
        textAlign: 'center'
    },
    tableCellDate: {
        flex: 1,
        textAlign: 'center',
        width: '60%'
    },

    tableHeaderDate: {
        display: 'flex',
        fontWeight: 'bold',
        textAlign: 'center',
        width: '40%'
    },
    buySellButtonGroup:{
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-evenly",
        padding: 10
    },

    buyBtn:{
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#0ecb81',
        padding: 10,
        width: '40%',
        height: 40,
        borderRadius: 17,
        bottom: 0
    },
    sellOffBtn:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
        backgroundColor: '#f6465d',
        alignItems: "center",
        padding: 10,
        width: '40%',
        height: 40,
        borderRadius: 17,
        bottom: 0
    },

    grafixGroup: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "center"
    }
})