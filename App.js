import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from "./components/login";
import Register from "./components/registration";
import ChooseResources from "./components/choose-resources";
import ForgetPassword from "./components/forget-password";
import NewsItem from "./components/NewsItem";
import Resources from "./components/resources";

import HomePage from './components/home';
import MyResources from "./components/myResources";
import MyAccount from "./components/myAccount";
import Sports from "./components/sports";
import Magazines from "./components/magazines";

import {Router} from "./components/Router";


export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        {/* <Register /> */}
        {/* <Login /> */}
        {/* <ChooseResources /> */}
        {/* <ForgetPassword /> */}
        {/* <HomePage /> */}
        {/* <NewsItem /> */}
        {/* <Resources /> */}
        {/* <MyResources /> */}
        {/* <MyAccount /> */}
        {/* <Sports /> */}
        {/* <Magazines /> */}
        <Router />
      </View>
    );
  }
}
