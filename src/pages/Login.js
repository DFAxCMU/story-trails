import React from 'react';
import { Text, View, Button, Alert, TextInput } from 'react-native';
import STButton from '../components/STButton.js';
import styles from '../pages/Style.js';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.username = { text: 'Username'};
    this.password = { text: 'Password' };
  }
  render() {
    return (
      <View style={styles.login}>
        <Text style={{ 
          fontSize: 30,
          color: '#FAE1A1',
        }}></Text>
        <TextInput
          	style={styles.textinput}
            clearTextOnFocus
            onChangeText={(text) => this.setState({text})}
            value={this.username.text}>
        </TextInput>
        <TextInput
            style={styles.textinput}
          	clearTextOnFocus
          	onChangeText={(text) => this.setState({text})}
          	value={this.password.text}>
        </TextInput>
        <STButton title="Submit"
                        onPress={() => this.props.navigation.navigate('Home')}> </STButton>
      </View>
    );
  }
}






