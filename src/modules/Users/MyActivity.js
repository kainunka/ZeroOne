import React, { PropTypes, Component } from 'react';
import {
	Text,
	View,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles/MyActivity'; 
import FooterBar from '../components/FooterBar';
import ButtonActivity from '../components/ButtonActivity';
import DataActivity from '../components/DataActivity';

class MyActivity extends Component {
    constructor(props) {
        super(props);
        this._alertText = this._alertText.bind(this);
    }

    _alertText() {
        alert('Create Activity');
    }

	render() {
		return (
            <View style={styles.container}>
            <ScrollView>
                <DataActivity
                    actImage= { require('../img/bg-home.jpg') }
                    actSubject= 'Subject'
                    actContent= 'Content'
                    actExpire= '2016-05-05 20:00'
                    timeEvent= { this._alertText }
                    deleteEvent= { this._alertText }
                    shareEvent= { this._alertText }
                 />
            </ScrollView>

            <FooterBar>
                <ButtonActivity onPress={this._alertText}>
                    Create Activity
                </ButtonActivity>
            </FooterBar>
            </View>
        );
	}
}

MyActivity.navigatorStyle = {
	statusBarColor: 'black',
	statusBarTextColorScheme: 'light',
	navBarBackgroundColor: '#ffba0b',
	navBarTextColor: 'black',
	navBarButtonColor: 'black'
};


MyActivity.propTypes = {
	navigator: PropTypes.object
};

export default MyActivity;
