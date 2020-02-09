import React from 'react';
import { TextInput, FlatList, Text, View, Button, Image, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import STButton from '../components/STButton.js';
import { updateBlanks } from '../actions/blanksActions.js'




class BlanksForm extends React.Component {

  render() {
    return (
      <View
      className="BlanksForm"
      style={{
          backgroundColor: "white",
          flexDirection: 'column',
          height: "100%"
      }}>

        <View
            style={{
                flexDirection: 'column',
                margin: 30
            }}
        >
            <FlatList
              data= {this.props.blanks}
              renderItem={({item}) => 
              <View>
                <Text style={{fontSize: 20}}>{item.title}</Text>
                <TextInput 
                style={{
                  borderColor: "gray", 
                  borderRadius: 5, 
                  borderWidth: 1, 
                  height: 40}}
                
                  onSubmitEditing={(event) => updateBlanks( event.nativeEvent.text)}>{
                item.placeholder}</TextInput>
              </View>}
            />
        </View>

</View>
    )
  }
}

function mapStateToProps(state) {
  return {
      blanks: state.blanks,
  }
}

const mapDispatchToProps = {
  updateBlanks,
}

export default connect(mapStateToProps)(BlanksForm)
