import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableHighlight} from 'react-native';
import FaceRegister from "./face-register";
import TweetRegister from "./tweet-register";
import GoogleRegister from "./google-register";

const SocialRegister= ()=>{
  return(
    <View style={{flex:4}}>
      <FaceRegister />
      <TweetRegister />
      <GoogleRegister />
    </View>
  );
  
}

export default SocialRegister;
