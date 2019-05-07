import React from 'react';
import { View, ScrollView } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } 
from 'react-native-responsive-dimensions';

const FindMainCard = (props) => {
    return (
        <View style={styles.fullView}>
            {props.children}
        </View>
    );
};
export default FindMainCard;

const styles = {
    fullView :{
        backgroundColor:'#607d8b',
        height: '100%',
        flex:1,
    }
};