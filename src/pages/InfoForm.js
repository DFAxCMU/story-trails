import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, Alert, TextInput } from 'react-native';
import STButton from '../components/STButton.js';



export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Name', username: 'Username', password: 'Password', passComf: "Confirm Password" };
  }

  render() {
    return <View style={{ 
        justifyContent: 'center', 
        alignItems: 'center',
        height: '100%', 
        width: '100%', 
        backgroundColor: '#66804F',
        borderBottomColor: '#000000',
        borderBottomWidth: 3,
      }}>
      <Text style={{ 
          fontSize: 30,
          color: '#FAE1A1',
        }}></Text>
      <TextInput
        style={{
          height: 50, 
          width: 200, 
          borderWidth: 4,
          borderColor: '#FAE1A1',
          borderStyle: 'solid',
          borderRadius: 8,
          margin: 8,
          padding: 8,
          color: "#FAE1A1"}}
        clearTextOnFocus
        onChangeText={(text) => this.setState({text})}
        value={this.state.name}>
      </TextInput>
        <TextInput
            style={{
              height: 50, 
              width: 200, 
              borderWidth: 4,
              borderColor: '#FAE1A1',
              borderStyle: 'solid',
              borderRadius: 8,
              margin: 8,
              padding: 8,
              color: "#FAE1A1"}}
            clearTextOnFocus
            onChangeText={(text) => this.setState({text})}
            value={this.state.username}>
        </TextInput>
        <TextInput
            style={{
              height: 50, 
              width: 200, 
              borderWidth: 4,
              borderColor: '#FAE1A1',
              borderStyle: 'solid',
              borderRadius: 8,
              margin: 8,
              padding: 8,
              color: "#FAE1A1"}}
            clearTextOnFocus
            onChangeText={(text) => this.setState({text})}
            value={this.state.password}>
        </TextInput>
        <TextInput
            style={{
              height: 50, 
              width: 200, 
              borderWidth: 4,
              borderColor: '#FAE1A1',
              borderStyle: 'solid',
              borderRadius: 8,
              margin: 8,
              padding: 8,
              color: "#FAE1A1"}}
            clearTextOnFocus
            onChangeText={(text) => this.setState({text})}
            value={this.state.passComf}>
        </TextInput>
        <STButton title="Submit"
                        onPress={() => this.props.navigation.navigate('Home')}> </STButton>
    </View>
  }
}
