import React from 'react';
import { Button, Image, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CarModelScreen from './CarModelScreen';
import CodeDetails from './CodeDetails';


const RootStack = createStackNavigator(
  {
    Home: {
      screen: CarModelScreen,
    },
    Details: {
      screen: CodeDetails,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const MainScreen = createAppContainer(RootStack);

export default MainScreen;