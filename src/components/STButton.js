import React from 'react';
import {
  View,
  Button,
  Alert,
  TouchableHighlight,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

export default class STButton extends React.Component {
  render() {
    return (
      <View>
        <TouchableHighlight style={styles.button} onPress={this.props.onPress}>
          <Text style={{color:'#FFFFFF', size:30}}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDA448',
    borderStyle: 'solid',
    borderRadius: 20,
    padding: 30,
    marginVertical: 20,
    width: 0.8*Dimensions.get('window').width,
  },
});
