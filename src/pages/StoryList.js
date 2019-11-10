import React from 'react';
import { Text, View, Button} from 'react-native';
import STButton from '../components/STButton.js';


export default class StoryList extends React.Component {
	render(){
		return (
			<View
				className="storyList"
				style={{
				backgroundColor: '#4d4c4e',
				flexDirection: 'column'
		    }}>
				<View
					style={{
						flexDirection: 'row',
						height: '10%'
					}}
					>
					{/* add profile icon */}
					<Button
						title = "temp1" />
					{/* add welcome user text */}
					<Text/>
				</View>

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
					{/* add buttons for each story */}
					<Button
						title = "temp2"/>
					<Button
						title = "temp3"/>
					<Button
						title = "temp4"/>
					<Button
						title = "temp5"/>
					<Button
						title = "temp6"/>
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