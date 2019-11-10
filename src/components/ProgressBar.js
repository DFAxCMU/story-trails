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
                    flex: 1, 
                    backgroundColor: '#b491c8'
                }}
            >
                <View
                    className="bar"
                    style={{
                        width: percent,
                        height: '100%',
                        backgroundColor: '#3c1361'
                    }}
                >
                </View>
            </View>
        )
    }
}
