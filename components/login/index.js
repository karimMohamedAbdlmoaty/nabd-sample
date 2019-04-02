import React, { Component } from 'react';
import { View ,Text } from 'react-native';
import Header from "./Header"
import SocialLogin from "./SocialLogin"
import MailLogin from "./MailLogin"

const Login = ({navigation})=>{
    return(
        <View style={{ flex: 1, justifyContent:"center"}}>
            <Header />
            <SocialLogin />
            <MailLogin navigation={navigation}/> 
        </View>

    )
  
}

export default Login;
