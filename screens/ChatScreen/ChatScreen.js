import React, {useState, useEffect} from 'react';
import {
    View,
    TextInput,
    Button,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    TouchableOpacity,
    Text
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import {stylesLite} from './chatStyle'
import {useNavigation} from "@react-navigation/native";
import {stylesDark} from "./chatStyleDark";
import {useSelector} from "react-redux";
import {selectIsDarkTheme} from "../../redux/slieces/themeSlice";
import {ICONCOlORS} from "../../constants/colors";

export default function ChatScreen() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const navigation = useNavigation()

    const isDarkTheme = useSelector(selectIsDarkTheme);
    let iconColors = isDarkTheme ? ICONCOlORS.dark : ICONCOlORS.lite
    let styles = isDarkTheme ? stylesDark : stylesLite

    const sendMessage = () => {
        if (message.trim() === '') return;
        setMessages(prevMessages => [...prevMessages, {text: message, fromMe: true}]);
        setMessage('');
    };
    //
    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         setMessages(prevMessages => [...prevMessages, { text: "Привет, как дела?", fromMe: false }]);
    //     }, 2000);
    //
    //     return () => clearTimeout(timeout);
    // }, []);

    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='arrow-back' size={30} color={iconColors}/>
                </TouchableOpacity>

                {/*<TouchableOpacity style={{display: "flex", flexDirection: 'row', gap: 10}}>*/}
                {/*    <Text style={{lineHeight: 29, fontSize: 18}}>Выйти</Text>*/}
                {/*    <Ionicons name='power' size={30} color='red'/>*/}
                {/*</TouchableOpacity>*/}

            </View>


            <View style={styles.title}><Text style={styles.profileText}>Чат поддержки</Text></View>

            <KeyboardAvoidingView style={{flex: 1}} behavior="padding"
                                  keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
                <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
                    {messages.map((msg, index) => (
                        <View key={index} style={[styles.messageContainer, msg.fromMe && styles.myMessage]}>
                            <View style={styles.messageBubble}>
                                <Text style={styles.msgText}>{msg.text}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
                <View style={styles.inputContainer}>
                    <TextInput
                        value={message}
                        onChangeText={text => setMessage(text)}
                        placeholder="Введите сообщение..."
                        placeholderTextColor = {iconColors}
                        style={[styles.input, {color: iconColors}]}

                    />
                    {/*<Button title="Отправить" onPress={sendMessage}/>*/}

                    <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                        <Ionicons name="send" size={24} color={iconColors} />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
};