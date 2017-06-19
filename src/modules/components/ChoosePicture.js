import React, { PropTypes, Component } from 'react';
import {
	Text,
	View,
    TouchableOpacity,
    Modal,
    ScrollView,
    StyleSheet,
    PixelRatio,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import ButtonMenu from './ButtonMenu';
import ImagePicker from 'react-native-image-picker';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as activityActions from '../redux/actions/activity.actions';


class ChoosePicture extends Component {
    constructor(props) {
        super(props);

        this.state = {
            avatarSource: this.props.backgroundActivity
        }

        this._selectPhotoTapped = this._selectPhotoTapped.bind(this);
    }

    setModalVisible(visible) {
       this.props.actions.showModal(visible)
    }

    _setBackgroundActivity(visible) {
        this.props.actions.showModal(visible);
        this.props.actions.backgroundActivity(this.state.avatarSource);
    }


    _selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            } 
        }

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User Cancelled photo picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped cuttom Button: ', response.customButton);
            } else {
                let source = { uri: response.uri };
                console.log('uriPic = ' + response.uri);
                console.log('source = ' + JSON.stringify(source));
                this.setState({
                    avatarSource: source
                })
                
            }
        })
    }


	render() {
        const { takePicture, modalVisible, avatarSource } = this.state;
        const { showModal } = this.props;
        console.log('avartarSource = ' + JSON.stringify(avatarSource));
		return (
            <Modal
                animationType={"slide"}
                transparent={false}
                visible={showModal}
                onRequestClose={() => { this.setModalVisible(false) }}
            >
                <View style={styles.container}> 
                <Text style={styles.text}>Choose Picture</Text>

                <ScrollView>
                   
                   <ButtonMenu onPress={this._selectPhotoTapped}> 
                       <Text style={styles.text}> Select Photo</Text> 
                    </ButtonMenu>

                     <Image style={styles.avatar} source={ avatarSource } />

                   <ButtonMenu onPress={ () => { this._setBackgroundActivity(false) } } >
                        <Text style={styles.text}>Next >>>></Text> 
                    </ButtonMenu>
     
                </ScrollView>
                    
            </View>
            </Modal>
        );
	}
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1a1a1a',
        flex: 1,
        paddingTop: 30
    
    },

     text: {
        marginLeft: 100,
        fontSize: 18,
        color: '#ffc80b',
        fontWeight: 'bold'
    },

    icon: {
        color: 'black'
    },

    avatar: {
        marginTop: 20,
        marginBottom: 20,
        width: 300,
        height: 300,
        marginLeft: 30
  
    }
})

ChoosePicture.propTypes = {
    actions: PropTypes.object.isRequired,

};

mapStatetoProps = (state, ownProps) => {
    return {
        showModal: state.activity.showModal,
        backgroundActivity: state.activity.backgroundActivity
    }
} 
mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(activityActions, dispatch)
	};
}


export default connect(mapStatetoProps, mapDispatchToProps)(ChoosePicture);

