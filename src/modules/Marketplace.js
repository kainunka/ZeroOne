import React, { PropTypes, Component } from 'react';
import {
	Text,
	View,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles/Marketplace';
import FooterBar from './components/FooterBar';

class Marketplace extends Component {
    constructor(props) {
        super(props);

        this._funcSearch = this._funcSearch.bind(this);
        this._funcApps = this._funcApps.bind(this);   
    }

    _funcSearch() {
        alert('Search');
    }

    _funcApps() {
        alert('Apps');
    }

	render() {
		return (
            <View style={styles.container}>
            <ScrollView>         
                <Text style={styles.text}>Marketplace</Text>
            </ScrollView>
            <FooterBar>
                <TouchableOpacity style={styles.footerButton} onPress={this._funcSearch}>
                    <Icon style={styles.icon} name='md-search' size={45} />
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.footerButton} onPress={this._funcApps}>
                    <Icon style={styles.icon} name='md-apps' size={45} />
                </TouchableOpacity>
            </FooterBar>
            </View>
        );
	}
}

Marketplace.navigatorStyle = {
	statusBarColor: 'black',
	statusBarTextColorScheme: 'light',
	navBarBackgroundColor: '#ffba0b',
	navBarTextColor: 'black',
	navBarButtonColor: 'black'
};


Marketplace.propTypes = {
	navigator: PropTypes.object
};

export default Marketplace;
