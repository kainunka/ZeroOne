import React, { PropTypes, Component } from 'react';
import {
	Text,
	View,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles/MyInterests';

class MyInterests extends Component {
	render() {
		return (
            <View style={styles.container}>
            <ScrollView>
                <Text style={styles.text}>MyInterests</Text>
            </ScrollView>
            </View>
        );
	}
}

MyInterests.navigatorStyle = {
	statusBarColor: 'black',
	statusBarTextColorScheme: 'light',
	navBarBackgroundColor: '#ffba0b',
	navBarTextColor: 'black',
	navBarButtonColor: 'black'
};


MyInterests.propTypes = {
	navigator: PropTypes.object
};

export default MyInterests;
