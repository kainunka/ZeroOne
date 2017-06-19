import React, { Component } from 'react';
import {
	View,
    StyleSheet,
    TextInput
} from 'react-native';

class TextInputActivity extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    render() {
        const { textInput } = styles;
        return (
            <TextInput
                style={ textInput }
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
            />
        );
    }
    

}

const styles = StyleSheet.create({
   textInput: {
        backgroundColor: 'white', 
        borderColor: 'gray', 
        borderWidth: 1,
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 10,
        paddingRight: 10,
        height: 40,
        marginBottom: 15

   }

});

export default TextInputActivity;