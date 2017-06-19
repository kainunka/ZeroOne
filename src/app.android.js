import React from 'react';

import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import configureStore from './modules/redux/store/configureStore';

import { AsyncStorage } from 'react-native';

const store = configureStore();

registerScreens(store, Provider);

const navigatorStyle = {
	statusBarColor: 'black',
	statusBarTextColorScheme: 'light',
	navigationBarColor: 'black',
	navBarBackgroundColor: '#ffba0b',
	navBarTextColor: 'black',
	tabBarButtonColor: 'red',
	tabBarSelectedButtonColor: 'red',
	tabBarBackgroundColor: 'white',

};


Navigation.startSingleScreenApp({
screen: {
	screen: 'zeroone.Home',
	title: 'GoSpotting',
	navigatorStyle
},
drawer: {
	left: {
		screen: 'zeroone.Drawer',
	},
},
});

