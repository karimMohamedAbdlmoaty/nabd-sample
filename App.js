import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Register from './components/registration';


export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Register />
      </View>
    );
  }
}
