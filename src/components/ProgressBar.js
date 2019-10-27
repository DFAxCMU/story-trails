import React from 'react';
import { View } from 'react-native';

export default class ProgressBar extends React.Component {
    render() {
        const percent = ((this.props.progress / this.props.total) * 100) + '%'
        return (
            <View 
                className="progressBar"
                style={{
                    height: 50,
                    backgroundColor: 'green'
                }}
            >
                <View
                    className="bar"
                    style={{
                        width: percent,
                        height: '100%',
                        backgroundColor: 'pink'
                    }}
                >
                </View>
            </View>
        )
    }
}
