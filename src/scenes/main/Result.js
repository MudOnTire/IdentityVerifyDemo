import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Result extends Component {
    render() {
        const text = decodeURI(JSON.stringify(this.props.response));
        return (
            <View>
                <Text>
                    {text}
                </Text>
            </View>
        )
    }
}