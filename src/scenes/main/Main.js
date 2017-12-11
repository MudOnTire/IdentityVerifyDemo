import React, { Component } from 'react';
import { View, TextInput, Text, TouchableHighlight, StyleSheet } from 'react-native';
import identifyService from '../../services/IdentityService';
import { Actions } from 'react-native-router-flux';
import ProgressToast from '../../components/ProgressToast';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffeee',
        justifyContent: 'center',
        padding: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textLabel: {
        flex: 1,
        height: 40,
        lineHeight: 40,
        textAlign: 'center',
        fontSize: 16
    },
    textInput: {
        flex: 3,
    },
    identifyBtn: {
        backgroundColor: '#841584',
        marginTop: 30,
        height: 40,
        justifyContent: 'center',
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 5,
    },
    identifyBtnText: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 18,
    }
});

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            name: '黄铭源',
            identityCode: '320483199405263115'
        }
    }

    _identify = async () => {
        this.setState({ isLoading: true });
        console.log(`will request with ${this.state.name}, ${this.state.identityCode}`);
        const response = await identifyService.identifyAsync(this.state.name, this.state.identityCode);
        setTimeout(() => {
            this.setState({ isLoading: false });
            Actions.push('resultScene', { response: response });
        }, 1000);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text style={styles.textLabel}>姓    名：</Text>
                    <TextInput
                        style={styles.textInput}
                        value={this.state.name}
                        onChangeText={(text) => this.setState({ name: text })}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.textLabel}>身份证：</Text>
                    <TextInput
                        style={styles.textInput}
                        value={this.state.identityCode}
                        onChangeText={(text) => this.setState({ identifyCode: text })}
                    />
                </View>
                <TouchableHighlight
                    activeOpacity={0.8}
                    underlayColor='#952695'
                    style={styles.identifyBtn}
                    onPress={this._identify}>
                    <Text style={styles.identifyBtnText}>
                        验   证
                    </Text>
                </TouchableHighlight>
                {
                    this.state.isLoading && <ProgressToast title='正在验证...' />
                }
            </View>
        )
    }
}