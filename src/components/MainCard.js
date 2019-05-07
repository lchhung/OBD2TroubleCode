import React from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } 
from 'react-native-responsive-dimensions';


const MainCard = (props) => {
    return (
        <View style={styles.fullView}>
            <View style={styles.MainContainer}  >
                {props.children}
            </View >
        </View>
    );
};
 
export default MainCard;

const styles = {
    MainContainer: {
       left: '3%',
       width: '95%',
       height: '88%',
       backgroundColor:'white',
       top: '2%',
       borderRadius: responsiveWidth(2),
       borderWidth: responsiveWidth(0.3),
   },
   fullView :{
       flex:1,
       backgroundColor:'#607d8b',
       height: '100%',
   }
};