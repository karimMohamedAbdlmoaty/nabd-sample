import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableHighlight} from 'react-native';
import FaceLogin from "./face-login";
import TweetLogin from "./tweet-login";
import GoogleLogin from "./google-login";

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
