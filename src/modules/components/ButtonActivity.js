import React, { PropTypes } from 'react';
import {
	Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const ButtonActivity = ({onPress, children}) => {

    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    );

}

ButtonActivity.propTypes = {
    onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({

    button: {
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'black'
    },

    text: {
        color: '#ffba0b',
        fontWeight: 'bold',
        justifyContent: 'center',
        padding: 8
    }

});

export default ButtonActivity;