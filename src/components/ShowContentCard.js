import React from 'react';
import { SafeAreaView, View, ScrollView } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } 
from 'react-native-responsive-dimensions';

const ShowContentCard= (props) => {
    return (
        <SafeAreaView style={styles.MainContainer}>
            <ScrollView>
                {props.children}
            </ScrollView>
        </SafeAreaView>
       
    );
};

 
export default ShowContentCard;

const styles = {
    MainContainer: {
       left: '2%',
       width: '95%',
       height: '70%',
       backgroundColor:'white',
       top: '5%',
       borderRadius: responsiveWidth(2),
       borderWidth: responsiveWidth(0.3),
   },
};
