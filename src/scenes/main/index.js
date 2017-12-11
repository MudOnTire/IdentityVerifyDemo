import React, {Component} from 'react';
import { Scene } from 'react-native-router-flux';
import Main from './Main';
import Result from './Result';

module.exports = [
    <Scene hideNavBar key='mainScene' title='身份认证' component={Main} />,
    <Scene key='resultScene' title='认证结果' component={Result} />
]

