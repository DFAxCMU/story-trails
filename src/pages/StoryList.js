import React from 'react';
import { Text, View, Button} from 'react-native';
import STButton from '../components/STButton.js';


export default class StoryList extends React.Component {
	render(){
		return (
			<View style={{ 
		        alignItems: 'center',
		        height: '100%', 
		        width: '100%', 
		        backgroundColor: '#66804F',
		    }}>
				<Text> Choose a Story </Text>

				<STButton title="Go Back to Title"
                  		  onPress={() => this.props.navigation.navigate('Home')}> </STButton>

                  		
			</View>
		)

	}

}