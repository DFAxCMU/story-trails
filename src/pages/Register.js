import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, Alert, TextInput } from 'react-native';
import STButton from '../components/STButton.js';
import styles from '../pages/Style.js';



export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Name', username: 'Username', password: 'Password', passComf: "Confirm Password" };
  }

  render() {
    return <View style={styles.register}>
      <Text style={{ 
          fontSize: 30,
          color: '#FAE1A1',
        }}></Text>
        
      <TextInput
        style={styles.textinput}
        clearTextOnFocus
        onChangeText={(text) => this.setState({text})}
        value={this.state.name}>
      </TextInput>
        <TextInput
            style={styles.textinput}
            clearTextOnFocus
            onChangeText={(text) => this.setState({text})}
            value={this.state.username}>
        </TextInput>
        <TextInput
            style={styles.textinput}
            clearTextOnFocus
            onChangeText={(text) => this.setState({text})}
            value={this.state.password}>
        </TextInput>
        <TextInput
            style={styles.textinput}
            clearTextOnFocus
            onChangeText={(text) => this.setState({text})}
            value={this.state.passComf}>
        </TextInput>

        <STButton title="Submit"
                        onPress={() => this.props.navigation.navigate('Home')}> </STButton>

        <STButton title="Back"
                        onPress={() => this.props.navigation.navigate('Home')}> </STButton>
    </View>
  }
}
