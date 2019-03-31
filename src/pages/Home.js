import React from 'react';
import { Text, View, Button, Alert } from 'react-native';
import STButton from '../components/STButton.js';
import styles from '../pages/Style.js';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.home}>
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
