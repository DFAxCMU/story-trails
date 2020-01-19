import React from 'react';
import { View } from 'react-native';

export default class ProgressBar extends React.Component {
    render() {
        const percent = ((this.props.progress / this.props.total) * 100) + '%'
        return (
            <View
                className="progressBar"
                style={{
                    height: 30,
                    flex: 1,
                    backgroundColor: '#9ba7fd',
                    borderRadius: 17,
                    marginTop: 10,
                    marginLeft: 20,
                    marginRight: 15,

                }}
            >
                <View
                    className="bar"
                    style={{
                        width: percent,
                        height: '100%',
                        backgroundColor: '#7071e5',
                        borderRadius: 17
                    }}
                >
                </View>
            </View>
        )
    }
}
