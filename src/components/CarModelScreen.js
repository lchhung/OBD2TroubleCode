import React from 'react';
import { StyleSheet, Image, FlatList, View,ScrollView, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainCard from './MainCard';
import {CarInforData} from './CarInforData';
import { responsiveHeight, responsiveWidth, responsiveFontSize } 
from 'react-native-responsive-dimensions';
//import CarSelection from './CarSelection';
import CarSelectButton from './CarSelectButton';

class CarModelScreen extends React.Component {
  constructor() {
    super();
    var CarInforLoad =CarInforData();
    this.state = {
      CarInfor: CarInforLoad.CarInfor,
    };
  }  
  static navigationOptions = {
      title: "OBD2 CODE FINDER",
      headerTitleStyle: { 
        textAlign:"center", 
        flex:1,
        fontSize: responsiveFontSize(2),
    },
  };
  
    render() {
      return (
        <MainCard >
          <FlatList
          data={this.state.CarInfor}
          renderItem={({item}) => {
            return <CarSelectButton onPress={() => { 
              this.props.navigation.navigate('Details', {
              // render Toyota model from here to " detail screen"
              _passedCarModel: item.key,
              get passedCarModel (){
                return this. _passedCarModel;
              },
              set passedCarModel (value){
                this. _passedCarModel=value;
              }
              });
            }} keyitem={item.key}/> ;
          }}
            numColumns={3}
            keyExtractor={(item, index) => index}
            //keyExtractor={(index) => index.toString()}
          >
          </FlatList>
        </MainCard>
      );
    }
  };
export default CarModelScreen;

