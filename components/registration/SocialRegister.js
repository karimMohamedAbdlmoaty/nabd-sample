import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableHighlight} from 'react-native';
import FaceRegister from "./FaceRegister";
import TweetRegister from "./TweetRegister";
import GoogleRegister from "./GoogleRegister";

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
