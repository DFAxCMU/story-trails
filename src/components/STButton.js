import React from 'react';
import { Alert, View, Button } from 'react-native';

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
        onPress={ () => Alert.alert("hello", "world") }
        color="#FAE1A1"
      >
      </Button>
    </View>
  }
}
