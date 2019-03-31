import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import STButtonSmall from '../components/STButtonSmall.js';
import styles from '../pages/Style.js';

export default class Glasses extends React.Component {
	render(){
		return (
			<View style={styles.home}>
				<Text style={styles.desc}> My name is Jack and I am a cool kid! {"\n"}</Text>
        {'/n'}
        <Image
          style={styles.pix}
          source={{uri: 'https://s23916.pcdn.co/wp-content/uploads/Pediatric-Ophthalmologist-vs-Optometrist-Are-All-Eye-Doctors-the-Same.jpg'}}
          resizeMode="cover"
        />
        <View style={{flexDirection:'row'}}>
        <STButtonSmall title="Go Back to Title" onPress={() => this.props.navigation.navigate('Home')}></STButtonSmall>
        <STButtonSmall title="Next" onPress={() => this.props.navigation.navigate('Glasses_1')} > </STButtonSmall>
        </View>
      </View>
    );
  }
}