import React, { PropTypes, Component } from 'react';
import {
	Text,
	View,
	ScrollView,
	TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles/MyCards';

import FooterBar from '../components/FooterBar';
import ButtonActivity from '../components/ButtonActivity';

class MyCards extends Component {
	constructor(props) {
		super(props);
	
		this._goToFindCards = this._goToFindCards.bind(this);
	}

	_goToFindCards() {
		this.props.navigator.showModal({
			screen: 'zeroone.FindCards',
			title: 'Find Cards'
		});
	}


	render() {
		return (
            <View style={styles.container}>
			<ScrollView>
			    <Text style={styles.text}>MyCards</Text>
            </ScrollView>
			
			<FooterBar>
				<ButtonActivity onPress={this._goToFindCards}>
					Switch to Find Cards(Map View)
				</ButtonActivity>
			</FooterBar>

			</View>


        );
	}
}

MyCards.navigatorStyle = {
	statusBarColor: 'black',
	statusBarTextColorScheme: 'light',
	navBarBackgroundColor: '#ffba0b',
	navBarTextColor: 'black',
	navBarButtonColor: 'black'
};


MyCards.propTypes = {
	navigator: PropTypes.object
};

export default MyCards;
