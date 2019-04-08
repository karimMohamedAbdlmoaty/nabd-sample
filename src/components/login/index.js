import React, { Component } from 'react';
import { View ,Text } from 'react-native';
import Header from "./header"
import SocialLogin from "./social-login"
import MailLogin from "./mail-login"

const Login = ({navigation,prev})=>{
    // onPress={() => this.props.navigation.goBack()}
    return(
        <View style={{ flex: 1, justifyContent:"center"}}>
            <Header navigation={navigation} prev={prev}/>
            <SocialLogin />
            <MailLogin navigation={navigation}/> 
        </View>

    )
  
}

export default Login;
