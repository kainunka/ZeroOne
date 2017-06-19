import React, { PropTypes, Component } from 'react';
import {
	Text,
	View,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles/MapView';

import FooterBar from './components/FooterBar';
import ButtonMapView from './components/ButtonMapView';


class MapView extends Component {
    constructor(props) {
        super(props);

        this._alertText = this._alertText.bind(this);
    }

    _alertText() {
        alert('Map View Alert Text');
    }

	render() {
		return (
            <View style={styles.container}>
            <ScrollView>            
                <Text style={styles.text}>Map View</Text>          
            </ScrollView>

            <FooterBar>
                <ButtonMapView onPress={this._alertText}>
                    <Icon style={styles.icon} name='md-person' size={25} />
                    <Text style={styles.footerText}>Activities</Text>
                </ButtonMapView>

                <ButtonMapView onPress={this._alertText}>
                    <Icon style={styles.icon} name='md-card' size={25} />
                    <Text style={styles.footerText}>Cards</Text>
                </ButtonMapView>

                <ButtonMapView onPress={this._alertText}>
                    <Icon style={styles.icon} name='md-pin' size={25} />
                    <Text style={styles.footerText}>All</Text>
                </ButtonMapView>

                <ButtonMapView onPress={this._alertText}>
                    <Icon style={styles.icon} name='md-flame' size={25} />
                    <Text style={styles.footerText}>Promotions</Text>
                </ButtonMapView>

                <ButtonMapView onPress={this._alertText}>
                    <Icon style={styles.icon} name='md-bookmarks' size={25} />
                    <Text style={styles.footerText}>Items</Text>
                </ButtonMapView>
            </FooterBar>
            </View>
        );
	}
}



MapView.navigatorStyle = {
	statusBarColor: 'black',
	statusBarTextColorScheme: 'light',
	navBarBackgroundColor: '#ffba0b',
	navBarTextColor: 'black',
	navBarButtonColor: 'black'
};


MapView.propTypes = {
	navigator: PropTypes.object
};

export default MapView;
