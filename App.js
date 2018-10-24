import React from 'react';
import { Text, View, Button, Alert } from 'react-native';

export default class App extends React.Component {
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
        <STButton title="Register"> </STButton>
      </View>
    );
  }
}

class STButton extends React.Component {
  render() {
    return <View
        style={{
          borderWidth: 4,
          borderColor: '#FAE1A1',
          borderStyle: 'solid',
          borderRadius: 8,
          margin: 8,
          padding: 8,
          width: 170,
      }}>
      <Button 
        title={ this.props.title }
        onPress={ () => Alert.alert("hello", "world") }
        color="#FAE1A1"
      >
      </Button>
    </View>
  }
}