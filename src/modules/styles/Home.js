import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'black',
        flex: 1,
        width: null,
        height: null
    },

    progressBar: {
		backgroundColor: '#0a0a0a',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

    text: {
        fontSize: 18,
        flex: 2,
        textAlign: 'left',
        color: '#ffc80b',
        fontWeight: 'bold'
    },

    icon: {
        textAlign: 'right',
        padding: 10,
        flex: 1,
        color: '#ffc80b'
    },

});

export default styles;