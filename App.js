import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from "./components/login";
import Register from "./components/registration";
import ChooseResources from "./components/choose-resources";
import ForgetPassword from "./components/forget-password";
import HomePage from './components/home';


export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        {/* <Register /> */}
        {/* <Login /> */}
        {/* <ChooseResources /> */}
        {/* <ForgetPassword /> */}
        <HomePage />
      </View>
    );
  }
}
