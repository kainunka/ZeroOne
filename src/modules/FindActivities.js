import React, { PropTypes, Component } from 'react';
import {
	Text,
	View,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import FooterBar from './components/FooterBar';
import ButtonActivity from './components/ButtonActivity';

import styles from './styles/FindActivities';

class FindActivities extends Component {
    constructor(props) {
        super(props);

        this._alertText = this._alertText.bind(this);
        this._funcSearch = this._funcSearch.bind(this);
    }


    _alertText() {
        alert('Create Activity');
    }

    _funcSearch() {
        alert('Search');
    }

	render() {
		return (
            <View style={styles.container}>
            <ScrollView>            
                <Text style={styles.text}>No Activity avaliable</Text>          
            </ScrollView>

            <FooterBar>
                <ButtonActivity onPress={this._alertText}>Create Activity</ButtonActivity>
                <TouchableOpacity style={styles.footerButton} onPress={this._funcSearch}>
                 <Icon style={styles.icon} name='md-search' size={45} />
                </TouchableOpacity>
            </FooterBar>
            </View>
        );
	}
}

FindActivities.navigatorStyle = {
	statusBarColor: 'black',
	statusBarTextColorScheme: 'light',
	navBarBackgroundColor: '#ffba0b',
	navBarTextColor: 'black',
	navBarButtonColor: 'black'
};


FindActivities.propTypes = {
	navigator: PropTypes.object
};

export default FindActivities;
