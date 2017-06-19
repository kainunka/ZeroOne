import { Navigation } from 'react-native-navigation';

import Drawer from './modules/_global/Drawer';
import Home from './modules/Home';
import MyCards from './modules/Users/MyCards';
import MyItems from './modules/Users/MyItems';
import MyInterests from './modules/Users/MyInterests';
import MyActivity from './modules/Users/MyActivity';
import MyFriends from './modules/Users/MyFriends';
import MyAccount from './modules/Users/MyAccount';
import Advertise from './modules/Users/Advertise';
import MapView from './modules/MapView';
import FindCards from './modules/FindCards';
import Marketplace from './modules/Marketplace';
import SeePromotions from './modules/SeePromotions';
import FindActivities from './modules/FindActivities';
import SocialLogin from './modules/login/SocialLogin';
import Activity from './modules/Activity';

export function registerScreens(store, Provider) {
	Navigation.registerComponent('zeroone.Home', () => Home, store, Provider);
	Navigation.registerComponent('zeroone.MyCards', () => MyCards, store, Provider);
	Navigation.registerComponent('zeroone.MyItems', () => MyItems, store, Provider);
	Navigation.registerComponent('zeroone.MyInterests', () => MyInterests, store, Provider);
	Navigation.registerComponent('zeroone.MyActivity', () => MyActivity, store, Provider);
	Navigation.registerComponent('zeroone.MyFriends', () => MyFriends, store, Provider);
	Navigation.registerComponent('zeroone.MyAccount', () => MyAccount, store, Provider);
	Navigation.registerComponent('zeroone.Advertise', () => Advertise, store, Provider);

	Navigation.registerComponent('zeroone.MapView', () => MapView, store, Provider);
	Navigation.registerComponent('zeroone.FindCards', () => FindCards, store, Provider);
	Navigation.registerComponent('zeroone.Marketplace', () => Marketplace, store, Provider);
	Navigation.registerComponent('zeroone.SeePromotions', () => SeePromotions, store, Provider);
	Navigation.registerComponent('zeroone.FindActivities', () => FindActivities, store, Provider);
	Navigation.registerComponent('zeroone.SocialLogin', () => SocialLogin, store, Provider);
	Navigation.registerComponent('zeroone.Activity', () => Activity, store, Provider)

	Navigation.registerComponent('zeroone.Drawer', () => Drawer, store, Provider);
}
