import React, { PropTypes, Component } from 'react';
import {
	Text,
	View,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles/SeePromotions';
import FooterBar from './components/FooterBar';


class SeePromotions extends Component {
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
                <Text style={styles.text}>No promotions avaliable </Text>
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

SeePromotions.navigatorStyle = {
	statusBarColor: 'black',
	statusBarTextColorScheme: 'light',
	navBarBackgroundColor: '#ffba0b',
	navBarTextColor: 'black',
	navBarButtonColor: 'black'
};


SeePromotions.propTypes = {
	navigator: PropTypes.object
};

export default SeePromotions;
