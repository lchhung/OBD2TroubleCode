import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } 
from 'react-native-responsive-dimensions';

const CarSelectButton =({onPress, keyitem}) =>{
    return(
        <TouchableOpacity onPress ={onPress} style={styles.buttonStyle}>
            <Text style ={styles.buttonTextSize} >{keyitem}</Text>
        </TouchableOpacity>
    );
};
export default CarSelectButton;

const styles = StyleSheet.create({
    buttonStyle:{
      //flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      margin: '1%',
      backgroundColor: '#04444b',
      borderRadius: responsiveWidth(2),
      width: '30%',
      aspectRatio: 3/1,
      left: '10%',
    },
    buttonTextSize: {
      fontSize: responsiveFontSize(2),
      fontWeight: 'bold',
      color: 'white',
        //padding: 20
    },
  });
  