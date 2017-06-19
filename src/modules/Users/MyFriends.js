import React, { PropTypes, Component } from 'react';
import {
	Text,
	View,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles/MyFriends';

class MyFriends extends Component {
	render() {
		return (
            <View style={styles.container}>
            <ScrollView>
                <Text style={styles.text}>My Friends</Text>
            </ScrollView>
            </View>
        );
	}
}

MyFriends.navigatorStyle = {
	statusBarColor: 'black',
	statusBarTextColorScheme: 'light',
	navBarBackgroundColor: '#ffba0b',
	navBarTextColor: 'black',
	navBarButtonColor: 'black'
};


MyFriends.propTypes = {
	navigator: PropTypes.object
};

export default MyFriends;
