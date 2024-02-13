import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "./screens/Home/HomeScreen";
import LoginScreen from "./screens/Login/LoginScreen";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from "@expo/vector-icons";
import HistoryScreen from "./screens/History/HistoryScreen";
import DeponirScreen from "./screens/Deponirovanie/DeponirScreen";
import ChatScreen from "./screens/ChatScreen/ChatScreen";
import InfoScreen from "./screens/Info/InfoScreen";
import Settings from "./screens/Settings/SettingsModal";
import Profile from "./screens/Profile/MyProfile";
import Security from "./screens/Security/Security";
import Obligations from "./screens/Obligations/Obligations";
import InvestsScreen from "./screens/Invest/InvestsScreen";
import ReginstrationScreen from "./screens/Registration/ReginstrationScreen";
import {Provider, useSelector} from 'react-redux';
import store from './redux/store';
import BirgStakan from "./screens/BirgaStakan/BirgStakan";
import {Platform, StatusBar} from "react-native"; //
import {SafeAreaView} from 'react-native-safe-area-context'
import PreferenceScreen from "./screens/Prefenence/PreferenceScreen";
import {COLORS, FONT_COLORS} from "./constants/colors";
import AmountSelect from "./screens/Deposit/AmountSelect";
import ConfirmTransaction from "./screens/ConfirmTransaction/ConfirmTransaction";
import DepositScreen from "./screens/Deposit/DepositScreen";
import {selectIsDarkTheme} from "./redux/slieces/themeSlice";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const HomeTabs = () => {
    const isDarkTheme = useSelector(selectIsDarkTheme);
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarIcon: ({color, size}) => {
                    let iconName;

                    if (route.name === 'Мой портфель') {
                        iconName = 'ios-list';
                    } else if (route.name === 'История') {
                        iconName = 'ios-barcode';
                    } else if (route.name === 'Депонировать') {
                        iconName = 'ios-search';
                    } else if (route.name === 'Чат') {
                        iconName = 'ios-chatbubbles';  // Corrected icon name
                    } else if (route.name === 'Информация') {
                        iconName = 'ios-information-circle';
                    }
                    else if (route.name === 'Главная') {
                        iconName = 'ios-home';
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>;
                },
                tabBarStyle: {backgroundColor: isDarkTheme ? COLORS.mainBackgroundDark: COLORS.mainBackgroundLite}
            })}

            tabBarOptions={{
                activeTintColor: COLORS.activeTabColor,
                inactiveTintColor: isDarkTheme ? FONT_COLORS.Dark : FONT_COLORS.Lite,
            }}
        >
            <Tab.Screen name="Главная" component={HomeScreen} options={{ tabBarButton: () => null }}/>
            <Tab.Screen name="Мой портфель" component={Obligations}/>
            <Tab.Screen name="История" component={HistoryScreen}/>
            <Tab.Screen name="Депонировать" component={DeponirScreen}/>
            <Tab.Screen name="Чат" component={ChatScreen}/>
            <Tab.Screen name="Информация" component={InfoScreen}/>
        </Tab.Navigator>
    );
};


const NavigationUses = () => {

    const isDarkTheme = useSelector(selectIsDarkTheme);

    return (
        <NavigationContainer>
            <StatusBar backgroundColor={isDarkTheme ? COLORS.mainBackgroundDark : COLORS.mainBackgroundLite} barStyle={isDarkTheme ? 'light-content' : 'dark-content'} />
            <SafeAreaView style={{ flex: 1, backgroundColor: isDarkTheme ? COLORS.mainBackgroundDark : COLORS.mainBackgroundLite, marginTop: Platform.OS === 'ios' ? 35 : 0}}>
                <Stack.Navigator
                    initialRouteName="login"
                    screenOptions={{headerShown: false, headerShadowVisible: true}}
                >
                    <Stack.Screen name="HomeTabs" component={HomeTabs}/>
                    <Stack.Screen name="login" component={LoginScreen}/>
                    <Stack.Screen name="HomePage" component={HomeScreen}/>
                    <Stack.Screen name='Settings' component={Settings}/>
                    <Stack.Screen name='Profile' component={Profile}/>
                    <Stack.Screen name='Security' component={Security}/>
                    {/*<Stack.Screen name='Portret' component={PortretScreen}/>*/}
                    <Stack.Screen name='Obligations' component={Obligations}/>
                    <Stack.Screen name='History' component={HistoryScreen}/>
                    <Stack.Screen name='Invests' component={InvestsScreen}/>
                    <Stack.Screen name='Registration' component={ReginstrationScreen}/>
                    <Stack.Screen name='BirgStakan' component={BirgStakan}/>
                    <Stack.Screen name='PreferenceScreen' component={PreferenceScreen}/>
                    <Stack.Screen name='AmountSelect' component={AmountSelect}/>
                    <Stack.Screen name='ConfirmTransaction' component={ConfirmTransaction}/>
                    <Stack.Screen name = 'DepositScreen' component={DepositScreen}/>
                </Stack.Navigator>
            </SafeAreaView>
        </NavigationContainer>
    )
}

export default function App() {
    return (
        <Provider store={store}>
            <NavigationUses/>
        </Provider>
    );
}