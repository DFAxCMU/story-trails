import React from 'react';
import {
    View,
    Image,
    Button,
    Text
} from 'react-native';

import ProgressBar from '../components/ProgressBar.js'

export default class StoryPage extends React.Component {
    render() {
        const str = "Sometimes it can be hard to see the board in school"


        return (
            <View
                className="storyPage"
                style={{
                    height: '150%',
                    flexDirection: 'column',
                }}
            >
                <ProgressBar progress={ 2 } total={ 5 }/>
                <View
                    style={{ width: 100, height: 100, }}
                >
                    <Button
                        title='X'
                        color='blue'
                    />
                </View>

                <Image
                    style={{
                        width: 400,
                        height: 400,
                    }}
                    source={{ uri: 'https://i.redd.it/x69x81e4ecm31.jpg'}}
                />


                <View style={{
                  fontWeight: "bold"
                }}>
                    <Text style={{
                      fontSize: 30,
                      color: 'black',
                      fontStyle:'normal'
                    }} >
                        { str }

                    </Text>
                </View>
                <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    // maxWidth: '70%'
                }}
                >
                    <Button
                        title="<"
                        color="purple"
                        />
                    <Button
                        title="Next >"
                        color="purple"
                        />
                </View>
            </View>
        )
    }
}
