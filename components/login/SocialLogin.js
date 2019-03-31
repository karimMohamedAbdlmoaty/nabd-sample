import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableHighlight} from 'react-native';
import FaceLogin from "./FaceLogin";
import TweetLogin from "./TweetLogin";
import GoogleLogin from "./GoogleLogin";

const SocialLogin= ()=>{
  return(
    <View style={{flex:4}}>
      <FaceLogin />
      <TweetLogin />
      <GoogleLogin />
    </View>
  );
  
}

export default SocialLogin;
