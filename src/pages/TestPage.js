import React from 'react';
import { Text, View } from 'react-native'

class TestPage extends React.Component {
  render() {
    return <View style={{ backgroundColor: 'green', height: 200, }}>
    <Text>This is the Test Page</Text>
    </View>
  }
}

export default TestPage