import React from 'react';
import { Text, View, Button} from 'react-native';
import STButton from '../components/STButton.js';
import styles from '../pages/Style.js';


export default class StoryList extends React.Component {
	render(){
		return (
			<View style={styles.home}>
				<Text> Choose a Story </Text>

				<STButton title="Go Back to Title"
                  		  onPress={() => this.props.navigation.navigate('Home')}> </STButton>
				<STButton title="Wearing Glasses"
                  		  onPress={() => this.props.navigation.navigate('Glasses')}> </STButton>
                  		
			</View>
		)

	}

}