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
