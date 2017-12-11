import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

var styles = StyleSheet.create({
    progressMask: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(30,30,30,0.3)',
    },
    progressToast: {
        height: 90,
        width: 120,
        backgroundColor: 'rgba(30,30,30,0.8)',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginTop: 5, 
        fontSize: 14
    }
})

export default class ProgressToast extends Component {

    static defaultProps = {
        title: '正在加载...',
        tintColor: '#fff',
    }

    render() {
        return (
            <View style={styles.progressMask}>
                <View style={styles.progressToast}>
                    <ActivityIndicator
                        animating={true}
                        size='large'
                        color={this.props.tintColor}
                        hidesWhenStopped={true}>
                    </ActivityIndicator>
                    <Text style={[{ color: this.props.tintColor }, styles.title]}>{this.props.title}</Text>
                </View>
            </View>
        )
    }
}