import React, { PropTypes, Component } from 'react';
import {
	Text,
	View,
    ScrollView,
    TouchableOpacity,
    Platform,
    RefreshControl,
    AsyncStorage,
    Image,
    BackAndroid,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles/Home';
import ButtonActivity from './components/ButtonActivity';
import FooterBar from './components/FooterBar';
import ButtonMenu from './components/ButtonMenu';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as startActions from './redux/actions/start.actions';
import * as activityActions from './redux/actions/activity.actions';
import { createActivity } from './constants/data.service';

import ProgressBar from './_global/ProgressBar';
import Auth from './Auth';
import ButtonLogin from './components/ButtonLogin';



class Home extends Component {
    
    constructor(props) {
        super(props);
      
        this.state = {
            isLoading: true,
            isRefreshing: false,

        }

        this._goTo = this._goTo.bind(this);
        this._onRefresh = this._onRefresh.bind(this);
        this._goToCreateActivity = this._goToCreateActivity.bind(this);
        this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));

        this._removeToken = this._removeToken.bind(this);
  
    }

    

    async setLanguage(language) {
        try {
            await AsyncStorage.setItem('language', language);
        } catch (error) {
            console.log("Error Storage");
        }
    }

    async getLanguage() {
        try {
            let statusLang =  await AsyncStorage.getItem('language');
            
            if (statusLang === 'en') {
               this.props.actions.checkLanguage('en');
            } 
            if (statusLang === 'th') {
                this.props.actions.checkLanguage('th');
            }
        } catch (error) {
            console.log("Error Storage");
        }
    }

    componentWillMount() {
		this._retrieveIndex();
	}

    componentWillReceiveProps(nextProps) {
        if(nextProps.dataMenuHome && nextProps.checkLanguage) {
            this.setState({
                isLoading: false
            });
        }
    }


    componentWillUnmount() {
        BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton() {
        Alert.alert(
            'Are you sure do you want to exit?',
            '',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
              {text: 'OK', onPress: () =>    BackAndroid.exitApp() },
            ]
        );
        return true;
    }
   
        

    _removeToken() {
        alert('Remove Token');
    }

    _goTo(screen, title) {
		this.props.navigator.showModal({
			screen,
            title
		});
	}

    _goToCreateActivity() {
        this.props.actionsAct.showModal(true);
        this.props.navigator.showModal({
            screen: 'zeroone.Activity',
            title: (this.props.checkLanguage == 'en') ? createActivity[4].en : (this.props.checkLanguage == 'th') ? createActivity[4].th : console.log('Refresh')
        })   
    }

    _retrieveIndex(isRefreshed) {
        this.props.actions.dataMenuHome();
        this.props.actions.checkLanguage(this.props.checkLanguage);
        this.getLanguage()
        
		if (isRefreshed && 
            this.setState({ 
                isRefreshing: false 
            }));
	}

    _onRefresh() {
        this.setState({ 
            isRefreshing: true 
        });
        this._retrieveIndex('isRefreshed');
       
	}

    _onNavigatorEvent(event) {
        if (event.type === 'NavBarButtonPress') {
            if (event.id === 'us') {
                this.setLanguage('en');
                this.props.actions.checkLanguage('en'); 
            }
			if (event.id === 'th') {
                this.setLanguage('th');
                this.props.actions.checkLanguage('th');         
            }
        }
    }


	render() {
        const { dataMenuHome, checkLanguage, checkAuth } = this.props;
        const {  isLoading, isRefreshing, auth } = this.state;
        const { progressBar, container, icon, text } = styles;
    
		return (
            
            ( checkAuth ) ? <Auth /> :

            ( isLoading ) ? <View style={progressBar}><ProgressBar /></View>  :
            
            <Image source={require('./img/bg-home.jpg')} style={container}>
            <ScrollView
                refreshControl={
                <RefreshControl
                    refreshing={isRefreshing}
                    onRefresh={this._onRefresh}
                    colors={['#EA0000']}
                    tintColor="white"
                    title="loading..."
                    titleColor="white"
                    progressBackgroundColor="white"
                />
            }>

                {dataMenuHome.map((item, key) => 
                (
                <ButtonMenu key={key} onPress={this._goTo.bind(this, item.go, 
                     ( checkLanguage == 'en' ) ? item.en : ( checkLanguage == 'th' ) ? item.th   : console.log('Refresh') 
                )}>
                <Icon style={icon} name={item.icon} size={30} color='#000' />
                <Text style={text}>
                    {  ( checkLanguage == 'en' ) ? item.en : ( checkLanguage == 'th' ) ? item.th : console.log('Refresh')  }
                </Text>
                
                </ButtonMenu>
                )
                )}

                <ButtonLogin />


            </ScrollView>

            <FooterBar>
                <ButtonActivity onPress={this._goToCreateActivity}>
                    { (checkLanguage == 'en') ? createActivity[4].en : (checkLanguage == 'th') ? createActivity[4].th : console.log('Refresh') }
                </ButtonActivity>
            </FooterBar>


            </Image>

        );
	}
}


Home.propTypes = {
    actions: PropTypes.object.isRequired,
    actionsAct: PropTypes.object.isRequired,
	navigator: PropTypes.object
};



let rightButtons = [    
        {
            id: 'notification',
			icon: require('./img/chat.png') 
        },
        {
            id: 'us',
			icon: require('./img/us-icon.png')
        },
        {
			id: 'th',
			icon: require('./img/th-icon.png')
		}
        
	];

Home.navigatorButtons = {
	rightButtons	
};


mapStatetoProps = (state, ownProps) => {
    return {
        dataMenuHome: state.start.dataMenuHome,
        checkLanguage: state.start.checkLanguage,
        checkAuth: state.start.checkAuth,
    }
} 
mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(startActions, dispatch),
        actionsAct: bindActionCreators(activityActions, dispatch)
	};
}


export default connect(mapStatetoProps, mapDispatchToProps)(Home);
