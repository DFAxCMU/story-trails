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
import BasicView from '../components/BasicView.js'
import ITIView from '../components/ITIView.js'
import TITView from '../components/TITView.js'

import Constants from 'expo-constants';

import { nextPage, backPage } from '../actions/storyActions.js'


class StoryPage extends React.Component {
    layoutView(page) {
        switch (page.type) {
            case "ITIView":
                return <ITIView page={ page }/>

            case "Basic":
                return <BasicView page={ page }/>

            case "TITView":
                return <TITView page={ page }/>
        }
    }
    render() {
      const page = this.props.stories[this.props.currentStory.id].pages[this.props.currentStory.page]
      const currentpage=this.props.currentStory.page +1
      const totalpage=this.props.stories[this.props.currentStory.id].pages.length
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
                  <ProgressBar progress={ currentpage } total={ totalpage }/>
                      <STButton
                          title='Exit'
                          color='white'
                          onClick={ () => {
                            this.props.navigation.popToTop()
                          }}
                      />
                </View>

                { this.layoutView(page) }

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
