//  This is the entry point for your ios app into the React Native code. It’s where you’ll want to register your app (via AppRegistry)

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import PicItApp from './app'

AppRegistry.registerComponent('PicItApp', () => PicItApp);
