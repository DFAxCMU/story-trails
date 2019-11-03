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
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        width: '100%',
                        flex: 1,
                    }}
                    >
                <Image 
                    resizeMode={'contain'}
                    style={{
                        flex:1,
                        height: '100%'
                    }}
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rectangle_example.svg/1280px-Rectangle_example.svg.png'}}
                />
                </View>
                <View>
                    <Text>
                        { text }
                    </Text>
                </View>
                <Button
                    title="<"
                    color="purple"
                />
                <Button
                    title="Next >"
                    color="red"
                />
            </View>
        )
    }
}
