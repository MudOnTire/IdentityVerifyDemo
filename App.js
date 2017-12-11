/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  Scene,
  Router,
  Actions,
  Reducer,
  Overlay,
  Tabs,
  Modal,
  Stack,
  Lightbox,
} from 'react-native-router-flux';
import Main from './src/scenes/main/Main';
import Result from './src/scenes/main/Result';

export default class App extends Component<{}> {
  render() {
    return (
      <Router key='root'>
        <Modal key='modal' hideNavBar>
          <Lightbox key='lightbox'>
            <Stack key='stack'>
              {require('@scenes/main')}
            </Stack>
          </Lightbox>
        </Modal>
      </Router>
    );
  }
}