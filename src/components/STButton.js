import React from 'react';
import { Text, View, Button, Alert, TouchableOpacity } from 'react-native';


export default class STButton extends React.Component {
  render() {
    return <View>
      <TouchableOpacity
        onPress={ this.props.onClick }
        style={{
          borderRadius: 15,
          margin: 10,
          paddingVertical: 5,
          paddingHorizontal: 15,
          backgroundColor: '#7071e8'
      }}>
          <Text style= {{ 
              color: "white", 
              fontSize: 20,
              fontFamily: 'Avenir-Heavy'
            }}> { this.props.title } </Text>
      </TouchableOpacity>
    </View>
  }
}
