import React, { PropTypes, Component } from 'react';
import {
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as startActions from '../redux/actions/start.actions';
import Firestack from 'react-native-firestack';
import _ from 'lodash';
import axios from 'axios';
var { FBLogin, FBLoginManager } = require('react-native-facebook-login');

const FirebaseStack = new Firestack();
const FireDb = FirebaseStack.database.ref();


class ButtonLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null
        }

    }

    signInWithProvider(provider, token) {
        this.props.actions.fbToken(token);

        FirebaseStack.auth.signInWithProvider(provider, token, '')
        .then((user) => {
            this.props.actions.userProfile(user);
            console.log('dataMu ' + JSON.stringify(user));
            console.log('dataMu = ' + JSON.stringify(this.props.userProfile.user));
                
           axios.post('https://stage.listmyspot.com/Account/FacebookRegister', {
                fbToken: token,
                deviceID: 'samsung-sm2',
                deviceName: 'samsung2',
                registerID: user.user.uid,
                location: '18.8427834,99.0114548'
            })
            .then((response) =>  {
                this.props.actions.dataUser(response.data.data)
                this.props.actions.checkAuth(false);
                console.log("LoginSuccess :" + JSON.stringify(response));
                
                
            })
            .catch((error) => {
                console.log("LoginError :" + JSON.stringify(error));
            });
        })
        .catch((err) => {
            console.log('Err Fire');
            console.log(err);
        })
    }

    signOutWithProvider() {
        FirebaseStack.auth.signOut()
        .then(res => this.props.actions.checkAuth(true))
        .catch(err => console.error('Uh oh... something weird happened'))
    }


    onLogin(data) {
        console.log("Logged in!");
        _this.signInWithProvider('facebook', data.credentials.token)
    }

    onLogout(data) {
        console.log("Logged out.");
        this.setState({
            user: null
        })
        this.signOutWithProvider();
    }

    onLoginFound(data) {
        console.log("Existing login found.");
        this.signInWithProvider('facebook', data.credentials.token)
    }

    onLoginNotFound(data) {
        console.log("No user logged in." + data);
        this.setState({
            user: null
        })    
        this.signOutWithProvider();
    }

    onError(data) {
        console.log("ERROR");
        console.log(JSON.stringify(data));
    }

    onCancel() {
        console.log("User cancelled.");
    }

    onPermissionsMissing(data) {
        console.log("Check permissions!");
        console.log(JSON.stringify(data));
    }

	render() {
        let _this = this;

		return (
                <FBLogin style={styles.FBButton}
                    ref={(fbLogin) => { this.fbLogin = fbLogin }}
                    permissions={["email","user_friends"]}
                    loginBehavior={FBLoginManager.LoginBehaviors.Native}
                    
                    onLogin={ (data) => {
                         console.log("Logged in!");
                        _this.signInWithProvider('facebook', data.credentials.token);
                         
                    } }
                    onLogout={ (data) => { this.onLogout(false) } }
                    onLoginFound={ (data) => { 
                        console.log("Existing login found.");
                        _this.signInWithProvider('facebook', data.credentials.token);
                     } }
                    onLoginNotFound={ (data) => { this.onLoginNotFound(false) } }
                    onError={ (data) => { this.onError(data) } }
                    onCancel={ this.onCancel }
                    onPermissionsMissing={ (data) => { this.onPermissionsMissing(data) } }
                    />  
        );
	}
}


const styles = StyleSheet.create({
    FBButton: {
        height: 60,
        flexDirection: 'row',
        margin: 15,
        marginBottom: 2,
        paddingLeft: 100,
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#ffc80b',
        backgroundColor: 'black',
    }
   
})

ButtonLogin.propTypes = {
    actions: PropTypes.object.isRequired,
    navigator: PropTypes.object
};

mapStatetoProps = (state, ownProps) => {
    return {
        checkAuth: state.start.checkAuth,
        userProfile: state.start.userProfile,
        dataMenuHome: state.start.dataMenuHome,
        fbToken: state.start.fbToken,
        dataUser: state.start.dataUser
    }
} 
mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(startActions, dispatch)
	};
}


export default connect(mapStatetoProps, mapDispatchToProps)(ButtonLogin);
