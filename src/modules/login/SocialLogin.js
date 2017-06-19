import React, { Component } from 'react';
import { Text, View, ScrollView, AsyncStorage, StyleSheet } from 'react-native';

var { FBLogin, FBLoginManager } = require('react-native-facebook-login');

export default class SocialLogin extends Component {

    render() {
        var _this = this;
        return (
            <View style={styles.container}> 
                <ScrollView>
                <FBLogin style={{ marginBottom: 10, }}
                ref={(fbLogin) => { this.fbLogin = fbLogin }}
                permissions={["email","user_friends"]}
                loginBehavior={FBLoginManager.LoginBehaviors.Native}
                onLogin={function(data){
                    console.log("Logged in!");
                    console.log(JSON.stringify(data));
                    _this.setState({ user : data.credentials });
                }}
                onLogout={function(){
                    console.log("Logged out.");
                    _this.setState({ user : null });
                }}
                onLoginFound={function(data){
                    console.log("Existing login found.");
                    console.log(JSON.stringify(data));
                _this.setState({ user : data.credentials });
                }}
                onLoginNotFound={function(){
                    console.log("No user logged in.");
                    _this.setState({ user : null });
                }}
                onError={function(data){
                    console.log("ERROR");
                    console.log(JSON.stringify(data));
                }}
                onCancel={function(){
                    console.log("User cancelled.");
                }}
                onPermissionsMissing={function(data){
                    console.log("Check permissions!");
                    console.log(JSON.stringify(data));
                }}
                />  
                </ScrollView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'black'
    }
}) 