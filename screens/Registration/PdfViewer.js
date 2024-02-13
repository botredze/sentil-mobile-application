import React, {useRef} from 'react';
import {View, StatusBar} from 'react-native';
import {Platform, SafeAreaView as SafeAreaViewIOS} from 'react-native';
import {SafeAreaView as SafeAreaViewAndroid} from 'react-native-safe-area-context';
import {useSelector} from "react-redux";
import {selectIsDarkTheme} from "../../redux/slieces/themeSlice";
import {ICONCOlORS} from "../../constants/colors";
import {stylesDark} from "./styles/registrationStylesDark";
import {stylesLite} from "./styles/registrationStyles";
import Pdf from "react-native-pdf";

const PDFViewer = () => {
    const webViewRef = useRef(null);

    const isDarkTheme = useSelector(selectIsDarkTheme);
    let iconColors = isDarkTheme ? ICONCOlORS.dark : ICONCOlORS.lite
    let styles = isDarkTheme ? stylesDark : stylesLite


    const WebViewWrapper = ({children}) => {
        const isIOS = Platform.OS === 'ios';
        const SafeAreaView = isIOS ? SafeAreaViewIOS : SafeAreaViewAndroid;

        return (
            <SafeAreaView style={styles.container}>
                <StatusBar hidden={false}/>
                {children}
            </SafeAreaView>
        );
    };

    const COVER = {uri: 'http://mttp-renaissance.333.kg/files/iXbWWwyEE57Zvfs59Dg1Z69Xc.pdf'}
    const pfvViewer = `https://drive.google.com/viewerng/viewer?embedded=true&url=http://mttp-renaissance.333.kg/files/iXbWWwyEE57Zvfs59Dg1Z69Xc.pdf`
    console.log(pfvViewer)
    return (
        // <WebViewWrapper>
        //     <WebView
        //          //ref={webViewRef}
        //         style={{width: '100%', height: 800}}
        //         source={{uri: pfvViewer}}
        //         // scalesPageToFit={true}
        //         // javaScriptEnabled={true}
        //         // domStorageEnabled={true}
        //         // pullToRefreshEnabled={true}
        //         // bounces={true}
        //         // useWebKit={true}
        //         // scrollEnabled={true}
        //         // originWhitelist={["http://*"]}
        //         // mixedContentMode='always'
        //         // renderLoading={this.renderLoading}
        //     />
        // </WebViewWrapper>

        <View style={{flex: 1}}>
            <Pdf
                style={styles.pdf}
                source={COVER}
                onLoadComplete={(numberOfPages, filePath) => {console.log(`Number of pages: ${numberOfPages}`)
             }}
             onError={()=> {
                 console.log(error)
             }}
             onPressLink={(uri)=> {
                 console.log(`Link pressed: ${uri}`)
             }}
            />
        </View>
    );
};

export default PDFViewer;
