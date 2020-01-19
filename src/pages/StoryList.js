import React from 'react';
import { Text, View, Button, Image, TouchableHighlight } from 'react-native';

import { connect } from 'react-redux';
import STButton from '../components/STButton.js';


class StoryList extends React.Component {
	render(){
	  if(this.props.loading) {
	    return <View style={{ height: "100%", alignItems: 'center', justifyContent: 'center', }}>
	      <Text> Loading... </Text>
	    </View>
	  }
		return (
			<View
				className="storyList"
				style={{
				backgroundColor: '#4d4c4e',
				flexDirection: 'column'
		    }}>
		        
				<TouchableHighlight>
				<View
					style={{
						flexDirection: 'row',
						height: 50,
						alignItems: 'center'

					}}>
					<Image source={require('../../assets/prof.png')}
						resizeMode={'contain'}
					 	style={{
                       		height: '100%',
                       		width: 50,
                       		}}/>
					<Text> Hello, Jack! </Text>
					
				</View>
					
				</TouchableHighlight>

				<View
					style={{
						flexDirection: 'column',
						backgroundColor: 'white',
						height: "80%",
						borderRadius: 10,
						width: "80%",
						alignSelf: 'center'
					}}
					>
					{ this.props.data.map(function(story) {
					  return <Button  title={ story.title} />
					  
					})  }
				</View>

				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						height: "10%"
					}}
					>
					{/* add medical button */}
					<Button
						title = "temp7"/>
					{/* add dentist button */}
					<Button
						title = "temp8"/>
					{/* add optical button */}
					<Button
						title = "temp9"/>
					{/* add pencil button */}
					<Button
						title = "temp10"/>
				</View>
  		
			</View>
		)

	}

}

function mapStateToProps(state) {
  return state.stories
}

export default connect(mapStateToProps)(StoryList)