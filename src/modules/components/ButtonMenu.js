import React, { PropTypes } from 'react';
import {
	View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const ButtonMenu = ({onPress, children}) => {

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            {children}
        </TouchableOpacity>
    );

}

ButtonMenu.propTypes = {
    onPress: PropTypes.func.isRequired
};


const styles = StyleSheet.create({

   button: {
        height: 60,
        flexDirection: 'row',
        margin: 15,
        marginBottom: 2,
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#ffc80b',
    },

});

export default ButtonMenu;