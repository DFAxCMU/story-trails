import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, Alert, TextInput } from 'react-native';
import STButton from '../components/STButton.js';
import InfoFormTextInput from '../components/InfoFormTextInput.js';


export default class InfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { doctorsName: '', FriendsName: '', password: 'Password', passComf: "Confirm Password" };
  }

  render() {
    return <View style={{
        justifyContent: 'center', 
        height: '100%', 
        width: '100%', 
        backgroundColor: '#66804F',
        borderBottomColor: '#000000',
        borderBottomWidth: 3,
      }}>
      <View style={{
        flexDirection: 'row',
        alignItems:'center'
      }}>
        <Text style={{ 
          alignItems: 'left',
          fontSize: 18,
          color: '#FAE1A1'}}>
        Doctors Name
       </Text>
      <InfoFormTextInput>
       </InfoFormTextInput>
      </View>
      <View style={{
        flexDirection: 'row',
        alignItems:'center'
      }}>
        <Text style={{ 
          alignItems: 'left',
          fontSize: 18,
          color: '#FAE1A1'}}>
    <InfoFormTextInput>
        </InfoFormTextInput>

    <InfoFormTextInput>
        </InfoFormTextInput>

    <InfoFormTextInput>
        </InfoFormTextInput>

        <STButton title="Submit"
                        onPress={() => this.props.navigation.navigate('Home')}> </STButton>
    </View>
  }
}



Is there something going on with the View and /View? I'm confused about how we determine what shows on the form

Below is just copied and pasted because I didn't know where InfoFormTextInput was defined
       <TextInput
          style={{
          alignSelf: 'center',
          height: 30, 
          width: 200, 
          borderWidth: 1,
          borderColor: '#FAE1A1',
          borderStyle: 'solid',
          borderRadius: 8,
          margin: 8,
          textAlign: 'center',
          padding: 8, 
          color: "#FAE1A1"}}
        clearTextOnFocus
        onChangeText={(text) => this.setState({text})}
        value={this.state.doctorsName}>
      </TextInput>