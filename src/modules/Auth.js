import React, { PropTypes, Component } from 'react';
import {
	Text,
	View,
    TouchableOpacity,
    Modal,
    ScrollView,
    BackAndroid,
    Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles/Auth';

import ButtonLogin from './components/ButtonLogin';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as startActions from './redux/actions/start.actions';
import ProgressBar from './_global/ProgressBar';

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: true,
        }
    }

    setModalVisible(visible) {
        this.setState({
            modalVisible: visible
        });
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

	render() {
        const { checkAuth, loading } = this.props; 
        const { container, text, progressBar } = styles;

		return (
            <Modal
                animationType={"slide"}
                transparent={false}
                visible={checkAuth}
                onRequestClose={() =>  this.handleBackButton() }
            >
                <View style={container}> 
                <Text style={text}>Authenthication Login</Text>

                <ScrollView>
                 <ButtonLogin />
             
                </ScrollView>
                    
            </View>
            </Modal>
        );
	}
}


mapStatetoProps = (state, ownProps) => {
    return {
        checkAuth: state.start.checkAuth,
        loading: state.start.loading
    }
} 


export default connect(mapStatetoProps)(Auth);
