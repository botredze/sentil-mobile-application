import React, {useRef, useState} from 'react';
import {View, StatusBar, Alert} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {selectIsDarkTheme} from "../../redux/slieces/themeSlice";
import {stylesDark} from "./styles/registrationStylesDark";
import {stylesLite} from "./styles/registrationStyles";
import Pdf from "react-native-pdf";
import {selectPdfViewed, setPdfViewed} from "../../redux/slieces/registrationSlice";

const PDFViewer = () => {
    const isDarkTheme = useSelector(selectIsDarkTheme);

    const dispatch = useDispatch()
    let styles = isDarkTheme ? stylesDark : stylesLite;

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const src = {
        uri: 'http://broker.data.kg/files/dogovor.pdf',
        cache: true,
    };

    const onPageChanged = (page, totalPages) => {
        setCurrentPage(page);
        setTotalPages(totalPages);
        if (page === totalPages) {
            dispatch(setPdfViewed(true))
        }
    };

    return (
        <View style={{ width: '100%', height: '93%', alignItems: 'center', alignSelf: 'center'}}>
            <Pdf
                trustAllCerts={false}
                style={styles.pdf}
                source={src}
                activityIndicatorProps={{
                    color: '#EEC03F',
                    progressTintColor: '#EEC03F',
                }}
                onLoadComplete={(numberOfPages, filePath) => {console.log(`Number of pages: ${numberOfPages}`)}}
                onError={(error) => { console.log(error)}}
                onPageChanged={(page, totalPages) => onPageChanged(page, totalPages)}
            />
        </View>
    );
};

export default PDFViewer;
