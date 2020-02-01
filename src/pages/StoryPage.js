import React from 'react';
import {
    View,
    Image,
    Button,
    Text
} from 'react-native';

import ProgressBar from '../components/ProgressBar.js'
import STButton from '../components/STButton.js'

import Constants from 'expo-constants';


export default class StoryPage extends React.Component {
    render() {
      const page = this.props.stories[this.props.currentStory.id].pages[this.props.currentStory.page]
        return (
            <View
                className="storyPage"
                style={{
                    height: '100%',
                    flexDirection: 'column',
                    justifyContent: 'flex-start'
                }}
            >
              <View style={{
                  flexDirection: 'row',
                  marginTop: Constants.statusBarHeight,
                  marginRight: 20,

              }}>
                  <ProgressBar progress={ 2 } total={ 5 }/>
                      <STButton
                          title='Exit'
                          color='white'

                      />
                </View>

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
                    <STButton
                        title="Next >"
                        onClick= { (e) => console.log("onClick works") }
                        />
                </View>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
      currentStory: state.currentStory,
      stories: state.stories,
    }
}

export default connect(mapStateToProps)(StoryList)
