import React from 'react';
import { View, ScrollView } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } 
from 'react-native-responsive-dimensions';

const CodeEnterCard= (props) => {
    return (
            <View style={styles.MainContainer}  >
                {props.children}
            </View >
       
    );
};
 const styles = {
     MainContainer: {
        left: '2%',
        width: '95%',
        height: '15%',
        backgroundColor:'white',
        top: '2%',
        borderRadius: responsiveWidth(2),
        borderWidth: responsiveWidth(0.3),
        
    },
   
};
export default CodeEnterCard;
