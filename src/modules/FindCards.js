import React, { PropTypes, Component } from 'react';
import {
	Text,
	View,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles/FindCards';
import ButtonActivity from './components/ButtonActivity';
import FooterBar from './components/FooterBar';

class FindCards extends Component {
    constructor(props) {
        super(props);

        this._goToMyCards = this._goToMyCards.bind(this);
    }

    _goToMyCards() {
        this.props.navigator.showModal({
            screen: 'zeroone.MyCards',
            title: 'My Cards'
        });
    }

	render() {
		return (
            <View style={styles.container}>
            <ScrollView>            
                <Text style={styles.text}>Find Cards</Text>          
            </ScrollView>

            <FooterBar>
                <ButtonActivity onPress={this._goToMyCards}>
                    Switch to view My Cards
                </ButtonActivity>
            </FooterBar>
            </View>
        );
	}
}

FindCards.navigatorStyle = {
	statusBarColor: 'black',
	statusBarTextColorScheme: 'light',
	navBarBackgroundColor: '#ffba0b',
	navBarTextColor: 'black',
	navBarButtonColor: 'black'
};


FindCards.propTypes = {
	navigator: PropTypes.object
};

export default FindCards;
