import React, { PropTypes, Component } from 'react';
import {
	Text,
	View,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles/MyAccount';

class MyAccount extends Component {
	render() {
		return (
            <View style={styles.container}>
            <ScrollView>
                <Text style={styles.text}>My Account</Text>
            </ScrollView>
            </View>
        );
	}
}

MyAccount.navigatorStyle = {
	statusBarColor: 'black',
	statusBarTextColorScheme: 'light',
	navBarBackgroundColor: '#ffba0b',
	navBarTextColor: 'black',
	navBarButtonColor: 'black'
};


MyAccount.propTypes = {
	navigator: PropTypes.object
};

export default MyAccount;
