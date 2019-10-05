import React from 'react';
import { Text, FlatList, View, Button, Alert } from 'react-native';
import STButton from '../components/STButton.js';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: ["Physician", "Dentist", "Optometrist"] };
  }
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
          fontSize: 70,
          color: '#FAE1A1',
          paddingTop: 80
        }}>
        Categories
        </Text>
        <FlatList
          data={this.state.categories}
          renderItem={({item}) => 
          <STButton 
          title = {item}
          onPress={() => this.props.navigation.navigate('Register')}
          style = {{
            paddingTop: 100,
            marginTop: 100,
            fontSize: 30,
            color: '#FAE1A1'}}>
          </STButton>}
        />
      </View>
    );
  }
}
