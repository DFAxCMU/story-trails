import React from 'react';
import {
    View,
    Image,
    Button,
    Text
} from 'react-native';

import { useState, useDispatch } from 'react-redux';

import ProgressBar from '../components/ProgressBar.js'
import STButton from '../components/STButton.js'
import BasicView from '../components/BasicView.js'
import ITIView from '../components/ITIView.js'
import TITView from '../components/TITView.js'

import Constants from 'expo-constants';

import { nextPage, backPage } from '../actions/storyActions.js'

function layoutView(page) {
    switch (page.type) {
        case "ITIView":
            return <ITIView page={ page }/>

        case "Basic":
            return <BasicView page={ page }/>

        case "TITView":
            return <TITView page={ page }/>
    }
}

export default function StoryPage() {
    const currentStory = useSelector(state => state.currentStory);
    const page = useSelector(state => state.stories.data[currentStory.id].pages[currenStory.page])
    const pageNumber = currentStory.page + 1
    const totalPages = useSelector(state => state.stories.data[currentStory.id].pages.length)
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
                <ProgressBar progress={ pageNumber } total={ totalPages }/>
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
                }}
            >
                { this.props.currentStory.page != 0 &&
                <STButton
                    title="<"
                    onClick={ () => dispatch(backPage()) } 
                />}
                { (this.props.currentStory.page) != 
                        (this.props.stories[this.props.currentStory.id].pages.length - 1) &&
                            <STButton
                                title="Next >"
                                onClick={ () => dispatch(nextPage()) } 
                            />
                }
            </View>
        </View>
    )
}
