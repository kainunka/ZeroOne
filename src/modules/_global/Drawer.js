import React, { Component, PropTypes } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	ToastAndroid,
	Image,
	AsyncStorage,
	ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles/Drawer';
import { menuDrawer } from '../constants/data.service';

import { connect } from 'react-redux';

class Drawer extends Component {
	constructor(props) {
		super(props);

		this.state = {
            isLoading: true,
        }

		this._goToHome = this._goToHome.bind(this);
		this._goTo = this._goTo.bind(this);
	}

	_goToHome() {
		this._toggleDrawer();
		this.props.navigator.popToRoot({
			screen: 'zeroone.Home'
		});
	}

	_goTo(screen, title) {
		this._toggleDrawer();
		this.props.navigator.showModal({
			screen,
			title
		});
	}

	_toggleDrawer() {
		this.props.navigator.toggleDrawer({
			to: 'closed',
			side: 'left',
			animated: true
		});
	}

	render() {
		const { checkLanguage, userProfile } = this.props;
		const iconHome = (<Icon name="md-home" size={26} color="#9F9F9F" style={[styles.drawerListIcon, { paddingLeft: 2 }]} />);
		
		
		
		return (
			
			<LinearGradient colors={['rgba(0, 0, 0, 0.7)', 'rgba(0,0,0, 0.9)', 'rgba(0,0,0, 1)']} style={styles.linearGradient}>
				<View style={styles.container}>
					<ScrollView>
					<View style={styles.drawerList}>

						<View style={styles.drawerListItem}>
							<View style={styles.viewTop}>
								<Image
									source={ (userProfile.user) ? { uri: userProfile.user.photoUrl } : require('../img/th-icon.png') }
									style={styles.imageUrl}
								/>
							</View>
							<View style={styles.viewTop}>
								<Text style={styles.drawerListItemText}>
									{(userProfile.user) ? userProfile.user.displayName : console.log('no user')}
								</Text>
							</View>
						</View>

						<TouchableOpacity onPress={this._goToHome}>
							<View style={styles.drawerListItem}>
								{iconHome}
								<Text style={styles.drawerListItemText}>
									GoSpotting
								</Text>
							</View>
						</TouchableOpacity>

						{menuDrawer.map((item, key) => (
							<TouchableOpacity key={key} onPress={this._goTo.bind(this, item.go, 
								( checkLanguage == 'en' ) ? item.en : ( checkLanguage == 'th' ) ? item.th  : console.log('Refresh') 
							)}>
								<View style={styles.drawerListItem}>
									<Icon name={item.icon} size={26} color="#9F9F9F" style={[styles.drawerListIcon, { paddingLeft: 2 }]} />
									<Text style={styles.drawerListItemText}>
										 { ( checkLanguage == 'en' ) ? item.en : ( checkLanguage == 'th' ) ? item.th  : console.log('Refresh')   }
									</Text>
								</View>
							</TouchableOpacity>
						))}
						
					
					</View>
				</ScrollView>
					<Text style={styles._version}>
						{/* 'v1.0.0' */}
					</Text>
				</View>
			</LinearGradient>
		);
	}
}

Drawer.propTypes = {
	navigator: PropTypes.object
};

mapStatetoProps = (state, ownProps) => {
    return {
        checkLanguage: state.start.checkLanguage,
		userProfile: state.start.userProfile
    }
} 

export default connect(mapStatetoProps)(Drawer);
