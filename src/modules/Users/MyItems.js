import React, { PropTypes, Component } from 'react';
import {
	Text,
	View,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles/MyItems';

class MyItems extends Component {
	render() {
		return (
            <View style={styles.container}>
            <ScrollView>
                <Text style={styles.text}>MyItems</Text>
            </ScrollView>
            </View>
        );
	}
}

MyItems.navigatorStyle = {
	statusBarColor: 'black',
	statusBarTextColorScheme: 'light',
	navBarBackgroundColor: '#ffba0b',
	navBarTextColor: 'black',
	navBarButtonColor: 'black'
};


MyItems.propTypes = {
	navigator: PropTypes.object
};

export default MyItems;
