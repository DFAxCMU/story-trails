import React from 'react';
import { Text, View, Image } from 'react-native';


export default class BasicView extends React.Component {
  render() {
    const page = this.props.page
    return <>
    <View
        style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            width: '100%',
            flex: 1,
        }}
        >
    <Image
        resizeMode={'contain'}
        style={{
            flex:1,
            height: '100%',

        }}
        source={{ uri: page.image }}
    />
    </View>

    <View style={{
    fontWeight: "bold"
    }}>
        <Text style={{
        fontSize: 30,
        color: 'black',
        fontStyle:'normal'
        }} >
            { page.text }
        </Text>
    </View>
    </>
  }
}
