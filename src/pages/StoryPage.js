import React from 'react';
import {
    View,
    Image,
    Button,
    Text
} from 'react-native';

import { connect } from 'react-redux';

import ProgressBar from '../components/ProgressBar.js'
import STButton from '../components/STButton.js'

import Constants from 'expo-constants';

import { nextPage, backPage } from '../actions/storyActions.js'


class StoryPage extends React.Component {
    render() {
        console.log(this.props)
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
                    { this.props.currentStory.page != 0 &&
                      <STButton
                        title="<"
                        onClick={ () => this.props.backPage() } 
                      />}
                    { (this.props.currentStory.page) != 
                      (this.props.stories[this.props.currentStory.id].pages.length - 1) &&
                      <STButton
                        title="Next >"
                        onClick={ () => this.props.nextPage() } 
                      />}
                </View>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentStory: state.currentStory,
        stories: state.stories.data,
    }
}

const mapDispatchToProps = {
    nextPage,
    backPage
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryPage)
