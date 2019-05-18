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
import PropTypes from 'prop-types';

const config = {
  apiKey: "AIzaSyAi2a4MktZJl5d4yB9RVsh2d7hVLD5TDfs",
  authDomain: "odb2codedata.firebaseapp.com",
  databaseURL: "https://odb2codedata.firebaseio.com",
  projectId: "odb2codedata",
  storageBucket: "odb2codedata.appspot.com",
  messagingSenderId: "202589990617",
  appId: "1:202589990617:web:e825038884c9b608"
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
        fontSize: 18,
      },
    };
  };

  constructor(props) {
    super(props);
   
    //console.log({passedCarModel});
    this.state = {
      enteredCode: '',
      codeTitle: [],
      causes:[],
      possibleCauseText:'',
      symptom:'',
      symptomTitle: '',
      desc:'',
      descTitle:''
  }
  this.addItem = this.addItem.bind(this);
  }

  addItem () {
    if (!this.state.enteredCode) return;
    const  passedCarModel= this.props.navigation.state.params.passedCarModel;

    //Render code title
    const codeTitleData = passedCarModel + "/"+this.state.enteredCode+"/CodeTitle";    
      firebase
      .database()
      .ref(codeTitleData)
      .orderByValue()
      .on("value", snapshot => {
        const data = snapshot.val()
        if (snapshot.val()) {
          const getCodeTitle = [];
          Object
            .keys(data)
            .forEach(enteredCode => getCodeTitle.push(data[enteredCode]));
          this.setState({
            codeTitle: getCodeTitle,
          })
        }
      });


    //Render possible causes
    const causesData = passedCarModel + "/"+this.state.enteredCode+"/Causes";    
      firebase
      .database()
      .ref(causesData)
      .orderByValue()
      .on("value", snapshot => {
        const data = snapshot.val()
        if (snapshot.val()) {
          const getCauses = [];
          Object
            .keys(data)
            .forEach(enteredCode => getCauses.push(data[enteredCode]));
          this.setState({
            causes: getCauses,
            possibleCauseText: 'Possible Causes:'
          })
        }
      });

    //Render Symptom
    const symptomData = passedCarModel + "/"+this.state.enteredCode+"/Symptom";    
    firebase
    .database()
    .ref(symptomData)
    .orderByValue()
    .on("value", snapshot => {
      const data = snapshot.val()
      if (snapshot.val()) {
        const getSymptom = [];
        Object
          .keys(data)
          .forEach(enteredCode => getSymptom.push(data[enteredCode]));
        this.setState({
          symptom: getSymptom,
          symptomTitle: 'Possible symptoms:'
        })
      }
    });

    //Render Description
    const descData = passedCarModel + "/"+this.state.enteredCode+"/Desc";    
    firebase
    .database()
    .ref(descData)
    .orderByValue()
    .on("value", snapshot => {
      const data = snapshot.val()
      if (snapshot.val()) {
        const getDesc = [];
        Object
          .keys(data)
          .forEach(enteredCode => getDesc.push(data[enteredCode]));
        this.setState({
          desc: getDesc,
          descTitle: 'Description:'
        })
      }
    });
  }

  render() {
    const  carModelLabel= this.props.navigation.state.params.passedCarModel;
    return (
      <FindMainCard >
        <CodeEnterCard>
        <CodeInput
        label={carModelLabel}
        value={this.state.enteredCode}
        onChangeText={(text) => this.setState({enteredCode: text})}
        onPress={this.addItem}
        underlineColorAndroid ='black'
        />
        </CodeEnterCard>
        <ShowContentCard>
        <Spacer size={15} />
        <Text style={styles.causeTextTitle}>{this.state.codeTitle}</Text>
        <Spacer size={15} />
        <Text style={styles.causeTextTitle}>{this.state.possibleCauseText}</Text>
            <FlatList data={this.state.causes}
            renderItem={
            ({item}) => 
            <View style={styles.listItemContainer}>
              <Text style={styles.listItem}>
                {item}
              </Text>
            </View>}
          keyExtractor={(index) => index.toString()}
          />
           <Spacer size={15} />
           <Text style={styles.causeTextTitle}>{this.state.symptomTitle}</Text>
           <Text style={styles.listItem}>{this.state.symptom}</Text>
           <Spacer size={15} />
           <Text style={styles.causeTextTitle}>{this.state.descTitle}</Text>
           <Text style={styles.listItem}>{this.state.desc}</Text>
           <Spacer size={15} />
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
    fontSize: 20,
    alignItems: 'center'
  },
  textTitleStyle:{
    fontSize: 20,
    color: 'black',
  },
  contentTextStyle:{
    fontSize: 18,
    color: 'black'
  },
  listItemContainer: {
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 5
  },
  listItem: {
    fontSize: 18,
    //padding: "5%",
    color: 'black',
    right: '5%',
    left:'5%',
    marginRight: '10%'
  },
  causeTextTitle:{
    fontSize: 18,
    fontWeight: 'bold',
    
    color: 'blue',
    marginRight: '10%',
    marginLeft: '5%'
  }
});
const Spacer = ({ size }) => (
  <View style={{ flex: 1, height: size }} />
);

Spacer.propTypes = {
  size: PropTypes.number,
};

Spacer.defaultProps = {
  size: 20,
};