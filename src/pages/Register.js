import React, { Component } from 'react';
import { AppRegistry, TextInput, View } from 'react-native';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return <View>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    </View>
  }
}
