import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import FindMainCard from './FindMainCard';
import CodeEnterCard from './CodeEnterCard';
import ShowContentCard from './ShowContentCard';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import CodeInput from './CodeInput';
import *as firebase from 'firebase';
import { YellowBox } from 'react-native';
import _ from 'lodash';

const config = {
  apiKey: "AIzaSyBBpQAmwHyebPXt-ygGH18dD2BmoOQtL3c",
  authDomain: "testdatatry.firebaseapp.com",
  databaseURL: "https://testdatatry.firebaseio.com",
  projectId: "testdatatry",
  storageBucket: "testdatatry.appspot.com",
  messagingSenderId: "3709907036",
  appId: "1:3709907036:web:e8b2b0414893abab"
};
firebase.initializeApp(config);

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

class CodeDetails extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: 'Go back',
      headerTitleStyle: { 
        flex:1,
        fontSize: 25,
      },
    };
  };

  constructor(props) {
    super(props);
   
    //console.log({passedCarModel});
    this.state = {
      
      code: '',
      codes: []
    
  }
  this.addItem = this.addItem.bind(this);
  }

  addItem () {
    if (!this.state.code) return;
    const  passedCarModel= this.props.navigation.state.params.passedCarModel;
    const codeData = passedCarModel + "/"+this.state.code;
      // " Toyota navigated from the first screen"     
      firebase
      .database()
      .ref(codeData)
      .orderByValue()
      .on("value", snapshot => {
        const data = snapshot.val()
        if (snapshot.val()) {
          const getCode = [];
          Object
            .keys(data)
            .forEach(code => getCode.push(data[code]));
          this.setState({
            codes: getCode
          })
        }
      });
  }
 // _keyExtractor = (item, index) => item.id;
  
  render() {
    const  carModelLabel= this.props.navigation.state.params.passedCarModel;
    //var passedCarModel= 10;
    return (
      <FindMainCard >
        <CodeEnterCard>
        <CodeInput
        label={carModelLabel}
        value={this.state.code}
        onChangeText={(text) => this.setState({code: text})}
        onPress={this.addItem}
        underlineColorAndroid ='black'
        />
        </CodeEnterCard>
        <ShowContentCard>
            {/* <Text style= {styles.contentTextStyle}> 
            {passedCarModel}
            </Text> */}
            
            <FlatList data={this.state.codes}
          renderItem={
            ({item}) => 
            <View style={styles.listItemContainer}>
              <Text style={styles.listItem}>
                {item}
              </Text>
            </View>
          }
          keyExtractor={(index) => index.toString()}
          />
        </ShowContentCard>
      </FindMainCard>
      
    );
  }
}

export default CodeDetails;
const styles = StyleSheet.create({
  textInputStyle:{
    height:'50%',
    width: '80%',
    fontSize: responsiveFontSize (3),
    alignItems: 'center'
  },
  textTitleStyle:{
    fontSize: responsiveFontSize(3),
    color: 'black',
  },
  contentTextStyle:{
    fontSize: responsiveFontSize(2),
    color: 'black'
  },
  listItemContainer: {
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 5
  },
  listItem: {
    fontSize: 25,
    padding: 5,
    color: 'black',
  }
});