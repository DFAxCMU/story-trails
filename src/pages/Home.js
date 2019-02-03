import React from 'react';
import { Text, View, Button, Alert } from 'react-native';
import STButton from '../components/STButton.js';

export default class Home extends React.Component {
  render() {
    return (
      <View style={{ 
        justifyContent: 'center', 
        alignItems: 'center',
        height: '100%', 
        width: '100%', 
        backgroundColor: '#66804F',
      }}>
        <Text style={{ 
          fontSize: 30,
          color: '#FAE1A1',
        }}>
        STORY TRAILS
        </Text>
        <STButton title="Login"> </STButton>
        <STButton title="Register"
                  onPress={() => this.props.navigation.navigate('Register')}> </STButton>
        <STButton title="Start"
                  onPress={() => this.props.navigation.navigate('StoryList')}> </STButton>
      </View>
    );
  }
}
