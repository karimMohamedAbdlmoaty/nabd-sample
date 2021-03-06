import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from "./src/components/login";
//mport Register from "./src/components/registration";
import {ChooseResources} from "./src/auth/screens/choose-resources/choose-resources.screen"
import ForgetPassword from "./src/components/forget-password";
import Resources from "./src/components/resources";
import HomePage from './src/components/home';
import MyResources from "./src/components/my-resources";
import MyAccount from "./src/components/my-account";
import Sports from "./src/components/sports";
import Magazines from "./src/components/magazines";
import {Nabd} from "./nabd";
import {Register} from "./src/auth"
import {Landing} from "./src/auth/screens/landing/landing.screen"


import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import store from './src/store';



class App extends Component {
  render() {
    return (
        <Provider store={store} style={{flex: 1}} >
          {/* <Register /> */}
          {/* <Landing /> */}
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
          {/* <Register /> */}
          <Nabd />
        </Provider>
    );
  }
}



AppRegistry.registerComponent(appName, () => App);