import React from 'react';
import { View, Button, Alert } from 'react-native';


export default class STButton extends React.Component {
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
        onPress={ this.props.onPress }
        color="#FAE1A1"
      >
      </Button>
    </View>
  }
}
