import React, { PropTypes, Component } from 'react';
import {
	Text,
	View,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles/Advertise';

class Advertise extends Component {
	render() {
		return (
            <View style={styles.container}>
            <ScrollView>
                <Text style={styles.text}>Advertise</Text>
            </ScrollView>
            </View>
        );
	}
}

Advertise.navigatorStyle = {
	statusBarColor: 'black',
	statusBarTextColorScheme: 'light',
	navBarBackgroundColor: '#ffba0b',
	navBarTextColor: 'black',
	navBarButtonColor: 'black'
};


Advertise.propTypes = {
	navigator: PropTypes.object
};

export default Advertise;
