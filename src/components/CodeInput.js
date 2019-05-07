import React from 'react';
import{ TextInput, View, Text, Button, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const CodeInput =({label, onChangeText, onPress, value, underlineColorAndroid}) =>{
    const {inputStyle, labelStyle, containerStyle} =styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
            autoCapitalize='characters'
            placeholder='Code:e.g.P0420'
            style={inputStyle}
            value ={value}
            onChangeText ={onChangeText}
            underlineColorAndroid={underlineColorAndroid}   
            />
            <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
            <Text style={styles.buttonTextSize}>Check</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CodeInput;

const styles={
    inputStyle:{
        color:'#000',
        paddingRight:'5%',
        //paddingLeft:'5%',
        fontSize:responsiveFontSize(2),
        //lineHeight:responsiveFontSize(2),
        flex:1.5,
        fontWeight: 'bold',
    },
    labelStyle:{
        fontSize:20,
        paddingLeft:'2%',
        flex:1.5,
        color: 'black',
        fontWeight: 'bold'
    },
    containerStyle:{
        //height:'100%',
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    buttonTextSize: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
          //padding: 20
      },
      buttonStyle:{
        flex:1.0,
        flexDirection: 'column',
        alignItems: 'center',
        //justifyContent: 'center',
       // textAlign: 'center',
        margin: '3%',
        backgroundColor: '#e91e63',
        borderRadius: 5,
        width: '30%',
        aspectRatio: 2.5/1,
        //left: '10%',
        

      }
}