import React from 'react';
import { Text, View, Button, Image, TouchableOpacity } from 'react-native';

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
				backgroundColor: '#4d4d4d',
				flexDirection: 'column',
				height: "100%"
		    }}>
		        
				<TouchableOpacity>
				<View
					style={{
						flexDirection: 'row',
						height: 50,
						alignItems: 'center',
						marginTop: 20,
						marginLeft: 5
					}}>
					<Image source={require('../../assets/prof.png')}
						resizeMode={'contain'}
					 	style={{
                       		height: '100%',
                       		width: 50,
                       		}}/>
					<Text style= {{ 
		              color: "white", 
		              fontSize: 20,
		              fontFamily: 'Avenir-Heavy'
		          	}}> Hello, Jack! </Text>
					
				</View>
					
				</TouchableOpacity>

				<View
					style={{
						flexDirection: 'column',
						backgroundColor: 'white',
						height: "80%",
						borderRadius: 20,
						width: "85%",
						alignSelf: 'center'
					}}
					>
					{ this.props.data.map(function(story) {
					  return <STButton
					  	title={ story.title} 
                                                key={story.title}
                                                onClick={ () => this.props.navigation.navigate('StoryPage') }
                                                />
					  
					})  }
				</View>

				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
					}}
					>
					{/* add medical button */}
					<STButton
						title = "1"/>
					{/* add dentist button */}
					<STButton
						title = "2"/>
					{/* add optical button */}
					<STButton
						title = "3"/>
					{/* add pencil button */}
					<STButton
						title = "4"/>
				</View>
  		
			</View>
		)

	}

}

function mapStateToProps(state) {
  return state.stories
}

export default connect(mapStateToProps)(StoryList)
