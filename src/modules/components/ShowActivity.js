import React, { PropTypes, Component } from 'react';
import {
	Text,
	View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    RefreshControl,
    ListView,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles/ShowActivity';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as activityActions from '../redux/actions/activity.actions';

import DataActivity from './DataActivity';
import ProgressBar from '../_global/ProgressBar';
import moment from 'moment';
import 'whatwg-fetch';

class ShowActivity extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            isLoading: true,
            isRefreshing: false,
            sec: 0,
            data: '',
            s: null,
            e: null
        }
        this._onRefresh = this._onRefresh.bind(this);
        this._deleteItem = this._deleteItem.bind(this);
        this._diffTime = this._diffTime.bind(this);
    }

    componentWillMount() {
        this._retrieveActivity();
    }

    componentWillReceiveProps(nextProps) {
        const rs = new ListView.DataSource({
             rowHasChanged: (r1, r2) => r1 !== r2
        })

		if (nextProps.showActivity) {      
            const dataSource = rs.cloneWithRows(nextProps.showActivity.data);
			this.setState({ isLoading: false, dataSource });
		}
	}



    _deleteItem(facebookID, userID, inviteID) {
        const { showActivity } = this.props;
        Alert.alert(
            'Are you sure do you want to delete?',
            '',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
              {text: 'OK', onPress: () => showActivity.data.map(res => { 
                    this.props.actions.deleteActivity(facebookID, userID, inviteID) 
               })   
              }
            ]
        );
        
    }

    _retrieveActivity(isRefreshed) {
        const { dataUser } = this.props; 
        this.props.actions.showActivity(dataUser.facebookID, dataUser.UserID);

        if (isRefreshed && this.setState({
            isRefreshing: false
        }));
    }


    _onRefresh() {
        this.setState({
            isRefreshing: true
        });

        this._retrieveActivity('isRefreshed');
    }

    _expire(timePicker) {
        const now = new Date().getTime();
        const t = timePicker - now;
  
    }

    _diffTime(time) {
        var days = Math.floor(time / 24 / 60 / 60);
        var hoursLeft = Math.floor((time) - (days * 86400));
        var hours = Math.floor(hoursLeft / 3600);
        var minutesLeft = Math.floor((hoursLeft) - (hours * 3600));
        var minutes = Math.floor(minutesLeft / 60);
        var remainingSeconds = Math.floor(time % 60);
        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (remainingSeconds < 10) {
            remainingSeconds = '0' + remainingSeconds;
        }



        return hours + ':' + minutes + ':' + remainingSeconds;
 


    }
    
	render() {
        const { progressBar } = styles;
        const { dataUser, showActivity } = this.props;
        const { isLoading, isRefreshing, dataSource } = this.state;
        console.log('ResponseData' + JSON.stringify(showActivity.data));


		return (
              ( isLoading ) ? <View style={progressBar}><ProgressBar /></View> :
               
                <ListView
                    enableEmptySections
                    dataSource={dataSource}
                    renderRow={(rowData) => 
                    (
                        <DataActivity
                        key={ rowData.Invite.InviteID }
                        actImage= { rowData.Invite.InviterPhoto ? { uri: rowData.Invite.InviterPhoto } : require('../img/bg-home.jpg') }
                        actSubject= { rowData.Invite.Header  }
                        actContent= { rowData.Invite.Description }
                        actExpire= { this._diffTime(rowData.Invite.TimeLimit) }
                        timeEvent= {() => this._deleteItem(rowData.Invite.InviterFacebookID, rowData.Invite.InviterUserID, rowData.Invite.InviteID) }
                        deleteEvent= {() => this._deleteItem(rowData.Invite.InviterFacebookID, rowData.Invite.InviterUserID, rowData.Invite.InviteID) }
                        shareEvent= {() => this._deleteItem(rowData.Invite.InviterFacebookID, rowData.Invite.InviterUserID, rowData.Invite.InviteID) }
                    />
                    )
                    }
                    refreshControl={
                        <RefreshControl
                            refreshing={ isRefreshing }
                            onRefresh={ this._onRefresh }
                            colors={['#EA0000']}
                            tintColor='white'
                            title='loading...'
                            titleColor='white'
                            progressBackgroundColor='white'
                        />
                    }
                />
                 
        );
	}
}


ShowActivity.propTypes = {
	navigator: PropTypes.object,
    actions: PropTypes.object.isRequired,
};

mapStatetoProps = (state, ownProps) => {
    const {
        dataActivity,
        showActivity,
        d,
        h,
        m,
        s
    } = state.activity
    
    return {
        checkLanguage: state.start.checkLanguage,
        userProfile: state.start.userProfile,
        dataUser: state.start.dataUser,
        dataActivity,
        showActivity,
        d,
        h,
        m,
        s
    }
} 

mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(activityActions, dispatch),
	};
}


export default connect(mapStatetoProps, mapDispatchToProps)(ShowActivity);
