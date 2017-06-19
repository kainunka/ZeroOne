import React from 'react';
import {
	View,
    StyleSheet
} from 'react-native';

const FooterBar = (props) => {

    return (
        <View style={styles.view}>
            {props.children}
        </View>
    );

}


const styles = StyleSheet.create({

   view: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#ffba0b',
        alignItems: 'center'
    }

});

export default FooterBar;