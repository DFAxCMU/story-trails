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
        const text = "Sometimes it can be hard to see the board in school"

        return (
            <View
                className="storyPage"
                style={{
                    height: '100%',
                    flexDirection: 'column',
                }}
            >
                <ProgressBar progress={ 2 } total={ 5 }/>
                <View
                    style={{ width: 50, height: 50, }}
                >
                    <Button
                        title='X'
                        color='blue'
                    />
                </View>

                <Image
                    style={{
                        width: 200,
                        height: 200,
                    }}
                    source={{ uri: 'https://i.redd.it/x69x81e4ecm31.jpg'}}
                />
                <View>
                    <Text>
                        { text }
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
