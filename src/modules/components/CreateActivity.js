import React, { PropTypes, Component } from 'react';
import {
	Text,
	View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Image,
    Input
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles/CreateActivity';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as activityActions from '../redux/actions/activity.actions';
import { createActivity } from '../constants/data.service';

import ChoosePicture from './ChoosePicture';
import TextInputActivity from './TextInputActivity';
import DatePickers from './DatePickers';
import ButtonActivity from './ButtonActivity';
import FooterBar from './FooterBar';
import axios from 'axios';

import { CheckBox, FormInput, Grid, Col, Row  } from 'react-native-elements';

class CreateActivity extends Component {
    constructor(props) {
        super(props);
        this._onCreateActivity = this._onCreateActivity.bind(this);
        this._changeBackground = this._changeBackground.bind(this);
        this._changeDefaultBackground = this._changeDefaultBackground.bind(this);
   
        this.state = { 
            text: 'place holder',
            isDateTimePickerVisible: false,
            checked: true
        };
    }

    _changeBackground(visible) {
        this.props.actions.showModal(visible);
    }

    _changeDefaultBackground() {
        this.props.actions.backgroundActivity(require('../img/bg-home.jpg'));
    }


    _onCreateActivity() {
        const { subject, content, dateTimePicker, donate, backgroundActivity, dataUser } = this.props;
        const uidUser = this.props.userProfile.user.uid;

        this.props.actions.activityCreate(dataUser.UserID, dataUser.facebookID, backgroundActivity, {
            subject,
            content,
            dateTimePicker,
            donate
        });
    }

	render() {
        const { container, text, content, subject, donate, checkbox, line, c } = styles;
        const { backgroundActivity, checkLanguage, dateTimePicker } = this.props;

		return (
            <Image source={ backgroundActivity } style={container} >
                <ChoosePicture />
            <ScrollView>          
                <Text style={text}>{ (checkLanguage == 'en') ? createActivity[0].en : createActivity[0].th }</Text>        

                <FormInput 
                    textInputRef='subject'
                    containerStyle={subject}
                    value={this.props.subject}
                    inputStyle={subject}
                    onChangeText={text =>
                        this.props.actions.activityUpdates({
                            prop: 'subject',
                            value: text
                        })         
                    }
                 />

                <Text style={text}>{ (checkLanguage == 'en') ? createActivity[1].en : createActivity[1].th }</Text>        
                <FormInput 
                    textInputRef='content'
                    containerStyle={content} 
                    inputStyle={content}
                    value={this.props.content}
                    onChangeText={text =>
                       this.props.actions.activityUpdates({
                            prop: 'content',
                            value: text
                        })         
                    } 
                    
                />
           
                <Text style={text}>{ (checkLanguage == 'en') ? createActivity[2].en : createActivity[2].th }</Text>     
               
                <DatePickers 
                 datePicker={ dateTimePicker }
                 valueChange={ (dateTimePicker) =>
                        this.props.actions.activityUpdates({
                            prop: 'dateTimePicker',
                            value: dateTimePicker
                        })}   
                />

                <Text style={text}>{ (checkLanguage == 'en') ? createActivity[3].en : createActivity[3].th }</Text>  
                <FormInput containerStyle={donate}
                 keyboardType = 'numeric'
                 value={this.props.donate}
                 onChangeText={num =>
                       this.props.actions.activityUpdates({
                            prop: 'donate',
                            value: num
                        })         
                    } 
                 />


            </ScrollView>

            <FooterBar>
                <View style={line}>
                    <View style={c}> 
                    <ButtonActivity onPress={ this._changeDefaultBackground }>
                        Default
                    </ButtonActivity>
                    </View>

                    <View style={c}>
                    <ButtonActivity onPress={ () => { this._changeBackground(true)  }}>
                        Change BG
                    </ButtonActivity>
                    </View>

                    <View style={c}>
                    <ButtonActivity onPress={ this._onCreateActivity  }>
                        CreateActivity
                    </ButtonActivity>
                    </View>
                
                </View>     
            </FooterBar>
            </Image>
       
        );
	}
}

CreateActivity.propTypes = {
	navigator: PropTypes.object,
    actions: PropTypes.object.isRequired,
};

mapStatetoProps = (state, ownProps) => {
    const {
        showModal,
        backgroundActivity,
        subject,
        content,
        dateTimePicker,
        donate
    } = state.activity
    return {
        backgroundActivity,
        checkLanguage: state.start.checkLanguage,
        userProfile: state.start.userProfile,
        dataUser: state.start.dataUser,
        fbToken: state.start.fbToken,
        subject,
        content,
        dateTimePicker,
        donate
    }
} 
mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(activityActions, dispatch),
	};
}


export default connect(mapStatetoProps, mapDispatchToProps)(CreateActivity);
