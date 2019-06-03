import React, { Component } from 'react';
import { TextInput } from 'react-native';

export default class EnterText extends Component {
    constructor(props) {
        super(props);
        this.state = { text: ''};
    }

    changeText(inputText) {
        const updatedText = inputText;
        this.setState({ text: updatedText});
    }

    render () {
        return (
                <TextInput
                    style={{borderColor: 'gray', 
                            borderWidth: 1}}
                    onChangeText={(text) => {this.props.onChange(text); this.changeText(text);}}
                    value={this.state.text}
                    placeholder = 'Text sht here!'
                />
        );
    }
}
