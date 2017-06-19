import React, { PropTypes } from 'react';
import {
    StyleSheet,
    TouchableOpacity
} from 'react-native';


const ButtonMapView = ({onPress, children}) => {

    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>   
            {children}
        </TouchableOpacity>
    );

}

ButtonMapView.propTypes = {
    onPress: PropTypes.func.isRequired
};


const styles = StyleSheet.create({

    button: {
        flex: 1,
        borderWidth: 0.5,
        height: 50,
        borderColor: 'black',
        backgroundColor: '#a56327',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',

    },

});

export default ButtonMapView;