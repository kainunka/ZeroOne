import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: null,
        height: null,
        paddingTop: 20,

        opacity: 1
    },

     text: {
        fontSize: 14,
        padding: 15,
        textAlign: 'left',
        color: '#ffc80b',
        fontWeight: 'bold'
    },

    icon: {
        color: 'black'
    },
    subject: {
        height: 40,
        backgroundColor: 'white',
        padding:3
    },
    content: {
        height: 100,
        backgroundColor: 'white',
        padding:3
    },
    donate: {
        width: 150,
        backgroundColor: 'white'
    },
    checkbox: {
        marginTop: 25,
        width: 100,
        marginLeft: 10,
        backgroundColor: '#fff'
    },
    line: {
        flexDirection: 'row'
    },
    c: {
        marginLeft: 10
    }

});

export default styles;