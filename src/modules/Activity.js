import React, { PropTypes, Component } from 'react';
import {
    View,

} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as activityActions from './redux/actions/activity.actions';

import CreateActivity from './components/CreateActivity';
import ShowActivity from './components/ShowActivity';
import styles from './styles/Activity';

class Activity extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { dataUser, showActivity, checkDataActivity } = this.props; 
        this.props.actions.showActivity(dataUser.facebookID, dataUser.UserID);
    }

    componentWillReceiveProps(nextProps) {
    
		if (nextProps.showActivity.data == '') {      
            this.props.actions.checkDataActivity(false);
		} else {
            this.props.actions.checkDataActivity(true);
        }
	}

	render() {
        const { container } = styles;
        const { dataActivity, showActivity, checkDataActivity } = this.props;
		return (
             <View style={container}>
            { ( checkDataActivity ) ? <ShowActivity />  :  <CreateActivity /> }       
            </View>
        );
	}
}

Activity.navigatorStyle = {
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
    navBarTransparent: true,
	drawUnderNavBar: true,
	navBarTranslucent: true,
	statusBarHidden: true,
};

Activity.propTypes = {
	navigator: PropTypes.object,
    actions: PropTypes.object.isRequired,
};

mapStatetoProps = (state, ownProps) => {
    const {
        backgroundActivity,
        dataActivity,
        showActivity,
        checkDataActivity
    } = state.activity
    return {
        dataUser: state.start.dataUser,
        backgroundActivity,
        dataActivity,
        showActivity,
        checkDataActivity,
        userProfile: state.start.userProfile
    }
} 
mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(activityActions, dispatch),
	};
}

export default connect(mapStatetoProps, mapDispatchToProps)(Activity);
