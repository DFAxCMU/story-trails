import React from 'react';
import {
  View,
  Button,
  Alert,
  TouchableHighlight,
  Text,
  StyleSheet,
} from 'react-native';

export default class STButtonSmall extends React.Component {
  render() {
    return (

        <View style={{
          flex: 1,
          flexWrap: 'wrap', 
          alignItems: 'flex-start', 
          justifyContent: 'center',
          flexDirection:'row',          
        }}>

          <TouchableHighlight 
          style={{

            backgroundColor: '#DDA448',
            borderStyle: 'solid',
            padding: 10,
            marginVertical: 10,
            width: 100,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            
          }} 
          onPress={this.props.onPress}>
            <Text style={{color:'#FFFFFF', size:10}}>{this.props.title}</Text>
          </TouchableHighlight>

        </View>

        // <TouchableHighlight style={styles.button} onPress={this.props.onPress}>
        // <TouchableHighlight style={styles.buttonContainer} onPress={this.props.onPress}>
          // <View style={styles.buttonItem}>
          // <Text style={{color:'#FFFFFF', size:10}}>{this.props.title}</Text>
          // </View>
        // </TouchableHighlight>

    );
  }
}
    // <View
    //   style={{
    //     borderWidth: 4,
    //     borderColor: '#FFFFFF',
    //     backgroundColor: '#DDA448',
    //     borderStyle: 'solid',
    //     borderRadius: 20,
    //     padding: 50,
    //     marginVertical: 50,
    //     // width: 400,
    // }}>
    // <Button
    //   // title={ this.props.title }
    //   title = "Clear button"
    //   onPress={ this.props.onPress }
    //   color="#DDA448"

    // >
    // </Button>
    // </View>

// const styles2 = StyleSheet.create({
  
//   button: {
//     backgroundColor: '#DDA448',
//     borderStyle: 'solid',
//     borderRadius: 20,
//     padding: 10,
//     marginVertical: 10,
//     flex: 5,
//     // width: 100,
//   },


// });
