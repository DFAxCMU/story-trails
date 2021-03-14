import React from 'react';
import { TextInput, FlatList, Text, View, Button, Image, TouchableOpacity } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import STButton from '../components/STButton.js';
import { updateBlanks } from '../actions/blanksActions.js'

export default function BlanksForm(props) {
    const blanks = useSelector(state => state.blanks);
    const dispatch = useDispatch();
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
                    data= {blanks}
                    renderItem={({item}) => 
                        <View>
                            <Text style={{fontSize: 20}}>{item.title}</Text>
                            <TextInput 
                                style={{
                                    borderColor: "gray", 
                                    borderRadius: 5, 
                                    borderWidth: 1, 
                                    height: 40}}

                                onSubmitEditing={(event) => dispatch(updateBlanks(item.id, event.nativeEvent.text))}>
                                { item.placeholder}
                            </TextInput>
                        </View>}
                />
            </View>

        </View>
    )
}
